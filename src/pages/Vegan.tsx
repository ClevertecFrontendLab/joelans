import { Box, Flex, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';

import CategoryPreview from '~/components/CategoryPreview';
import Header from '~/components/Header';
import LoadMorePagination from '~/components/LoadMorePagination';
import Menu from '~/components/Menu';
import PageTitle from '~/components/PageTitle';
import SearchBar from '~/components/SearchBar';
import Sidebar from '~/components/Sidebar';
import { categoriesPreviewData } from '~/data/categoriesPreviewData';
import { horizontalCardsVegan } from '~/data/horizontalCards';
import { menuCategories } from '~/data/menuCategories';

const Vegan = () => (
    <Box>
        <Header />
        <Menu categories={menuCategories} />
        <Box pl='24px' pt='80px' ml='256px' mr='280px' width='calc(100% - 527px)'>
            {/* 560 width='calc(100% - 280px - 256px - 24px)' */}
            <Flex align='center' direction='column'>
                <Box my='32px'>
                    <PageTitle
                        title='Веганская кухня'
                        description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                    />
                </Box>
                <SearchBar />
            </Flex>
            <Tabs variant='unstyled' mb='24px'>
                <Flex justify='center' w='100%'>
                    <TabList
                        w='fit-content'
                        position='relative'
                        overflowX='auto'
                        sx={{
                            '&::-webkit-scrollbar': { display: 'none' },
                            scrollbarWidth: 'none',
                        }}
                    >
                        {[
                            'Закуски',
                            'Первые блюда',
                            'Вторые блюда',
                            'Гарниры',
                            'Десерты',
                            'Выпечка',
                            'Сыроедческие блюда',
                            'Напитки',
                        ].map((category) => (
                            <Tab
                                fontWeight='500'
                                fontSize='16px'
                                color='#134b00'
                                _selected={{
                                    color: '#2db100',
                                }}
                                _hover='none'
                                _active='none'
                                whiteSpace='nowrap'
                            >
                                {category}
                            </Tab>
                        ))}
                        <TabIndicator height='2px' bg='#2db100' bottom='0' top='unset' />
                    </TabList>
                </Flex>
            </Tabs>
            <Box mb='40px'>
                <LoadMorePagination button={true} cards={horizontalCardsVegan} main={false} />
            </Box>
            <CategoryPreview preview={categoriesPreviewData[1]} />
        </Box>
        <Sidebar />
    </Box>
);

export default Vegan;
