import React, { useState } from 'react';
import './SideNav.css';
import { Link as RouterLink } from 'react-router-dom';


function SideNav() {

  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);}


  return (
    <div className="d-flex flex-column flex-shrink-0 pt-4 sideNav" style={{ height: '100vh', width: 280 }}>
      <ul className="nav nav-pills flex-column mb-auto">
      <li className={`nav-item pt-3 ${activeMenuItem === 'dashboard' ? 'active' : ''}`}>
            <RouterLink to="/Admin" className="nav-link " onClick={() => handleMenuItemClick('dashboard')}><i className="fas fa-home me-2"></i>Dashboard</RouterLink>
        </li>
      
        <li className={`nav-item pt-3 mb-2 ${activeMenuItem === 'BookingList' ? 'active' : ''}`}>
        <RouterLink to="/Admin/BookingList" className="nav-link " onClick={() => handleMenuItemClick('BookingList')}><i className="fa-solid fa-table me-2"></i>..</RouterLink>
        </li>

        <li className={`nav-item pt-3 mb-2 ${activeMenuItem === 'fastRequestList' ? 'active' : ''}`}>
          <RouterLink to="/Admin/fastRequestList" className="nav-link " onClick={() => handleMenuItemClick('fastRequestList')}><i class="fa-solid fa-clock-rotate-left me-2"></i>Fast Request</RouterLink>
        </li>

      </ul>
    </div>
  );
}

export default SideNav;
