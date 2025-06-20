import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById('navigation')).render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Jumbotron />
    <Cards />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('socials')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)
