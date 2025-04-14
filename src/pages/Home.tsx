import { Box } from '@chakra-ui/react';

import Content from '~/components/Content';
import Header from '~/components/Header';
import Menu from '~/components/Menu';
import Sidebar from '~/components/Sidebar';
import { menuCategories } from '~/data/menuCategories';

const Home = () => (
    <Box>
        <Header />
        <Menu categories={menuCategories} />
        <Content />
        <Sidebar />
    </Box>
);

export default Home;
