import React from "react";
import Navbar from "./components/Navbar"; 
import Header from "./components/Header";
import Categories from "./components/Categories";
import NewArrival from "./components/NewArrival";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Header/>
      <Categories/>
      <NewArrival/>
      <Stats/>
      <Testimonial/>
      <Footer/>
      
     
    </div>
  );
}

export default App;