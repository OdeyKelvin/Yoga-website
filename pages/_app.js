import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes';
export default function App({ Component, pageProps }) {
 
  return (
    <ThemeProvider attribute='class'>
 <>
      <Navbar />
      <Component {...pageProps} />
    </>


      </ThemeProvider>
   
  );
}
