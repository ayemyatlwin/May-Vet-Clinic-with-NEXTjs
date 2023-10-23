import { AppContextProvider } from '@/components/AppContext'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { ToastContainer } from 'react-toastify'

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
      <Component {...pageProps} />
     <ToastContainer/>
    </Layout>
    </AppContextProvider>
  )
}
