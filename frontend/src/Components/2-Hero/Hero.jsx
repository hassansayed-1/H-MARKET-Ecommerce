import { Box, Button, Typography, Grid, Paper, useTheme, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";

// Simple slider for two images
const heroSlides = [
  {
    img: "../../../public/slider.png",
    title: "MEN",
    subtitle: "LIFESTYLE COLLECTION",
    sale: "SALE UP TO 30% OFF",
    desc: "Get Free Shipping on orders over $99.00",
    btn: "Shop Now",
  },
  {
    img: "../../../public/slider3.png",
    title: "MEN",
    subtitle: "PERFYOUMS & ACCESSORIES",
    sale: "SALE UP TO 35% OFF",
    desc: "Get Free Shipping on orders over $99.00",
    btn: "Shop Now",
  },
];

export const Hero = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const darkBg = "#26272b";
  const darkPaper = "#232324";

  const [slide, setSlide] = React.useState(0);

  const leftWidth = 1000;
  const rightWidth = 320;
  const heroHeight = 500;

  const handlePrev = () => setSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  const handleNext = () => setSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));

  return (
    <Box sx={{ bgcolor: isDark ? darkBg : "#f6f8fb", py: 3, px: { xs: 1, md: 3 } }}>
      {/* MOBILE: Slider box with new design, right boxes below in column */}
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        sx={{
          display: { xs: "flex", md: "none" }, // Only mobile
        }}
      >
        <Grid item xs={12}>
          {/* SLIDER BOX - NEW DESIGN */}
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              bgcolor: isDark ? darkPaper : "#fff",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minHeight: 340,
              boxSizing: "border-box",
              px: 2,
              py: 4,
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                color: isDark ? "#b0b3b8" : "#222935",
                fontWeight: 400,
                textAlign: "center",
                mb: 2,
                fontSize: 18,
              }}
            >
              {heroSlides[slide].subtitle}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: isDark ? "#f3f4f6" : "#222935",
                fontSize: 32,
                lineHeight: 1.1,
                mb: 2,
                textAlign: "center",
              }}
            >
              {heroSlides[slide].title}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 400,
                color: "#E94560",
                mb: 2,
                fontSize: 20,
                textAlign: "center",
              }}
            >
              {heroSlides[slide].sale}
            </Typography>
            <Typography
              sx={{
                color: isDark ? "#b0b3b8" : "#222935",
                mb: 2,
                textAlign: "center",
                fontSize: 15,
              }}
            >
              {heroSlides[slide].desc}
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#222935",
                color: "#fff",
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontWeight: 600,
                fontSize: 18,
                boxShadow: "0 2px 8px #0002",
                textTransform: "none",
                mt: 2,
                mx: "auto",
                display: "block",
                "&:hover": { bgcolor: "#E94560" },
              }}
            >
              {heroSlides[slide].btn}
            </Button>
            {/* Slider Controls */}
            <Box
              sx={{
                mt: 4,
                display: "flex",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                onClick={handlePrev}
                sx={{
                  bgcolor: isDark ? "#232324" : "#fff",
                  color: isDark ? "#b0b3b8" : "#222935",
                  borderRadius: 2,
                  boxShadow: isDark ? "0 1px 4px #0008" : "0 1px 4px #0002",
                  mr: 1,
                  "&:hover": { bgcolor: "#E94560", color: "#fff" },
                  transition: "all 0.2s",
                  p: 0.5,
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              {[0, 1].map((i) => (
                <Box
                  key={i}
                  onClick={() => setSlide(i)}
                  sx={{
                    width: 16,
                    height: 8,
                    borderRadius: 4,
                    bgcolor: slide === i ? "#222935" : isDark ? "#444" : "#e0e0e0",
                    opacity: slide === i ? 1 : 0.5,
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
              <IconButton
                onClick={handleNext}
                sx={{
                  bgcolor: isDark ? "#232324" : "#fff",
                  color: isDark ? "#b0b3b8" : "#222935",
                  borderRadius: 2,
                  boxShadow: isDark ? "0 1px 4px #0008" : "0 1px 4px #0002",
                  ml: 1,
                  "&:hover": { bgcolor: "#E94560", color: "#fff" },
                  transition: "all 0.2s",
                  p: 0.5,
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
        {/* RIGHT BOXES BELOW SLIDER */}
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: "100%",
              mt: 2,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                p: 3,
                display: "flex",
                alignItems: "center",
                minHeight: 120,
                bgcolor: isDark ? darkPaper : "#fcfcfa",
                mb: 2,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: isDark ? "#b0b3b8" : "#6B7280", fontWeight: 500 }}>
                  NEW ARRIVALS
                </Typography>
                <Typography variant="h6" sx={{ color: isDark ? "#f3f4f6" : "#222935", fontWeight: 600 }}>
                  SUMMER SALE 20% OFF
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: isDark ? "#f3f4f6" : "#222935",
                    fontWeight: 500,
                    textTransform: "none",
                    px: 0,
                    mt: 1,
                    fontSize: 15,
                    "&:hover": { color: "#E94560", bgcolor: "transparent" },
                  }}
                  endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>→</span>}
                >
                  Shop Now
                </Button>
              </Box>
              <Box
                component="img"
                src="../../../public/shoes2.png"
                alt="Summer Sale"
                sx={{
                  width: 60,
                  height: "auto",
                  ml: 2,
                  objectFit: "contain",
                  filter: isDark ? "brightness(0.85)" : "none",
                }}
              />
            </Paper>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                p: 3,
                display: "flex",
                alignItems: "center",
                minHeight: 120,
                bgcolor: isDark ? darkPaper : "#fcfcfa",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: isDark ? "#b0b3b8" : "#6B7280", fontWeight: 500 }}>
                  GAMING 4K
                </Typography>
                <Typography variant="h6" sx={{ color: isDark ? "#f3f4f6" : "#222935", fontWeight: 600 }}>
                  DESKTOPS & LAPTOPS
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: isDark ? "#f3f4f6" : "#222935",
                    fontWeight: 500,
                    textTransform: "none",
                    px: 0,
                    mt: 1,
                    fontSize: 15,
                    "&:hover": { color: "#E94560", bgcolor: "transparent" },
                  }}
                  endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>→</span>}
                >
                  Shop Now
                </Button>
              </Box>
              <Box
                component="img"
                src="../../../public/laptop.png"
                alt="Desktops & Laptops"
                sx={{
                  width: 60,
                  height: "auto",
                  ml: 2,
                  objectFit: "contain",
                  filter: isDark ? "brightness(0.85)" : "none",
                }}
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>
      {/* DESKTOP/TABLET LAYOUT REMAINS UNCHANGED */}
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        {/* Left: Slider */}
        <Grid
          item
          xs={12}
          md={8}
          lg={8}
          sx={{
            width: {
              xs: "100%",
              md: "100%",
              lg: leftWidth,
            },
            maxWidth: {
              xs: "100%",
              md: "1000px",
              lg: leftWidth,
            },
            minWidth: 0,
            mb: { xs: 2, md: 0 },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              bgcolor: isDark ? darkPaper : "#fcfcfa",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: {
                xs: "auto",
                md: heroHeight,
              },
              minHeight: {
                xs: "auto",
                md: heroHeight,
              },
              boxSizing: "border-box",
              cursor: "pointer",
              transition: "box-shadow 0.2s",
              "&:hover": { boxShadow: isDark ? "0 2px 16px #0008" : "0 2px 16px #0002" },
              width: "100%",
              px: { xs: 2, md: 6 },
            }}
            onMouseEnter={e => (e.currentTarget.style.cursor = "pointer")}
            onMouseLeave={e => (e.currentTarget.style.cursor = "pointer")}
          >
            {/* Slider Content */}
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "flex-start", md: "center" },
                justifyContent: "center",
                px: { xs: 0, md: 6 },
              }}
            >
              {/* Words Left */}
              <Box
                sx={{
                  flex: 1,
                  zIndex: 1,
                  pr: { xs: 0, md: 4 },
                  py: { xs: 3, md: 0 },
                  width: "100%",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: isDark ? "#b0b3b8" : "#222935", fontWeight: 400, mb: 2 }}>
                  {heroSlides[slide].subtitle}
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    color: isDark ? "#f3f4f6" : "#222935",
                    fontSize: { xs: 32, sm: 40, md: 56 },
                    lineHeight: 1.1,
                    mb: 2,
                  }}
                >
                  {heroSlides[slide].title}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 400,
                    color: isDark ? "#f3f4f6" : "#222935",
                    mb: 2,
                    fontSize: { xs: 18, sm: 20, md: 24 },
                  }}
                >
                  {heroSlides[slide].sale}
                </Typography>
                <Typography sx={{ color: isDark ? "#b0b3b8" : "#6B7280", mb: 2 }}>
                  {heroSlides[slide].desc}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#222935",
                    color: "#fff",
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    fontWeight: 600,
                    fontSize: 18,
                    boxShadow: "none",
                    textTransform: "none",
                    "&:hover": { bgcolor: "#E94560" },
                  }}
                >
                  {heroSlides[slide].btn}
                </Button>
              </Box>
              {/* Image Right: Hide on mobile */}
              <Box
                sx={{
                  flex: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "100%",
                  position: "relative",
                  zIndex: 0,
                }}
              >
                <Box
                  component="img"
                  src={heroSlides[slide].img}
                  alt={heroSlides[slide].title}
                  sx={{
                    height: { md: 320, lg: 400 },
                    width: "auto",
                    objectFit: "contain",
                    borderRadius: 3,
                    mr: 2,
                    filter: isDark ? "brightness(0.85)" : "none",
                  }}
                />
              </Box>
            </Box>
            {/* Slider Controls */}
            <Box
              sx={{
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={handlePrev}
                sx={{
                  bgcolor: isDark ? "#232324" : "#fff",
                  color: isDark ? "#b0b3b8" : "#222935",
                  borderRadius: 2,
                  boxShadow: isDark ? "0 1px 4px #0008" : "0 1px 4px #0002",
                  mr: 1,
                  "&:hover": { bgcolor: "#E94560", color: "#fff" },
                  transition: "all 0.2s",
                }}
              >
                <ChevronLeftIcon />
              </IconButton>
              {[0, 1].map((i) => (
                <Box
                  key={i}
                  onClick={() => setSlide(i)}
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    bgcolor: slide === i ? "#E94560" : isDark ? "#444" : "#e0e0e0",
                    border: slide === i ? "2px solid #fff" : "2px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
              <IconButton
                onClick={handleNext}
                sx={{
                  bgcolor: isDark ? "#232324" : "#fff",
                  color: isDark ? "#b0b3b8" : "#222935",
                  borderRadius: 2,
                  boxShadow: isDark ? "0 1px 4px #0008" : "0 1px 4px #0002",
                  ml: 1,
                  "&:hover": { bgcolor: "#E94560", color: "#fff" },
                  transition: "all 0.2s",
                }}
              >
                <ChevronRightIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
        {/* Right: Two stacked boxes, responsive */}
        <Grid
          item
          xs={12}
          md={4}
          lg={4}
          sx={{
            width: {
              xs: "100%",
              md: rightWidth,
              lg: rightWidth,
            },
            maxWidth: {
              xs: "100%",
              md: rightWidth,
              lg: rightWidth,
            },
            minWidth: 0,
            mb: { xs: 0, md: 0 },
          }}
        >
          <Box
            sx={{
              display: {md: "none", lg: "flex"},
              flexDirection: { xs: "column", md: "column", lg: "column" },
              gap: 2,
              width: "100%",
            }}
          >
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                p: 3,
                display: "flex",
                alignItems: "center",
                minHeight: { xs: 120, md: 240 },
                bgcolor: isDark ? darkPaper : "#fcfcfa",
                mb: 2,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: isDark ? "#b0b3b8" : "#6B7280", fontWeight: 500 }}>
                  NEW ARRIVALS
                </Typography>
                <Typography variant="h6" sx={{ color: isDark ? "#f3f4f6" : "#222935", fontWeight: 600 }}>
                  SUMMER SALE 20% OFF
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: isDark ? "#f3f4f6" : "#222935",
                    fontWeight: 500,
                    textTransform: "none",
                    px: 0,
                    mt: 1,
                    fontSize: 15,
                    "&:hover": { color: "#E94560", bgcolor: "transparent" },
                  }}
                  endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>→</span>}
                >
                  Shop Now
                </Button>
              </Box>
              <Box
                component="img"
                src="../../../public/shoes2.png"
                alt="Summer Sale"
                sx={{
                  width: { xs: 60, md: 100 },
                  height: "auto",
                  ml: 2,
                  objectFit: "contain",
                  filter: isDark ? "brightness(0.85)" : "none",
                }}
              />
            </Paper>
            <Paper
              elevation={0}
              sx={{
                borderRadius: 3,
                p: 3,
                display: "flex",
                alignItems: "center",
                minHeight: { xs: 120, md: 240 },
                bgcolor: isDark ? darkPaper : "#fcfcfa",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="subtitle2" sx={{ color: isDark ? "#b0b3b8" : "#6B7280", fontWeight: 500 }}>
                  GAMING 4K
                </Typography>
                <Typography variant="h6" sx={{ color: isDark ? "#f3f4f6" : "#222935", fontWeight: 600 }}>
                  DESKTOPS & LAPTOPS
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    color: isDark ? "#f3f4f6" : "#222935",
                    fontWeight: 500,
                    textTransform: "none",
                    px: 0,
                    mt: 1,
                    fontSize: 15,
                    "&:hover": { color: "#E94560", bgcolor: "transparent" },
                  }}
                  endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>→</span>}
                >
                  Shop Now
                </Button>
              </Box>
              <Box
                component="img"
                src="../../../public/laptop.png"
                alt="Desktops & Laptops"
                sx={{
                  width: { xs: 60, md: 100 },
                  height: "auto",
                  ml: 2,
                  objectFit: "contain",
                  filter: isDark ? "brightness(0.85)" : "none",
                }}
              />
            </Paper>
          </Box>
        </Grid>
      </Grid>
      {/* For iPad and medium screens: right boxes side by side below slider */}
      <Grid
        container
        spacing={2}
        sx={{
          display: { xs: "none", md: "flex", lg: "none" },
          mt: { md: 2 },
        }}
      >
        <Grid item xs={6}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              p: 3,
              display: "flex",
              alignItems: "center",
              minHeight: 180,
              bgcolor: isDark ? darkPaper : "#fcfcfa",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" sx={{ color: isDark ? "#b0b3b8" : "#6B7280", fontWeight: 500 }}>
                NEW ARRIVALS
              </Typography>
              <Typography variant="h6" sx={{ color: isDark ? "#f3f4f6" : "#222935", fontWeight: 600 }}>
                SUMMER SALE 20% OFF
              </Typography>
              <Button
                variant="text"
                sx={{
                  color: isDark ? "#f3f4f6" : "#222935",
                  fontWeight: 500,
                  textTransform: "none",
                  px: 0,
                  mt: 1,
                  fontSize: 15,
                  "&:hover": { color: "#E94560", bgcolor: "transparent" },
                }}
                endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>→</span>}
              >
                Shop Now
              </Button>
            </Box>
            <Box
              component="img"
              src="../../../public/shoes2.png"
              alt="Summer Sale"
              sx={{
                width: 80,
                height: "auto",
                ml: 2,
                objectFit: "contain",
                filter: isDark ? "brightness(0.85)" : "none",
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 3,
              p: 3,
              display: "flex",
              alignItems: "center",
              minHeight: 180,
              bgcolor: isDark ? darkPaper : "#fcfcfa",
              width: "100%",
              boxSizing: "border-box",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="subtitle2" sx={{ color: isDark ? "#b0b3b8" : "#6B7280", fontWeight: 500 }}>
                GAMING 4K
              </Typography>
              <Typography variant="h6" sx={{ color: isDark ? "#f3f4f6" : "#222935", fontWeight: 600 }}>
                DESKTOPS & LAPTOPS
              </Typography>
              <Button
                variant="text"
                sx={{
                  color: isDark ? "#f3f4f6" : "#222935",
                  fontWeight: 500,
                  textTransform: "none",
                  px: 0,
                  mt: 1,
                  fontSize: 15,
                  "&:hover": { color: "#E94560", bgcolor: "transparent" },
                }}
                endIcon={<span style={{ fontSize: 18, marginLeft: 4 }}>→</span>}
              >
                Shop Now
              </Button>
            </Box>
            <Box
              component="img"
              src="../../../public/laptop.png"
              alt="Desktops & Laptops"
              sx={{
                width: 80,
                height: "auto",
                ml: 2,
                objectFit: "contain",
                filter: isDark ? "brightness(0.85)" : "none",
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      {/* Features Section */}
      <Box
        sx={{
          bgcolor: isDark ? "#232324" : "#fff",
          borderRadius: 3,
          mt: 3,
          px: { xs: 1, md: 3 },
          py: { xs: 2, md: 3 },
          boxShadow: isDark ? "0 1px 4px 0 #0002" : "0 1px 4px 0 #0001",
        }}
      >
        <Grid
          container
          spacing={0}
          justifyContent="space-between"
          alignItems="center"
        >
          {[
            {
              icon: (
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <path fill={isDark ? "#f3f4f6" : "#222935"} d="M6 24h20v2H6z"/>
                  <path fill={isDark ? "#b0b3b8" : "#6B7280"} d="M8 10h16v10H8z"/>
                  <path fill="#E94560" d="M4 24V8a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v16"/>
                </svg>
              ),
              title: "Fast Delivery",
              subtitle: "Start from $10",
            },
            {
              icon: (
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <path fill={isDark ? "#f3f4f6" : "#222935"} d="M16 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16z"/>
                  <path fill="#E94560" d="M16 20v8"/>
                  <path stroke={isDark ? "#b0b3b8" : "#6B7280"} strokeWidth="2" d="M12 28h8"/>
                </svg>
              ),
              title: "Money Guarantee",
              subtitle: "7 Days Back",
            },
            {
              icon: (
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <circle cx="16" cy="16" r="12" fill={isDark ? "#f3f4f6" : "#222935"} />
                  <path fill="#E94560" d="M16 8v8l6 3"/>
                </svg>
              ),
              title: "365 Days",
              subtitle: "For free return",
            },
            {
              icon: (
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
                  <rect x="6" y="10" width="20" height="12" fill={isDark ? "#f3f4f6" : "#222935"} />
                  <path fill="#E94560" d="M10 18h12v2H10z"/>
                  <path stroke={isDark ? "#b0b3b8" : "#6B7280"} strokeWidth="2" d="M16 22v4"/>
                </svg>
              ),
              title: "Payment",
              subtitle: "Secure system",
            },
          ].map((item, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={item.title}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: { xs: 2, md: 0 },
                px: { xs: 4, md: 6 },
                mb: { xs: 2, md: 2 },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                  maxWidth: 260,
                  bgcolor: "transparent",
                  justifyContent: "space-between",
                  mx: "auto",
                }}
              >
                <Box
                  sx={{
                    bgcolor: isDark ? "#292929" : "#f6f8fb",
                    borderRadius: 2,
                    p: 1.5,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 48,
                  }}
                >
                  {item.icon}
                </Box>
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Typography
                    sx={{
                      color: isDark ? "#f3f4f6" : "#222935",
                      fontWeight: 600,
                      fontSize: 17,
                      whiteSpace: "nowrap",
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: isDark ? "#b0b3b8" : "#6B7280",
                      fontSize: 15,
                      textAlign: "left",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.subtitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};