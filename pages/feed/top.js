import Layout from '../../components/layout';
import Head from 'next/head';
import { Grid, Button } from '@chakra-ui/core';
import React, { useState, useEffect } from 'react';
import StoryCard from '../../components/story-card';
import DataLoading from '../../components/data-loading';

export default function Top() {
    const [topStoriesIds, setTopSoriesIds] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function fetchPostData() {
            setIsLoading(true);
            try {
                const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
                setTopSoriesIds(await res.json());
            } catch (e) {
                // empty catch
            }
            setIsLoading(false);
        }

        fetchPostData();
    }, []);

    const hasResults = !isLoading && !!topStoriesIds;
    const hasError = !isLoading && !topStoriesIds;

    const reloadData = (event) => {
        event.preventDefault();
        fetchPostData();
    };

    return (
        <>
            <Head>
                <title>Top - HackerNews Next.js Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                {hasResults && (
                    <>
                        <Button backgroundColor="red" variant="outline" mb="4" onClick={reloadData}>
                            Reload Data
                        </Button>
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
                    </>
                )}
                {hasError && 'Oops, something went wrong'}
                {isLoading && <DataLoading />}
            </Layout>
        </>
    );
}
