import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Layout from './Layout';
import ServicesPage from './Pages/ServicesPage';
import HardwarePage from './Pages/featurePages/HardwarePage';
import SoftwarePage from './Pages/featurePages/SoftwarePage';
import ServicePage from './Pages/featurePages/ServicePage';
import HCMPage from './Pages/HCMPage';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'hcm', element: <HCMPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <HomePage /> },
      { path: 'it-hardware/:slug', element: <HardwarePage /> },
      { path: 'it-software/:slug', element: <SoftwarePage /> },
      { path: 'services/:slug', element: <ServicePage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
