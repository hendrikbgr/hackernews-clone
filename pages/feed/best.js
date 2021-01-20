import Layout from '../../components/layout';
import Head from 'next/head';
import { Grid, Button } from '@chakra-ui/core';
import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/story-card';
import DataLoading from '../../components/data-loading';
import { useQuery } from 'react-query';

export default function Best() {
    const { isLoading, hasError, data: bestStoriesIds, refetch } = useQuery('fecthBestData', () =>
        fetch('https://hacker-news.firebaseio.com/v0/beststories.json').then((res) => res.json())
    );
    const reloadData = (event) => {
        event.preventDefault();
        refetch();
    };
    if (isLoading) return <DataLoading />;

    if (hasError) return 'Oops, something went wrong';

    return (
        <>
            <Head>
                <title>Best - HackerNews Next.js Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <Button backgroundColor="red" variant="outline" mb="4" onClick={reloadData}>
                    Reload Data
                </Button>
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
