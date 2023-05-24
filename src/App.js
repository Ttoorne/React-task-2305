import React from "react";
import Example from "./components/Example";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Example></Example>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
};

export default App;
