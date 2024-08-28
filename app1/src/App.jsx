import React from 'react';
import Navbar from './Navbar';
import Employees from './Employees';
import Client from './Client';
import Footer from './Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Employees />
      <Client />
      <Footer />
    </div>
  );
}
