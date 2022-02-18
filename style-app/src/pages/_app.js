import { ThemeProvider } from 'styled-components';
import { GlobalStyles, lightTheme } from '../../styles/theme.config';
import 'mapbox-gl/dist/mapbox-gl.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={lightTheme}>
       <GlobalStyles/>
       <Component {...pageProps} />
    </ThemeProvider>
    );
}

export default MyApp;
