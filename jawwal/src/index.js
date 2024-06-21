import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Layout from './Component/Layout/Layout.jsx';
import Home from './Component/Home/Home.jsx';


function Main() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
reportWebVitals();