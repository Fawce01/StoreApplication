import { useEffect, useState } from "react"
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import {Box, Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import Navbar from "./Navbar";

function App() {

  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  const palleteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({palette:{
    mode:palleteType,
    background: {default: (palleteType === 'light') ? '#eaeaea' : '#121212'}
  }})
  
  useEffect(()=>{
    fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function ToggleDarkMode(){
    setDarkMode(!darkMode);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Navbar toggleNavBar={ToggleDarkMode} darkMode = {darkMode}></Navbar>
      <Box sx = {{minHeight:'100vh', background:darkMode 
        ? 'radial-gradient(circle, #1e3aba, #111b27)':'radial-gradient(circle, #bef2ff, #e4e4e4)', py:6 }}>
        <Container maxWidth='xl' sx={{mt:14}}>
          <Catalog products={products}/>
        </Container>
      </Box>
    </ThemeProvider>
    
    </>
    
  )

}

export default App
