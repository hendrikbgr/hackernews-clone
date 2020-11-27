import Layout from '../../components/layout';
import Head from 'next/head';
import { Grid } from '@chakra-ui/core';
import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/story-card';
import DataLoading from '../../components/data-loading';

export default function Top() {
    const [topStoriesIds, setTopSoriesIds] = useState(null);

    async function fetchPostData() {
        const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        setTopSoriesIds(await res.json());
    }
    useEffect(() => {
        fetchPostData();
    }, []);

    if (!topStoriesIds) {
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
                    {topStoriesIds.map((StoryId) => (
                        <StoryCard id={StoryId} key={StoryId} />
                    ))}
                </Grid>
            </Layout>
        </>
    );
}
