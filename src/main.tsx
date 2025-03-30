import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createTheme, ThemeProvider} from "@mui/material";
import {BrowserRouter} from "react-router-dom";
import '@fontsource/poppins/400.css'; // Regular
import '@fontsource/poppins/700.css'; // Bold (optional)

const theme = createTheme({
    palette: {
        primary: {
            main: '#e53935'
        },
        secondary: {
            main: '#ffb74d'
        },
        background: {
            default: '#fff8f0'
        }
    },
    typography: {
        fontFamily: "Poppins, Arial, sans-serif",
        h6: {
            fontWeight: 700,
        },
        button: {
            textTransform: 'none', // Optional: remove ALL CAPS from MUI buttons
            fontSize: '1.5rem' // 👈 this applies to all MUI buttons
        }
    }
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={theme}>
              <App/>
          </ThemeProvider>
      </BrowserRouter>
  </StrictMode>,
)
