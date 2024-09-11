import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './views/App/App.tsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
// 导入路由router
import router from "./router";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />
      <App />
  </StrictMode>,
)
