import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '../styles/globals.scss'
import { ColorSchemeProvider } from 'color_scheme'

function MyApp({ Component, pageProps }) {
  return (
    <ColorSchemeProvider>
      <Component {...pageProps} />
    </ColorSchemeProvider>
  )
}

export default MyApp