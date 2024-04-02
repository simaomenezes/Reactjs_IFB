
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {
  return (
    <ThemeProvider storageKey='pizzashop-theme' defaultTheme='dark'>
      <HelmetProvider>
        <Helmet titleTemplate='%s | pizza.shop'/>
        <Toaster richColors/>
        <RouterProvider router={router}/>
      </HelmetProvider>
    </ThemeProvider>
  )
}
