import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { Header1 } from "./Components/1-Header/Header1";
import { HeaderCombined } from "./Components/1-Header/HeaderCombined";
import { Hero } from "./Components/2-Hero/Hero";
import { Main } from "./Components/3-Main/Main";
import { Footer } from "./Components/4-Footer/footer";
import ProductDetails from "./Components/3-Main/ProductDetails";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import Login from "./Components/1-Header/Login";
import Register from "./Components/1-Header/Register";
import Account from "./Components/1-Header/Account";


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <CartProvider>
        <BrowserRouter>
          <Header1 />
          <HeaderCombined />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Main />
                </>
              }
            />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
