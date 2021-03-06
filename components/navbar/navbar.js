import { Box, Image, Link } from '@chakra-ui/core';
import { useRouter } from 'next/router';

export default function Navbar({ children }) {
    const router = useRouter();

    return (
        <Box bg="#ff4545" w="100%" p={4} color="white" display="inline-flex">
            <Image src="../../logo_white.png" alt="HackerNews Custom Logo" h="40px" />
            <Box mt="7px" fontWeight="bold" ml="25px">
                <Link
                    mr="10px"
                    href="/"
                    _hover={{ textDecoration: 'none', borderBottom: '3px solid white' }}
                    borderBottom={router.pathname == '/' ? '3px solid white' : ''}>
                    Home
                </Link>
                <Link
                    mr="10px"
                    href="/feed/top"
                    _hover={{ textDecoration: 'none', borderBottom: '3px solid white' }}
                    borderBottom={router.pathname == '/feed/top' ? '3px solid white' : ''}>
                    Top
                </Link>
                <Link
                    mr="10px"
                    href="/feed/best"
                    _hover={{ textDecoration: 'none', borderBottom: '3px solid white' }}
                    borderBottom={router.pathname == '/feed/best' ? '3px solid white' : ''}>
                    Best
                </Link>
                <Link
                    mr="10px"
                    href="/feed/new"
                    _hover={{ textDecoration: 'none', borderBottom: '3px solid white' }}
                    borderBottom={router.pathname == '/feed/new' ? '3px solid white' : ''}>
                    New
                </Link>
            </Box>
        </Box>
    );
}
