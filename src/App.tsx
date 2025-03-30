import Navbar from "./components/Navbar.tsx";
import {Container} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Menu from "./pages/Menu.tsx";


export default function App() {
  return (
      <>
        <Navbar/>
        <Container sx={{mt: 4}}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Container>
      </>
  );
}
