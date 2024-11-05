import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import ContactPage from './Pages/ContactPage'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Layout from './Layout'
import ServicesPage from './Pages/ServicesPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "about",
        element: <AboutPage />
      },
      {
        path: "services",
        element: <ServicesPage />
      },
      {
        path: "contact",
        element: <ContactPage />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
