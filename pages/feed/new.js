import Layout from '../../components/layout';
import Head from 'next/head';
import { Box, Grid, Text, Link } from '@chakra-ui/core';
import React, { useState, useEffect } from 'react';

export default function New() {
    const [post, setData] = useState(null);

    async function fetchPostData() {
        const res = await fetch('https://api.hackerwebapp.com/news?page=1');
        setData(await res.json());
    }
    useEffect(() => {
        fetchPostData();
    });

    if (!post) {
        return (
            <>
                <Box
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                    <Text color="#ff4545" fontSize="35px" fontWeight="bolder" mt="20vh">
                        Data is Loading...
                    </Text>
                </Box>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>New - HackerNews Next.js Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Grid templateColumns={{ xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={6}>
                    {post.map((data) => (
                        <Box
                            h="250px"
                            w="auto"
                            bg="#ffe8ea"
                            borderRadius="10px"
                            pos="relative"
                            key={data.id}>
                            <Box m="20px">
                                <Link
                                    color="#690c14"
                                    fontWeight="bold"
                                    fontSize="1.3em"
                                    lineHeight="25px"
                                    href={data.url}
                                    isExternal>
                                    {data.title}
                                </Link>
                                <Text pos="absolute" bottom="2">
                                    posted {data.time_ago} by {data.user}
                                </Text>
                            </Box>
                        </Box>
                    ))}
                </Grid>
            </Layout>
        </>
    );
}
