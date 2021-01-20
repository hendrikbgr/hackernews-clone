import '../styles/global.css';
import { ThemeProvider, theme, CSSReset } from '@chakra-ui/core';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <CSSReset />
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}
