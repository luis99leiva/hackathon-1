import React from "react";
import Navbar from "./components/Navbar.tsx";
import Header from "./components/Header.tsx";
import Section1 from "./components/Section-1.tsx";
import Section2 from "./components/Section-2.tsx";
import Footer from "./components/Footer.tsx";

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

export default App;
