import Layout from '../../components/layout';
import Head from 'next/head';
import { Box, Grid, Text, Link } from '@chakra-ui/core';
import React, { useState, useEffect } from 'react';

export default function New(props) {
    const [post, setTitle] = useState(null);

    async function fetchPostData() {
        const res = await fetch('https://api.hackerwebapp.com/news?page=1');
        setTitle(await res.json());
    }
    useEffect(() => {
        fetchPostData(props.title);
    }, [props.title]);

    if (!post) {
        return 'loading...';
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
