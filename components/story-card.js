import { Box, Link, Text, Spinner } from '@chakra-ui/core';
import React from 'react';
import moment from 'moment';
import { useQuery } from 'react-query';

const StoryCard = ({ id }) => {
    const { isLoading, hasError, data: storyData } = useQuery(['fecthStory', id], () =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((res) => res.json())
    );

    [id];

    const postedFromNow = storyData ? moment(new Date(storyData.time * 1000)).fromNow() : null;

    return (
        <Box h="250px" w="auto" bg="#ffe8ea" borderRadius="10px" pos="relative" key={id}>
            <Box m="20px">
                {storyData && (
                    <>
                        <Link
                            color="#690c14"
                            fontWeight="bold"
                            fontSize="1.3em"
                            lineHeight="25px"
                            href={storyData.url}
                            isExternal>
                            {storyData.title}
                        </Link>
                        <Text pos="absolute" bottom="2">
                            posted {postedFromNow} by {storyData.by}
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
