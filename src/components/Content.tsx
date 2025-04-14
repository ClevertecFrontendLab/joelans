import {
    Box,
    Flex,
    Heading,
    Icon,
    Link,
    Tab,
    TabIndicator,
    TabList,
    Tabs,
    Text,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router';

import { categoriesPreviewData } from '~/data/categoriesPreviewData';
import { horizontalCards, usersPosts } from '~/data/horizontalCards';

import BlogCard from './BlogCard';
import CategoryPreview from './CategoryPreview';
import LoadMorePagination from './LoadMorePagination';
import PageTitle from './PageTitle';
import SearchBar from './SearchBar';
import Slider from './Slider';

const Content = () => (
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
        <Slider />
        <Box mb='40px'>
            <Flex align='center' justify='space-between' mb='24px'>
                <Heading as='h2' fontSize='48px' fontWeight='500' textAlign='left'>
                    Самое сочное
                </Heading>
                <Link
                    as={RouterLink}
                    to='/juicy'
                    width='197px'
                    height='48px'
                    gap='8px'
                    paddingLeft='24px'
                    paddingRight='24px'
                    borderRadius='6px'
                    bg='#b1ff2e'
                    display='flex'
                    alignItems='center'
                    _hover='none'
                    _active='none'
                >
                    <Text fontSize='18px' fontWeight='600'>
                        Вся подборка
                    </Text>
                    <Icon width='16px' height='16px'>
                        <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M1 8.00001C1 7.8674 1.05268 7.74022 1.14645 7.64645C1.24021 7.55268 1.36739 7.50001 1.5 7.50001H13.293L10.146 4.35401C10.0521 4.26012 9.99937 4.13278 9.99937 4.00001C9.99937 3.86723 10.0521 3.73989 10.146 3.64601C10.2399 3.55212 10.3672 3.49937 10.5 3.49937C10.6328 3.49937 10.7601 3.55212 10.854 3.64601L14.854 7.64601C14.9006 7.69245 14.9375 7.74763 14.9627 7.80837C14.9879 7.86912 15.0009 7.93424 15.0009 8.00001C15.0009 8.06577 14.9879 8.13089 14.9627 8.19164C14.9375 8.25238 14.9006 8.30756 14.854 8.35401L10.854 12.354C10.7601 12.4479 10.6328 12.5006 10.5 12.5006C10.3672 12.5006 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50001H1.5C1.36739 8.50001 1.24021 8.44733 1.14645 8.35356C1.05268 8.25979 1 8.13261 1 8.00001Z'
                                fill='black'
                            />
                        </svg>
                    </Icon>
                </Link>
            </Flex>
            <LoadMorePagination cards={horizontalCards} />
        </Box>
        <Box bg='#c4ff61' borderRadius='16px' p='24px' mb='40px'>
            <Flex align='center' justify='space-between' mb='24px'>
                <Heading as='h3' fontSize='36px' fontWeight='400'>
                    Кулинарные блоги
                </Heading>
                <Link
                    href='#'
                    w='176px'
                    h='48px'
                    px='24px'
                    py='10px'
                    borderRadius='6px'
                    bg='transparent'
                    _hover='none'
                    _active='none'
                >
                    <Flex gap='8px' alignItems='center'>
                        <Text fontWeight='600' fontSize='18px'>
                            Все авторы
                        </Text>
                        <Icon width='16px' height='16px'>
                            <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fill-rule='evenodd'
                                    clip-rule='evenodd'
                                    d='M1 8.00001C1 7.8674 1.05268 7.74022 1.14645 7.64645C1.24021 7.55268 1.36739 7.50001 1.5 7.50001H13.293L10.146 4.35401C10.0521 4.26012 9.99937 4.13278 9.99937 4.00001C9.99937 3.86723 10.0521 3.73989 10.146 3.64601C10.2399 3.55212 10.3672 3.49937 10.5 3.49937C10.6328 3.49937 10.7601 3.55212 10.854 3.64601L14.854 7.64601C14.9006 7.69245 14.9375 7.74763 14.9627 7.80837C14.9879 7.86912 15.0009 7.93424 15.0009 8.00001C15.0009 8.06577 14.9879 8.13089 14.9627 8.19164C14.9375 8.25238 14.9006 8.30756 14.854 8.35401L10.854 12.354C10.7601 12.4479 10.6328 12.5006 10.5 12.5006C10.3672 12.5006 10.2399 12.4479 10.146 12.354C10.0521 12.2601 9.99937 12.1328 9.99937 12C9.99937 11.8672 10.0521 11.7399 10.146 11.646L13.293 8.50001H1.5C1.36739 8.50001 1.24021 8.44733 1.14645 8.35356C1.05268 8.25979 1 8.13261 1 8.00001Z'
                                    fill='black'
                                />
                            </svg>
                        </Icon>
                    </Flex>
                </Link>
            </Flex>
            <Flex gap='16px'>
                {usersPosts.map((post) => (
                    <BlogCard
                        user={post.user}
                        userHandle={post.userHandle}
                        imgSrc={post.imgSrc}
                        post={post.post}
                    />
                ))}
            </Flex>
        </Box>
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
        <CategoryPreview preview={categoriesPreviewData[0]} />
    </Box>
);

export default Content;
