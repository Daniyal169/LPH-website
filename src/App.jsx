import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import Layout from './Layout';
import ServicesPage from './Pages/ServicesPage';
import SingleHardware from './Pages/featurePages/SingleHardware';
import SingleSoftware from './Pages/featurePages/SingleSoftware';
import SingleService from './Pages/featurePages/SingleService';
import HCMPage from './Pages/HCMPage';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import HardwarePage from './Pages/HardwarePage';
import SoftwarePage from './Pages/SoftwarePage';
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
      { path: 'it-hardware', element: <HardwarePage /> },
      { path: 'it-software', element: <SoftwarePage /> },
      { path: 'it-hardware/:slug', element: <SingleHardware /> },
      { path: 'it-software/:slug', element: <SingleSoftware /> },
      { path: 'services/:slug', element: <SingleService /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
