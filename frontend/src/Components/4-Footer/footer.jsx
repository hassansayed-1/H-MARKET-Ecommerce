import React from "react";
import { Box, Grid, Typography, IconButton, Link, Button } from "@mui/material";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../../../public/commerce-logo2.png";

const socialIcons = [
  { icon: <TwitterIcon />, href: "#" },
  { icon: <FacebookIcon />, href: "#" },
  { icon: <InstagramIcon />, href: "#" },
  { icon: <YouTubeIcon />, href: "#" },
  { icon: <GoogleIcon />, href: "#" },
];

export const Footer = () => {
  // Fixed color as in the screenshot (not changing in dark/light mode)
  const bg = "#222935";
  const text = "#f3f4f6";
  const subText = "#b0b3b8";
  const iconBg = "#232324";

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box sx={{ bgcolor: bg, color: text, pt: 6, pb: 3, px: { xs: 2, md: 8 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 4,
        }}
      >
        {/* Logo & Description & Apps */}
        <Box sx={{ flex: 1}}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{ width: 80, height: 65, mr: 1.5 }}
            />
            <Typography variant="h5" sx={{ fontWeight: 700, color: text }}>
              H-Market
            </Typography>
          </Box>
          <Typography sx={{ color: subText, mb: 3, fontSize: 16 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: iconBg,
                color: "#fff",
                borderRadius: 2,
                px: 2,
                py: 1,
                minWidth: 140,
                fontWeight: 600,
                fontSize: 15,
                textTransform: "none",
                "&:hover": { bgcolor: "#1a202c" },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              startIcon={
                <img
                  src="../../../public/googleplay.png"
                  alt="Google Play"
                  style={{ width: 30, height: 24, objectFit: "contain",
                  }}
                />
              }
            >
              Google Play
            </Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: iconBg,
                color: "#fff",
                borderRadius: 2,
                px: 2,
                py: 1,
                minWidth: 140,
                fontWeight: 600,
                fontSize: 15,
                textTransform: "none",
                "&:hover": { bgcolor: "#1a202c" },
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              startIcon={
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
                  alt="App Store"
                  style={{ width: 24, height: 24 }}
                />
              }
            >
              App Store
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {socialIcons.map((item, idx) => (
              <IconButton
                key={idx}
                href={item.href}
                sx={{
                  display: {xs: "none", md: "flex", lg: "none"},
                  bgcolor: iconBg,
                  color: subText,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#E94560", color: "#fff" },
                  transition: "all 0.15s",
                  m: 0.5,
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        {/* About Us */}
        <Box sx={{ flex: 1, minWidth: 180 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: text }}>
            About Us
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Careers</Link>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Our Stores</Link>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Our Cares</Link>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Terms & Conditions</Link>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Privacy Policy</Link>
          </Box>
        </Box>
        {/* Customer Care */}
        <Box sx={{ flex: 1, minWidth: 220 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: text }}>
            Customer Care
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Help Center</Link>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Track Your Order</Link>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Corporate & Bulk Purchasing</Link>
            <Link href="#" underline="none" sx={{ color: subText, fontSize: 14 }}>Returns & Refunds</Link>
          </Box>
        </Box>
        {/* Contact Us */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: text }}>
            Contact Us
          </Typography>
          <Typography sx={{ color: subText, fontSize: 14, mb: 1 }}>
            50 Shoubra Faculty, Elkhalafawy, Egypt
          </Typography>
          <Typography sx={{ color: subText, fontSize: 14, mb: 1 }}>
            Email: hassan@gmail.com
          </Typography>
          <Typography sx={{ color: subText, fontSize: 14, mb: 2 }}>
            Phone: +20 1111 111 111
          </Typography>
          <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
            {socialIcons.map((item, idx) => (
              <IconButton
                key={idx}
                href={item.href}
                sx={{
                  display: {xs: "flex", md: "none", lg: "flex"},
                  bgcolor: iconBg,
                  color: subText,
                  borderRadius: 2,
                  "&:hover": { bgcolor: "#E94560", color: "#fff" },
                  transition: "all 0.15s",
                  m: 0.5,
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
        
      </Box>
      {/* Scroll to Top Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 32,
          right: 32,
          zIndex: 1000,
        }}
      >
        <IconButton
          onClick={handleScrollTop}
          sx={{
            bgcolor: iconBg,
            color: text,
            borderRadius: 2,
            boxShadow: "0 4px 24px 0 #0008",
            "&:hover": { bgcolor: "#E94560", color: "#fff" },
            width: 56,
            height: 56,
            transition: "all 0.2s",
          }}
        >
          <KeyboardArrowUpRoundedIcon sx={{ fontSize: 32 }} />
        </IconButton>
      </Box>
      {/* Footer Bottom */}
      <Box
        sx={{
          mt: 4,
          pt: 2,
          borderTop: `1px solid ${subText}`,
          textAlign: "center",
          color: subText,
          fontSize: 14,
        }}
      >
        <Typography>
          © {new Date().getFullYear()} H-Market. All rights reserved.
        </Typography>
        <Typography>
          Made with Hassan Sayed
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;