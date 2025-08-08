
import React, { useEffect, useState, useContext } from "react";
import { Box, Typography, Paper, Button, Divider, useTheme, IconButton, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";

const Account = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const { cart, removeFromCart, incrementQty, decrementQty, clearCart } = useContext(CartContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  if (!user) {
    return (
      <Box sx={{ minHeight: "100vh", bgcolor: isDark ? "#232324" : "#f6f8fb", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
        <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: "100%", bgcolor: isDark ? "#292929" : "#fff", borderRadius: 3, textAlign: "center" }}>
          <Typography variant="h6" sx={{ color: isDark ? "#fff" : "#222935", mb: 2 }}>You are not logged in.</Typography>
          <Button variant="contained" color="error" sx={{ fontWeight: 600, borderRadius: 2, bgcolor: "#E94560", '&:hover': { bgcolor: "#d12d4c" } }} onClick={() => navigate("/login")}>Login</Button>
        </Paper>
      </Box>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    clearCart(); // Only clear context, do not remove user cart from localStorage
    window.location.reload();
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * (item.qty || 1), 0);

  const handleBuy = () => {
    // Add your buy logic here (e.g., redirect to checkout, show alert, etc.)
    alert("Proceeding to buy!");
  };

  const handleGoHome = () => {
    navigate("/");
    window.scrollTo({ top: 0 });
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: isDark ? "#232324" : "#f6f8fb", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600, width: "100%", bgcolor: isDark ? "#292929" : "#fff", borderRadius: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: isDark ? "#fff" : "#222935" }}>My Account</Typography>
        <Typography sx={{ color: isDark ? "#b0b3b8" : "#6B7280", mb: 2 }}>Welcome, <b>{user.username || user.email}</b></Typography>
        <Divider sx={{ mb: 3, bgcolor: isDark ? "#292929" : "#eee" }} />
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: isDark ? "#fff" : "#222935" }}>Cart Contents</Typography>
        {cart.length === 0 ? (
          <Typography sx={{ color: isDark ? "#b0b3b8" : "#6B7280", mb: 2 }}>Your cart is empty.</Typography>
        ) : (
          <Box>
            {cart.map((item) => (
              <Box key={item.id} sx={{ display: "flex", alignItems: "center", mb: 2, gap: 2 }}>
                <Box component="img" src={item.image?.url} alt={item.name} sx={{ width: 56, height: 44, objectFit: "contain", borderRadius: 1, bgcolor: isDark ? "#292929" : "#f6f8fb", mr: 1 }} />
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontWeight: 500, fontSize: 15, color: isDark ? "#fff" : "#222935" }}>{item.name}</Typography>
                  <Typography sx={{ fontSize: 14, color: isDark ? "#b0b3b8" : "#6B7280" }}>${item.price.toFixed(2)}</Typography>
                </Box>
                <ButtonGroup size="small" sx={{ mr: 1 }}>
                  <IconButton onClick={() => decrementQty(item.id)} sx={{ color: isDark ? "#fff" : "#222935", border: "1px solid #e0e0e0" }}>
                    <RemoveIcon fontSize="small" />
                  </IconButton>
                  <Box sx={{ px: 1, minWidth: 24, textAlign: "center", fontWeight: 600, color: isDark ? "#fff" : "#222935", display: "flex", alignItems: "center", justifyContent: "center" }}>{item.qty}</Box>
                  <IconButton onClick={() => incrementQty(item.id)} sx={{ color: isDark ? "#fff" : "#222935", border: "1px solid #e0e0e0" }}>
                    <AddIcon fontSize="small" />
                  </IconButton>
                </ButtonGroup>
                <IconButton onClick={() => removeFromCart(item.id)} sx={{ color: "#E94560" }}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            ))}
            <Divider sx={{ my: 2, bgcolor: isDark ? "#292929" : "#eee" }} />
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography sx={{ fontWeight: 600, color: isDark ? "#fff" : "#222935" }}>Total:</Typography>
              <Typography sx={{ fontWeight: 700, fontSize: 18, color: "#E94560" }}>${cartTotal.toFixed(2)}</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
              <Button variant="contained" color="error" sx={{ fontWeight: 600, borderRadius: 2, bgcolor: "#E94560", '&:hover': { bgcolor: "#d12d4c" }, flex: 1 }} onClick={handleBuy}>Buy</Button>
            </Box>
          </Box>
        )}
        <Divider sx={{ my: 3, bgcolor: isDark ? "#292929" : "#eee" }} />
        <Button variant="contained" color="error" sx={{ fontWeight: 600, borderRadius: 2, bgcolor: "#E94560", '&:hover': { bgcolor: "#d12d4c" } }} onClick={handleLogout}>Logout</Button>
        <Button variant="outlined" color="primary" sx={{ fontWeight: 600, borderRadius: 2, flex: 1, ml: 3 }} onClick={handleGoHome}>Go to Home</Button>
      </Paper>
    </Box>
  );
};

export default Account;
