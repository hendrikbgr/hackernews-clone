import Head from 'next/head';
import Navbar from '../components/navbar/navbar';
import { Heading, Link, Text, Box, Image } from '@chakra-ui/core';

const styling = {
    backgroundImage: `url('./home_background.jpg')`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover'
};

export default function Home() {
    return (
        <div className="home" style={styling}>
            <Box
                minH="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column">
                <Head>
                    <title>HackerNews Next.js Clone</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Navbar />
                <Box
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                    <Box w="100%">
                        <Image
                            src="../logo_red.png"
                            alt="HackerNews Custom Logo"
                            mh="120px"
                            m="0 auto"
                            display="block"
                        />
                    </Box>
                    <Heading as="h1" size="2xl" mb="2" color="white">
                        Read{' '}
                        <Link
                            color="#ff4545"
                            href="/feed/new"
                            _hover={{ color: '#ff918a', textDecoration: 'none' }}>
                            New Posts
                        </Link>
                    </Heading>

                    <Text fontSize="xl" color="#ff4545">
                        Powered by{' '}
                        <Link href="https://nextjs.org/" textDecoration="underline">
                            Next.js
                        </Link>
                    </Text>
                </Box>
            </Box>
        </div>
    );
}
