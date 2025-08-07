import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../theme";
import { Box, Typography, Stack } from "@mui/material";

export const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "#222935",
        color: "#fff",
        px: { xs: 1, sm: 2 },
        py: 0.5,
        minHeight: 28,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: { xs: 10, sm: 12 },
      }}
    >
      <Stack direction="row" alignItems="center" spacing={0.7} sx={{ pl: { xs: 0, sm: 0.5 } }}>
        <Box
          sx={{
            bgcolor: "#E94560",
            color: "#fff",
            fontWeight: 700,
            fontSize: 10,
            px: 1,
            py: 0.1,
            borderRadius: "999px",
            minHeight: 20,
            display: "flex",
            alignItems: "center",
            letterSpacing: 1,
          }}
        >
          HOT
        </Box>
        <Typography sx={{ fontWeight: 400, fontSize: 11 }}>
          Free Express Shipping
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={0.2} sx={{ pr: { xs: 0, sm: 0.5 } }}>
        <IconButton
          component="a"
          href="https://web.facebook.com/profile.php?id=61561180268593"
          target="_blank"
          rel="noopener"
          color="inherit"
          size="small"
          sx={{ p: 0.5 }}
        >
          <FacebookIcon fontSize="inherit" sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
          color="inherit"
          size="small"
          sx={{ p: 0.5 }}
        >
          <TwitterIcon fontSize="inherit" sx={{ fontSize: 16 }} />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          color="inherit"
          size="small"
          sx={{ p: 0.5 }}
        >
          <InstagramIcon fontSize="inherit" sx={{ fontSize: 16 }} />
        </IconButton>
        <Box sx={{ width: 12 }} />
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
          sx={{ ml: 0.5 }}
          size="small"
        >
          {theme.palette.mode === "light" ? (
            <DarkModeOutlinedIcon fontSize="small" />
          ) : (
            <LightModeOutlinedIcon fontSize="small" />
          )}
        </IconButton>
      </Stack>
    </Box>
  );
};