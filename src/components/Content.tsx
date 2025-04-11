import { Box, Flex } from '@chakra-ui/react';

import PageTitle from './PageTitle';
import SearchBar from './SearchBar';
import Slider from './Slider';

const Content = () => (
    <Box pl='24px'>
        <Flex margin='0 auto' align='center' direction='column'>
            <PageTitle
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
            <SearchBar />
        </Flex>
        <Slider />
    </Box>
);

export default Content;
