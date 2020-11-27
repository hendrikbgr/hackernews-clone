import { Box, Link, Text, Spinner } from '@chakra-ui/core';
import React, { useEffect, useState } from 'react';

const StoryCard = ({ id }) => {
    const [story, setStory] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchStoryData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://hacker-news.firebaseio.com/v0/item/${id}.json`
                );
                const data = await response.json();
                setStory(data);
            } catch (e) {
                // empty catch
            }
            setIsLoading(false);
        };
        fetchStoryData();
    }, [id]);

    const hasResults = !isLoading && !!story;
    const hasError = !isLoading && !story;

    return (
        <Box h="250px" w="auto" bg="#ffe8ea" borderRadius="10px" pos="relative" key={id}>
            <Box m="20px">
                {hasResults && (
                    <>
                        <Link
                            color="#690c14"
                            fontWeight="bold"
                            fontSize="1.3em"
                            lineHeight="25px"
                            href={story.url}
                            isExternal>
                            {story.title}
                        </Link>
                        <Text pos="absolute" bottom="2">
                            posted {new Date(story.time * 1000).toLocaleDateString()} by {story.by}
                        </Text>
                    </>
                )}
                {hasError && 'Oops, something went wrong'}
                {isLoading && (
                    <>
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="#ff4545"
                            size="xl"
                            display="block"
                            m="100px auto"
                        />
                    </>
                )}
            </Box>
        </Box>
    );
};

export default StoryCard;
