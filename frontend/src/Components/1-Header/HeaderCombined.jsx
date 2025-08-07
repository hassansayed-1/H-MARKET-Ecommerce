import React, { useContext, useState } from "react";
import Badge from "@mui/material/Badge";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartContext } from "../../context/CartContext";
import {
  Box,
  Button,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../../theme";

import logo from "../../../public/commerce-logo.png";
import logo2 from "../../../public/commerce-logo2.png";
import CategoryIcon from "@mui/icons-material/Dashboard"; // You can use a better icon if you want
import CheckroomIcon from "@mui/icons-material/Checkroom";
import DevicesIcon from "@mui/icons-material/Devices";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import HomeIcon from "@mui/icons-material/Home";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PetsIcon from "@mui/icons-material/Pets";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SettingsIcon from "@mui/icons-material/Settings";

const categoriesList = [
  { label: "Fashion", icon: <CheckroomIcon /> },
  { label: "Electronics", icon: <DevicesIcon /> },
  { label: "Bikes", icon: <DirectionsBikeIcon /> },
  { label: "Home & Garden", icon: <HomeIcon /> },
  { label: "Gifts", icon: <CardGiftcardIcon /> },
  { label: "Music", icon: <MusicNoteIcon /> },
  { label: "Health & Beauty", icon: <LocalHospitalIcon /> },
  { label: "Pets", icon: <PetsIcon /> },
  { label: "Baby Toys", icon: <ChildCareIcon /> },
  { label: "Groceries", icon: <ShoppingBasketIcon /> },
  { label: "Automotive", icon: <SettingsIcon /> },
];

export const HeaderCombined = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const colorMode = useContext(ColorModeContext);
  const { cart, removeFromCart, incrementQty, decrementQty } =
    useContext(CartContext);
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const openCart = (event) => setCartAnchorEl(event.currentTarget);
  const closeCart = () => setCartAnchorEl(null);
  const cartOpen = Boolean(cartAnchorEl);
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  );

  // Responsive
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Drawer state for mobile menu
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  // Menu state for Header3
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // State for expanded menu items
  const [expandedMenu, setExpandedMenu] = React.useState("");

  // State for categories menu
  const [categoriesOpen, setCategoriesOpen] = React.useState(false);
  const [categoriesAnchorEl, setCategoriesAnchorEl] = React.useState(null);

  const handleCategoriesClick = (event) => {
    setCategoriesAnchorEl(event.currentTarget);
    setCategoriesOpen(true);
  };
  const handleCategoriesClose = () => {
    setCategoriesOpen(false);
    setCategoriesAnchorEl(null);
  };

  // Menu links
  const menuLinks = [
    { label: "Home" },
    { label: "Mega Menu" },
    { label: "Full Screen Menu" },
    { label: "Pages" },
    { label: "User Account" },
    { label: "Vendor Account" },
  ];

  // Submenu items for expandable menus
  const submenuItems = {
    Home: ["Menu Item 1", "Menu Item 2"],
    "Mega Menu": ["Mega Item 1", "Mega Item 2"],
    "Full Screen Menu": ["Full Screen Item 1", "Full Screen Item 2"],
    Pages: ["Page Item 1", "Page Item 2"],
    "User Account": ["Profile", "Orders"],
    "Vendor Account": ["Dashboard", "Products"],
  };

  // Custom dark gray for dark mode
  const darkBg = "#232324";
  const darkSubBg = "#292929";
  function getCartImageUrl(url) {
  if (!url) return "/placeholder.png";
  if (url.startsWith("http")) return url;
  return `${import.meta.env.VITE_API}${url}`;
  }

  return (
    <Box sx={{ bgcolor: isDark ? darkBg : "#fff" }}>
      {/* Header2 Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: { xs: 2, sm: 4 },
          py: 1.5,
        }}
      >
        {/* Mobile Menu Icon */}
        {isMobile && (
          <IconButton
            onClick={handleDrawerOpen}
            sx={{
              color: isDark ? "#b0b3b8" : "#222935",
              mr: 1,
              display: { md: "none" },
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        )}

        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={isDark ? logo2 : logo}
            alt="E-Commerce Logo"
            sx={{
              width: 80,
              height: 65,
            }}
          />
        </Box>

        {/* Search Bar */}
        {!isMobile && (
          <Box
            sx={{
              flex: 1,
              mx: 4,
              maxWidth: 600,
              display: "flex",
              alignItems: "center",
              bgcolor: isDark ? darkSubBg : "#f6f8fb",
              borderRadius: 2,
              pl: 2,
              pr: 0.5,
              minHeight: 44,
              boxShadow: isDark ? "0 1px 2px 0 #0001" : "none",
              transition: "background 0.2s",
            }}
          >
            <SearchIcon sx={{ color: isDark ? "#b0b3b8" : "#6B7280", mr: 1 }} />
            <InputBase
              placeholder="Searching for..."
              sx={{
                flex: 1,
                fontSize: 16,
                color: isDark ? "#fff" : "#222935",
                "& input": { p: 0 },
              }}
            />
            <Box
              sx={{
                borderLeft: `1px solid ${isDark ? "#444" : "#e0e0e0"}`,
                mx: 1,
                height: 28,
              }}
            />
            <Select
              defaultValue="all"
              variant="standard"
              disableUnderline
              sx={{
                fontSize: 15,
                color: isDark ? "#fff" : "#374151",
                minWidth: 120,
                "& .MuiSelect-icon": { color: isDark ? "#b0b3b8" : "#6B7280" },
                "& .MuiSelect-select": { pl: 1, pr: 3, py: 0.5 },
              }}
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="men">Men</MenuItem>
              <MenuItem value="women">Women</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
            </Select>
          </Box>
        )}

        {/* Icons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <PersonOutlineOutlinedIcon
              sx={{ color: isDark ? "#b0b3b8" : "#6B7280", fontSize: 28 }}
            />
          </IconButton>
          <IconButton onClick={openCart}>
            <Badge
              badgeContent={cart.reduce(
                (sum, item) => sum + (item.qty || 1),
                0
              )}
              color="error"
              overlap="circular"
              showZero
            >
              <ShoppingBagOutlinedIcon
                sx={{ color: isDark ? "#b0b3b8" : "#6B7280", fontSize: 28 }}
              />
            </Badge>
          </IconButton>
          <Popover
            open={cartOpen}
            anchorEl={cartAnchorEl}
            onClose={closeCart}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            PaperProps={{
              sx: {
                minWidth: 340,
                maxWidth: 400,
                bgcolor: isDark ? "#232324" : "#fff",
                color: isDark ? "#fff" : "#222935",
                borderRadius: 2,
                boxShadow: isDark ? "0 2px 8px #0008" : "0 2px 8px #0002",
                p: 2,
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 600,
                color: isDark ? "#fff" : "#222935",
              }}
            >
              Cart
            </Typography>
            {cart.length === 0 ? (
              <Typography
                sx={{
                  color: isDark ? "#b0b3b8" : "#6B7280",
                  textAlign: "center",
                  py: 3,
                }}
              >
                Your cart is empty.
              </Typography>
            ) : (
              <>
                {cart.map((item) => (
                  <Box
                    key={item.id}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mb: 2,
                      gap: 1,
                    }}
                  >
                    <Box
                      component="img"
                      src={getCartImageUrl(item.image?.url)}
                      alt={item.name}
                      sx={{
                        width: 56,
                        height: 44,
                        objectFit: "contain",
                        borderRadius: 1,
                        bgcolor: isDark ? "#292929" : "#f6f8fb",
                        mr: 1,
                      }}
                    />
                    <Box sx={{ flex: 1 }}>
                      <Typography
                        sx={{
                          fontWeight: 500,
                          fontSize: 15,
                          color: isDark ? "#fff" : "#222935",
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 14,
                          color: isDark ? "#b0b3b8" : "#6B7280",
                        }}
                      >
                        ${item.price.toFixed(2)}
                      </Typography>
                    </Box>
                    <ButtonGroup size="small" sx={{ mr: 1 }}>
                      <IconButton
                        onClick={() => decrementQty(item.id)}
                        sx={{
                          color: isDark ? "#fff" : "#222935",
                          border: "1px solid #e0e0e0",
                        }}
                      >
                        <RemoveIcon fontSize="small" />
                      </IconButton>
                      <Box
                        sx={{
                          px: 1,
                          minWidth: 24,
                          textAlign: "center",
                          fontWeight: 600,
                          color: isDark ? "#fff" : "#222935",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.qty}
                      </Box>
                      <IconButton
                        onClick={() => incrementQty(item.id)}
                        sx={{
                          color: isDark ? "#fff" : "#222935",
                          border: "1px solid #e0e0e0",
                        }}
                      >
                        <AddIcon fontSize="small" />
                      </IconButton>
                    </ButtonGroup>
                    <IconButton
                      onClick={() => removeFromCart(item.id)}
                      sx={{ color: "#E94560" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                ))}
                <Divider sx={{ my: 2, bgcolor: isDark ? "#292929" : "#eee" }} />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Typography
                    sx={{ fontWeight: 600, color: isDark ? "#fff" : "#222935" }}
                  >
                    Total:
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 700, fontSize: 18, color: "#E94560" }}
                  >
                    ${cartTotal.toFixed(2)}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    width: "100%",
                    fontWeight: 600,
                    fontSize: 16,
                    borderRadius: 2,
                    py: 1.2,
                    bgcolor: "#E94560",
                    "&:hover": { bgcolor: "#d12d4c" },
                  }}
                  onClick={() => {
                    closeCart();
                    alert("Proceed to buy!");
                  }}
                >
                  Buy Now
                </Button>
              </>
            )}
          </Popover>
        </Box>
      </Box>

      {/* Header3 Section */}
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            bgcolor: isDark ? darkBg : "#fff",
            px: { xs: 1, sm: 2 },
            py: 2,
            borderRadius: 0,
            mt: 0,
            mb: 0,
            boxShadow: "none",
          }}
        >
          {/* Categories Button */}
          <Button
            startIcon={
              <CategoryIcon
                sx={{ color: isDark ? "#fff" : "#222935", fontSize: 18 }}
              />
            }
            endIcon={
              <ExpandMoreRoundedIcon
                sx={{ color: isDark ? "#b0b3b8" : "#8B98B8", fontSize: 18 }}
              />
            }
            sx={{
              bgcolor: isDark ? darkSubBg : "#f6f8fb",
              color: isDark ? "#fff" : "#222935",
              fontWeight: 500,
              fontSize: 15,
              borderRadius: 2,
              px: 2,
              py: 1,
              minWidth: 150,
              height: 44,
              justifyContent: "flex-start",
              boxShadow: "none",
              textTransform: "none",
              mr: 2,
              "&:hover": {
                bgcolor: isDark ? darkSubBg : "#f6f8fb",
                boxShadow: "none",
              },
              "&:active": {
                bgcolor: isDark ? darkSubBg : "#f6f8fb",
                boxShadow: "none",
              },
              "& .MuiTouchRipple-root": { display: "none" },
              transition: "none",
            }}
            disableRipple
            onClick={handleCategoriesClick}
          >
            Categories
          </Button>

          {/* Categories Menu - smaller and positioned below button, closes on mouse leave */}
          <Menu
            anchorEl={categoriesAnchorEl}
            open={categoriesOpen}
            onClose={handleCategoriesClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            PaperProps={{
              sx: {
                bgcolor: isDark ? darkBg : "#fff",
                color: isDark ? "#fff" : "#222935",
                borderRadius: 2,
                boxShadow: isDark ? "0 2px 8px #0008" : "0 2px 8px #0002",
                minWidth: 200,
                maxWidth: 220,
                mt: 1,
                p: 0.5,
              },
              onMouseLeave: handleCategoriesClose,
            }}
            MenuListProps={{
              sx: {
                p: 0,
              },
              onMouseLeave: handleCategoriesClose,
            }}
          >
            {categoriesList.map((cat) => (
              <MenuItem
                key={cat.label}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  fontSize: 15,
                  py: 1,
                  color: isDark ? "#fff" : "#222935",
                  "&:hover": {
                    bgcolor: isDark ? "#292929" : "#f6f8fb",
                    color: "#E94560",
                  },
                  borderRadius: 1.5,
                  transition: "background 0.2s",
                }}
                onClick={handleCategoriesClose}
              >
                <Box sx={{ mr: 1, color: isDark ? "#b0b3b8" : "#222935" }}>
                  {cat.icon}
                </Box>
                {cat.label}
                <ChevronRightRoundedIcon
                  sx={{
                    ml: "auto",
                    color: isDark ? "#b0b3b8" : "#8B98B8",
                    fontSize: 18,
                  }}
                />
              </MenuItem>
            ))}
          </Menu>

          {/* Spacer with increased gap */}
          <Box sx={{ flex: 1, mx: 4 }} />

          {/* Menu Links */}
          {menuLinks.map((label) => (
            <Box
              key={label.label}
              sx={{ ml: 2.5, display: "inline-flex", alignItems: "center" }}
            >
              <Button
                endIcon={
                  <ExpandMoreRoundedIcon
                    sx={{ color: isDark ? "#b0b3b8" : "#8B98B8", fontSize: 16 }}
                  />
                }
                sx={{
                  color: isDark ? "#fff" : "#222935",
                  fontWeight: 400,
                  fontSize: 14,
                  textTransform: "none",
                  px: 0.5,
                  minWidth: 0,
                  height: 32,
                  "&:hover": { bgcolor: "transparent", color: "#E94560" },
                  "&:active": { bgcolor: "transparent" },
                  "& .MuiTouchRipple-root": { display: "none" },
                  transition: "none",
                }}
                disableRipple
                onClick={handleMenuOpen}
              >
                {label.label}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                transformOrigin={{ vertical: "top", horizontal: "center" }}
                PaperProps={{
                  sx: {
                    bgcolor: isDark ? darkSubBg : "#fff",
                    color: isDark ? "#fff" : "#222935",
                    boxShadow: "none",
                    border: isDark ? "1px solid #333" : "1px solid #eee",
                    mt: 1,
                  },
                  onMouseLeave: handleMenuClose,
                }}
                MenuListProps={{
                  sx: {
                    p: 0,
                  },
                  onMouseLeave: handleMenuClose,
                }}
              >
                <MenuItem
                  onClick={handleMenuClose}
                  sx={{
                    bgcolor: "transparent",
                    fontSize: 13,
                    "&:hover": {
                      bgcolor: isDark ? "#333" : "#f6f8fb",
                    },
                    color: isDark ? "#fff" : "#222935",
                  }}
                >
                  Menu Item 1
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  sx={{
                    bgcolor: "transparent",
                    fontSize: 13,
                    "&:hover": {
                      bgcolor: isDark ? "#333" : "#f6f8fb",
                    },
                    color: isDark ? "#fff" : "#222935",
                  }}
                >
                  Menu Item 2
                </MenuItem>
              </Menu>
            </Box>
          ))}
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        PaperProps={{
          sx: {
            width: 320,
            bgcolor: isDark ? "#232324" : "#fff",
            color: isDark ? "#f3f4f6" : "#222935",
            borderRight: isDark ? "1px solid #292929" : "1px solid #eee",
            boxShadow: isDark ? "0 2px 16px #0008" : "0 2px 16px #0002",
            transition: "background 0.2s",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <IconButton
            onClick={handleDrawerClose}
            sx={{ color: isDark ? "#b0b3b8" : "#222935" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ bgcolor: isDark ? "#292929" : "#eee" }} />
        <List>
          {menuLinks.map((link) => (
            <React.Fragment key={link.label}>
              <ListItem
                button
                onClick={() =>
                  setExpandedMenu(expandedMenu === link.label ? "" : link.label)
                }
                sx={{
                  color: isDark ? "#f3f4f6" : "#222935",
                  fontWeight: expandedMenu === link.label ? 600 : 400,
                  bgcolor:
                    expandedMenu === link.label
                      ? isDark
                        ? "#292929"
                        : "#f6f8fb"
                      : "transparent",
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{ fontSize: 15 }}
                />
                {expandedMenu === link.label ? (
                  <ArrowDropUpIcon
                    sx={{ color: isDark ? "#b0b3b8" : "#222935" }}
                  />
                ) : (
                  <ArrowDropDownIcon
                    sx={{ color: isDark ? "#b0b3b8" : "#222935" }}
                  />
                )}
              </ListItem>
              {expandedMenu === link.label &&
                submenuItems[link.label]?.map((item, idx) => (
                  <ListItem
                    button
                    key={item}
                    sx={{
                      pl: 4,
                      color: isDark ? "#f3f4f6" : "#222935",
                      bgcolor: isDark ? "#232324" : "#fff",
                      "&:hover": { bgcolor: isDark ? "#292929" : "#f6f8fb" },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{ fontSize: 15 }}
                    />
                  </ListItem>
                ))}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
