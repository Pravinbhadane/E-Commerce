import React, { useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
function Home() {

  const [data, setData] = useState();
  return (
    <div>
        <Navbar data={data} />
      <Header />
      <Products setData={setData} />
      <Footer />
    </div>
  )
}

export default Home
