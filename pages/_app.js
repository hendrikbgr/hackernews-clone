import '../styles/global.css';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
