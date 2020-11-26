import Layout from '../../components/layout';
import Head from 'next/head';
import { Box, Grid, Text } from '@chakra-ui/core';
import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/story-card';

export default function New() {
    const [newStoriesIds, setNewStoriesIds] = useState(null);

    async function fetchPostData() {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
        setNewStoriesIds(await res.json());
    }
    useEffect(() => {
        fetchPostData();
    }, []);

    if (!newStoriesIds) {
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
                <Grid
                    templateColumns={{
                        xs: 'repeat(1, minmax(0, 1fr))',
                        md: 'repeat(3, minmax(0, 1fr))'
                    }}
                    gap={6}>
                    {newStoriesIds.map((StoryId) => (
                        <StoryCard id={StoryId} key={StoryId} />
                    ))}
                </Grid>
            </Layout>
        </>
    );
}
