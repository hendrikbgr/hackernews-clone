import Layout from '../../components/layout';
import Head from 'next/head';
import { Grid } from '@chakra-ui/core';
import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/story-card';
import DataLoading from '../../components/data-loading';

export default function Best() {
    const [bestStoriesIds, setTopSoriesIds] = useState(null);

    async function fetchPostData() {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/beststories.json');
        setTopSoriesIds(await res.json());
    }
    useEffect(() => {
        fetchPostData();
    }, []);

    if (!bestStoriesIds) {
        return <DataLoading />;
    }

    return (
        <>
            <Head>
                <title>Top - HackerNews Next.js Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Grid
                    templateColumns={{
                        xs: 'repeat(1, minmax(0, 1fr))',
                        md: 'repeat(3, minmax(0, 1fr))'
                    }}
                    gap={6}>
                    {bestStoriesIds.map((StoryId) => (
                        <StoryCard id={StoryId} key={StoryId} />
                    ))}
                </Grid>
            </Layout>
        </>
    );
}
