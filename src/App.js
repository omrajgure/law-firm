import React from "react";
import { Navbar } from "./components/Navbar/navbar";
import { Hero } from "./components/Hero/hero";
import { Introduction } from "./components/Introduction/introduction";
import { Areaofpractice } from "./components/Area of practice/areaofpractice";
import { HappyClients } from "./components/happyClients/happyclients";
import { Teams } from "./components/teams/teams";
import { Faq } from "./components/FAQ/faq";
import { Newsletter } from "./components/newsletter/newsletter";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <div>
      <Navbar button={true} />
      <Hero />
      <Introduction />
      <Areaofpractice />
      <HappyClients />
      <Teams />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
