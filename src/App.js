// src/App.js
import React from 'react';
import './App.css';

function Header() {
  return (
    <header className="head">
      {/* Your header content */}
    </header>
  );
}

function Home() {
  return (
    <section className="home" id="home">
      {/* Your home section content */}
    </section>
  );
}

function Service() {
  return (
    <section className="service" id="service">
      {/* Your services section content */}
    </section>
  );
}

function Vendor() {
  return (
    <section className="vendor" id="vendor">
      {/* Your vendor section content */}
    </section>
  );
}

function Venue() {
  return (
    <section className="venue" id="venue">
      {/* Your venue section content */}
    </section>
  );
}

function Invitation() {
  return (
    <section className="invite" id="invite">
      {/* Your invitation section content */}
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact">
      {/* Your footer content */}
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Service />
      <Vendor />
      <Venue />
      <Invitation />
      <Footer />
    </div>
  );
}

export default App;
