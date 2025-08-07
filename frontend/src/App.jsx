import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { Header1 } from "./Components/1-Header/Header1";
import { HeaderCombined } from "./Components/1-Header/HeaderCombined";
import { Hero } from "./Components/2-Hero/Hero";
import { Main } from "./Components/3-Main/Main";
import { Footer } from "./Components/4-Footer/footer";
import ProductDetails from "./Components/3-Main/ProductDetails";
import { CartProvider } from "./context/CartContext";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
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
          </Routes>
          <Footer />
        </BrowserRouter>
        </CartProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
