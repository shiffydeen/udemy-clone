import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SidebarProvider } from './context/sidebar_context.jsx'
import { CoursesProvider } from './context/courses_context.jsx'
import { CartProvider } from './context/cart_context.jsx'
import { ToastProvider } from './context/toast_context.jsx'
// import { ModalProvider } from './context/modal_context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SidebarProvider>
      <CoursesProvider>
        <CartProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </CartProvider>
      </CoursesProvider>
    </SidebarProvider>
    
  </StrictMode>,
)
