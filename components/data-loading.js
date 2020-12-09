import { Box, Text, Spinner } from '@chakra-ui/core';

const DataLoading = () => {
    return (
        <Box
            flex="1"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center">
            <Text color="#ff4545" fontSize="35px" fontWeight="bolder" mt="20">
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="#ff4545"
                    marginRight="5"
                    top="3"
                    size="xl"
                    pos="relative"
                />
                Data is Loading...
            </Text>
        </Box>
    );
};

export default DataLoading;
