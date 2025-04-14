import { Box, Flex } from '@chakra-ui/react';

import CategoryPreview from '~/components/CategoryPreview';
import Header from '~/components/Header';
import LoadMorePagination from '~/components/LoadMorePagination';
import Menu from '~/components/Menu';
import PageTitle from '~/components/PageTitle';
import SearchBar from '~/components/SearchBar';
import Sidebar from '~/components/Sidebar';
import { categoriesPreviewData } from '~/data/categoriesPreviewData';
import { horizontalCardsJuicy } from '~/data/horizontalCards';
import { menuCategories } from '~/data/menuCategories';

const Juicy = () => (
    <Box>
        <Header />
        <Menu categories={menuCategories} />
        <Box pl='24px' pt='80px' ml='256px' mr='280px' width='calc(100% - 527px)'>
            {/* 560 width='calc(100% - 280px - 256px - 24px)' */}
            <Flex align='center' direction='column'>
                <Box my='32px'>
                    <PageTitle title='Самое сочное' />
                </Box>
                <SearchBar />
            </Flex>
            <Box mb='40px'>
                <LoadMorePagination button={true} cards={horizontalCardsJuicy} main={false} />
            </Box>
            <CategoryPreview preview={categoriesPreviewData[0]} />
        </Box>
        <Sidebar />
    </Box>
);

export default Juicy;
