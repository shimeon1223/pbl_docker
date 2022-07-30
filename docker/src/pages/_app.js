// pages/_app.js
import '../styles/globals.css'
import '../public/mysite/mysite.css'
import { ChakraProvider } from '@chakra-ui/react'
// 1. Import the extendTheme function


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
