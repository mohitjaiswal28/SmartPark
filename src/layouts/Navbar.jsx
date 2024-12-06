
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import SmartParkLogo from '../assets/SmartParkLogo.png';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import Button from '../components/Button';

export default function Navbar() {
  const location = useLocation();

  return (
    <header id="navbar">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={SmartParkLogo} width="180" className="logo" alt="Koshish Logo" />
          </a>
          <button
            className="navbar-toggler ml-auto custom-toggler navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                  Home <HomeOutlinedIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                  About Us <DirectionsCarFilledOutlinedIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} to="/services">
                  Services <DesignServicesOutlinedIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/ourteam' ? 'active' : ''}`} to="/ourteam">
                  Our Team <Groups2OutlinedIcon />
                </Link>
              </li>

              <li>
                <Link className="nav-link" to="/livedemo">
                  <div style={{ marginTop: '0.5rem', paddingLeft: '0.8rem', paddingRight: '2rem' }}>
                    <Button label="Live Demo" c="login-btn" type="livedemo" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
