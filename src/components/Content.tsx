import { Flex } from '@chakra-ui/react';

import PageTitle from './PageTitle';
import SearchBar from './SearchBar';

const Content = () => (
    <Flex margin='0 auto' align='center' direction='column'>
        <PageTitle
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
        <SearchBar />
    </Flex>
);

export default Content;
