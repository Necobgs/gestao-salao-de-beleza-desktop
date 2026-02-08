import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Teste from './components/teste.tsx'
import Teste2 from './components/teste2.tsx'


const router = createHashRouter([
  {
    path: '/',
    element: <App />, // Página inicial/Dashboard
    children: [
      {
        path: 'test2',
        element: <Teste2 />,
      },
    ],
  },
  {
    path: '/login',
    element: <Teste />, // Tela de login independente
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <Outlet/>
  </StrictMode>,
)