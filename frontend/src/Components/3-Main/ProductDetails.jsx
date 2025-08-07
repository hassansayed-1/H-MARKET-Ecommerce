import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Paper,
  useTheme,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { CartContext } from "../../context/CartContext";
import { useGetproductByNameQuery } from "../../Redux/product";

const ProductDetails = () => {
  const { id } = useParams();
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { addToCart } = useContext(CartContext);
  const [adding, setAdding] = useState(false);
  const [addingId, setAddingId] = useState(null);
  const navigate = useNavigate();

  // 1. Fetch the selected product by ID
  const [productEndpoint, setProductEndpoint] = useState(null);
  useEffect(() => {
    setProductEndpoint(`products?populate=*&filters[id][$eq]=${id}`);
  }, [id]);
  const { data: productData, error, isLoading } = useGetproductByNameQuery(productEndpoint, { skip: !productEndpoint });
  const product = productData?.data?.[0];

  // 2. Fetch related products by category, after product is loaded
  const [relatedEndpoint, setRelatedEndpoint] = useState(null);
  useEffect(() => {
    if (product?.category) {
      setRelatedEndpoint(
        `products?populate=*&filters[category][$eq]=${encodeURIComponent(product.category)}&filters[id][$ne]=${id}&pagination[limit]=4`
      );
    }
  }, [product, id]);
  const { data: relatedData } = useGetproductByNameQuery(relatedEndpoint, { skip: !relatedEndpoint });
  const relatedProducts = relatedData?.data || [];

  // Loading state
  if (isLoading || !productEndpoint) {
    return (
      <Box sx={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h5" color="text.secondary">Loading product...</Typography>
      </Box>
    );
  }

  // Error or not found
  if (error || !product) {
    return (
      <Box sx={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h5" color="error">Product not found.</Typography>
      </Box>
    );
  }

  const cardBg = isDark ? "#232324" : "#fff";
  const cardBorder = isDark ? "#292929" : "#eee";
  const textColor = isDark ? "#f3f4f6" : "#222935";
  const subTextColor = isDark ? "#b0b3b8" : "#6B7280";
  const imageUrl = product.image?.url ? `${import.meta.env.VITE_API}${product.image.url}` : "/placeholder.png";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: isDark ? cardBg : "#fff",
        py: 10,
        minHeight: "100vh",
      }}
    >
      {/* Product Section */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: cardBg,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          width: "100%",
          maxWidth: 1100,
          gap: { xs: 3, md: 10 },
          px: { xs: 3, md: 5 },
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", md: "50%" },
          }}
        >
          <Box
            component="img"
            src={imageUrl}
            alt={product.Title}
            sx={{
              width: { xs: 260, md: 400 },
              height: { xs: 220, md: 400 },
              objectFit: "contain",
              borderRadius: 2,
              background: isDark ? "#292929" : "#f6f8fb",
              boxShadow: isDark ? "0 2px 8px #0003" : "0 2px 8px #0001",
            }}
          />
        </Box>
        <Box sx={{ flex: 1, width: { xs: "100%", md: "50%" } }}>
          <Typography
            sx={{
              color: textColor,
              fontWeight: 600,
              fontSize: 30,
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {product.Title}
          </Typography>
          <Typography
            sx={{
              color: textColor,
              fontWeight: 700,
              fontSize: 26,
              mb: 3,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            ${product.price?.toFixed(2) || "-"}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                sx={{
                  color: i < Math.round(product.reviews || 0) ? "#FFC107" : subTextColor,
                  fontSize: 19,
                }}
              />
            ))}
            <Typography sx={{ color: subTextColor, fontSize: 18, ml: 1 }}>
              ({product.reviews || 0})
            </Typography>
          </Box>
          <Typography sx={{ color: subTextColor, fontSize: 18, mb: 5 }}>
            {product.description}
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: { xs: "100%", md: 240 },
              bgcolor: adding ? "#E94560" : "transparent",
              color: isDark ? "#fff" : "#222935",
              borderColor: isDark ? "#444" : "#cfd8dc",
              fontWeight: 600,
              fontSize: 20,
              borderRadius: 2,
              px: 2.5,
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
              mb: 2,
            }}
            onClick={() => {
              setAdding(true);
              addToCart(product);
              setTimeout(() => setAdding(false), 1200);
            }}
          >
            {adding ? "Added!" : "ADD TO CART"}
          </Button>
          <Button
            variant="text"
            sx={{
              ml: 2,
              color: "#E94560",
              fontWeight: 500,
              fontSize: 17,
              textTransform: "none",
              display: { xs: "block", md: "inline-block" },
            }}
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0 });
            }}
          >
            Back to Products
          </Button>
        </Box>
      </Paper>

      {/* Related Products Section */}
      <Box sx={{ mt: 8, width: "100%", maxWidth: 1200 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: textColor,
            mb: 3,
            ml: { xs: 1, md: 3 },
          }}
        >
          Related Products
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 3,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {relatedProducts.map((rel) => {
            const relProd = rel;
            const relImageUrl = relProd.image?.url
              ? `${import.meta.env.VITE_API}${relProd.image.url}`
              : "/placeholder.png";
            return (
              <Paper
                key={rel.id}
                elevation={0}
                sx={{
                  bgcolor: cardBg,
                  border: `1px solid ${cardBorder}`,
                  borderRadius: 3,
                  p: 3,
                  width: 280,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  boxShadow: isDark ? "0 1px 4px 0 #0002" : "0 1px 4px 0 #0001",
                  transition: "box-shadow 0.2s",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: isDark
                      ? "0 4px 16px 0 #0005"
                      : "0 4px 16px 0 #0002",
                  },
                }}
                onClick={() => {
                  navigate(`/product/${rel.id}`);
                  window.scrollTo({ top: 0 });
                }}
              >
                <Box
                  component="img"
                  src={relImageUrl}
                  alt={relProd.Title}
                  sx={{
                    width: 180,
                    height: 180,
                    objectFit: "contain",
                    mb: 2,
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
                  {relProd.Title}
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
                  ${relProd.price?.toFixed(2) || "-"}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    pointerEvents: "none",
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      sx={{
                        color: i < Math.round(relProd.reviews || 0) ? "#FFC107" : subTextColor,
                        fontSize: 20,
                      }}
                    />
                  ))}
                  <Typography sx={{ color: subTextColor, fontSize: 15, ml: 0.5 }}>
                    ({relProd.reviews || 0})
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  sx={{
                    width: "100%",
                    mt: 1,
                    bgcolor: addingId === rel.id ? "#E94560" : "transparent",
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
                    setAddingId(rel.id);
                    addToCart({ ...relProd, id: rel.id });
                    setTimeout(() => setAddingId(null), 1200);
                  }}
                >
                  {addingId === rel.id ? "Added!" : "ADD TO CART"}
                </Button>
              </Paper>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetails;
