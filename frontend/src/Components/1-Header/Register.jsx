import React, { useState, useContext } from "react";
import { Box, Typography, TextField, Button, Paper, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
  import { AuthContext } from "../../context/AuthContext";
  import { CartContext } from "../../context/CartContext";

const Register = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);
  const { login } = useContext(AuthContext);
  const { setCart } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API}/api/auth/local/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
            login(data.user);
            // Load user cart
            const userId = data.user.id;
            const userCart = localStorage.getItem(`cart_${userId}`);
            setCart(userCart ? JSON.parse(userCart) : []);
        navigate("/account");
      } else {
        setError(data.error?.message || "Registration failed");
      }
    } catch {
      setError("Network error");
    }
    setLoading(false);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: isDark ? "#232324" : "#f6f8fb", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: "100%", bgcolor: isDark ? "#292929" : "#fff", borderRadius: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: isDark ? "#fff" : "#222935", textAlign: "center" }}>Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
            InputProps={{ style: { color: isDark ? "#fff" : undefined } }}
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
            InputProps={{ style: { color: isDark ? "#fff" : undefined } }}
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
            InputProps={{ style: { color: isDark ? "#fff" : undefined } }}
          />
          {error && <Typography color="error" sx={{ mb: 2 }}>{error}</Typography>}
          <Button
            type="submit"
            variant="contained"
            color="error"
            fullWidth
            sx={{ fontWeight: 600, fontSize: 16, borderRadius: 2, py: 1.2, bgcolor: "#E94560", '&:hover': { bgcolor: "#d12d4c" } }}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </Button>
        </form>
        <Typography sx={{ mt: 2, color: isDark ? "#b0b3b8" : "#6B7280", textAlign: "center" }}>
          Already have an account?{' '}
          <Button variant="text" color="error" sx={{ textTransform: "none", fontWeight: 600, p: 0 }} onClick={() => navigate("/login")}>Login</Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;
