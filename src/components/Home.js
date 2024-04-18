import React from "react";
import Navbar from "./Landing/Navbar.tsx";
import Header from "../components/Landing/Header.tsx";
import Section1 from "../components/Landing/Section-1.tsx";
import Section2 from "../components/Landing/Section-2.tsx";
import Footer from "./Landing/Footer.tsx";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section1/>
      <Section2/>
      <Footer/>
      
    </div>
  );
}
// comentario
export default App;
