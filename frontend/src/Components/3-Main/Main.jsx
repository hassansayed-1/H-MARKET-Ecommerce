import React, { useContext, useState, useEffect } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  useTheme,
  IconButton,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
// import product from "../../../public/product.png";
import { CartContext } from "../../context/CartContext";
// import { useGetproductByNameQuery } from "../../Redux/product";
import { useGetproductByNameQuery } from '../../Redux/product';


export const Main = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const cardBg = isDark ? "#232324" : "#fff";
  const cardBorder = isDark ? "#292929" : "#eee";
  const textColor = isDark ? "#f3f4f6" : "#222935";
  const subTextColor = isDark ? "#b0b3b8" : "#6B7280";
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  // Track which product is being added for button feedback
  const [addingId, setAddingId] = useState(null);

  // Filter state
  const [filter, setFilter] = useState("All");
  const [endpoint, setEndpoint] = useState('products?populate=*');

  useEffect(() => {
    if (filter === "All") setEndpoint('products?populate=*');
    else if (filter === "Men") setEndpoint("products?populate=*&filters[category][$eq]=Men");
    else if (filter === "Women") setEndpoint("products?populate=*&filters[category][$eq]=Women");
  }, [filter]);

  const { data, error, isLoading } = useGetproductByNameQuery(endpoint);
  const products = data?.data || [];
  
  return (
    <Box
      sx={{
        bgcolor: isDark ? "#26272b" : "#f6f8fb",
        py: 3,
        px: { xs: 1, md: 3 },
      }}
    >
      {/* Responsive Filter Bar */}

      <Box
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", md: "center" },
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          mb: 4,
          gap: { xs: 2, md: 0 },
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ color: textColor, fontWeight: 600 }}>
            Selected Products
          </Typography>
          <Typography sx={{ color: subTextColor, fontSize: 15 }}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "row", md: "row" },
            width: { xs: "100%", md: "auto" },
            justifyContent: { xs: "flex-start", md: "flex-end" },
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor:
                filter === "All" ? "#E94560" : isDark ? "#232324" : "#f6f8fb",
              color: filter === "All" ? "#fff" : textColor,
              borderColor:
                filter === "All" ? "#E94560" : isDark ? "#444" : "#cfd8dc",
              fontWeight: 600,
              fontSize: 16,
              px: 2.5,
              py: 1,
              borderRadius: 2,
              boxShadow: "none",
              minWidth: 120,
              "&:hover": {
                bgcolor:
                  filter === "All" ? "#d12d4c" : isDark ? "#232324" : "#f6f8fb",
                color: filter === "All" ? "#fff" : "#E94560",
                borderColor: "#E94560",
              },
              transition: "all 0.15s",
            }}
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor:
                filter === "Men" ? "#E94560" : isDark ? "#232324" : "#f6f8fb",
              color: filter === "Men" ? "#fff" : textColor,
              borderColor:
                filter === "Men" ? "#E94560" : isDark ? "#444" : "#cfd8dc",
              fontWeight: 600,
              fontSize: 16,
              px: 2.5,
              py: 1,
              borderRadius: 2,
              boxShadow: "none",
              minWidth: 120,
              "&:hover": {
                bgcolor:
                  filter === "Men" ? "#d12d4c" : isDark ? "#232324" : "#f6f8fb",
                color: filter === "Men" ? "#fff" : "#E94560",
                borderColor: "#E94560",
              },
              transition: "all 0.15s",
            }}
            onClick={() => setFilter("Men")}
          >
            MEN
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor:
                filter === "Women" ? "#E94560" : isDark ? "#232324" : "#f6f8fb",
              color: filter === "Women" ? "#fff" : textColor,
              borderColor:
                filter === "Women" ? "#E94560" : isDark ? "#444" : "#cfd8dc",
              fontWeight: 600,
              fontSize: 16,
              px: 2.5,
              py: 1,
              borderRadius: 2,
              boxShadow: "none",
              minWidth: 120,
              "&:hover": {
                bgcolor:
                  filter === "Women"
                    ? "#d12d4c"
                    : isDark
                    ? "#232324"
                    : "#f6f8fb",
                color: filter === "Women" ? "#fff" : "#E94560",
                borderColor: "#E94560",
              },
              transition: "all 0.15s",
            }}
            onClick={() => setFilter("Women")}
          >
            Women
          </Button>
        </Box>
      </Box>
      {/* Products Grid */}
      {/* Loading and error states */}
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 200 }}>
          <Typography variant="h6" color="text.secondary">Loading products...</Typography>
        </Box>
      )}
      {error && (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 200 }}>
          <Typography variant="h6" color="error">Failed to load products.</Typography>
        </Box>
      )}
      {!isLoading && !error && (
        <Grid container spacing={5} justifyContent="center">
          {products.map((product) => {
            // Strapi v4+ returns attributes in product.attributes
            // const prod = product.attributes || {};
            return (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={product.id}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: cardBg,
                    border: `1px solid ${cardBorder}`,
                    borderRadius: 3,
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minHeight: 420,
                    transition: "box-shadow 0.2s",
                    boxShadow: isDark ? "0 1px 4px 0 #0002" : "0 1px 4px 0 #0001",
                    "&:hover": {
                      boxShadow: isDark
                        ? "0 4px 16px 0 #0005"
                        : "0 4px 16px 0 #0002",
                      cursor: "pointer",
                    },
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onClick={() => {
                    navigate(`/product/${product.id}`);
                    window.scrollTo({ top: 0 });
                  }}
                >
                  <Box
                    component="img"
                    src={`${import.meta.env.VITE_API}${product.image?.url || ""}`}
                    alt={product.Title}
                    sx={{
                      width: 240,
                      height: 180,
                      objectFit: "contain",
                      mb: 2,
                      filter: isDark ? "brightness(0.92)" : "none",
                      borderRadius: 2,
                      background: isDark ? "#292929" : "#f6f8fb",
                      pointerEvents: "none",
                    }}
                  />
                  <Typography
                    sx={{
                      color: textColor,
                      fontWeight: 500,
                      fontSize: 18,
                      mb: 1,
                      textAlign: "center",
                      pointerEvents: "none",
                    }}
                  >
                    {product.Title}
                  </Typography>
                  <Typography
                    sx={{
                      color: textColor,
                      fontWeight: 600,
                      fontSize: 18,
                      mb: 1,
                      textAlign: "center",
                      pointerEvents: "none",
                    }}
                  >
                    ${product.price?.toFixed(2) ?? "-"}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      pointerEvents: "none",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{
                          color: i < Math.round(product.reviews || 0) ? "#FFC107" : subTextColor,
                          fontSize: 20,
                        }}
                      />
                    ))}
                    <Typography sx={{ color: subTextColor, fontSize: 15, ml: 0.5 }}>
                      ({product.reviews ?? 0})
                    </Typography>
                  </Box>
                  {/* Add to Cart Button */}
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100%",
                      mt: 2,
                      bgcolor: addingId === product.id ? "#E94560" : "transparent",
                      color: isDark ? "#fff" : "#222935",
                      borderColor: isDark ? "#444" : "#cfd8dc",
                      fontWeight: 600,
                      fontSize: 16,
                      borderRadius: 2,
                      px: 2.5,
                      py: 1.2,
                      boxShadow: "none",
                      minWidth: 0,
                      "&:hover": {
                        bgcolor: "#E94560",
                        color: "#fff",
                        borderColor: "#E94560",
                      },
                      transition: "all 0.15s",
                      zIndex: 2,
                      position: "relative",
                      pointerEvents: "auto",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setAddingId(product.id);
                      setTimeout(() => setAddingId(null), 2000);
                      addToCart({ ...product, id: product.id });
                    }}
                  >
                    {addingId === product.id ? "Added!" : "ADD TO CART"}
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};
