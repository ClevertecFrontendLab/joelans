import { Box } from '@chakra-ui/react';

import PageTitle from './PageTitle';

const Content = () => (
    <Box margin='0 auto'>
        <PageTitle
            title='Веганская кухня'
            description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
        />
    </Box>
);

export default Content;
