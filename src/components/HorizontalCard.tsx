import { Box, Button, Flex, Icon, Image, Text } from '@chakra-ui/react';

import CategoryTag from './CategoryTag';
import RecommendationTag from './RecommendationTag';
import Stats from './Stats';

interface HorizontalCardProps {
    imageSrc: string;
    title: string;
    description: string;
    category: string;
    likes?: number;
    favorites?: number;
    recommendation?: {
        user: string;
        imgSrc: string;
    };
}

const HorizontalCard = ({
    imageSrc,
    title,
    description,
    category,
    likes = 0,
    favorites = 0,
    recommendation = undefined,
}: HorizontalCardProps) => (
    <Flex
        border='1px solid #00000014'
        borderRadius='8px'
        width='fit-content'
        mb='200px'
        position='relative'
    >
        {recommendation !== undefined && (
            <Box position='absolute' left='26px' bottom='20px'>
                <RecommendationTag user={recommendation?.user} srcImg={recommendation?.imgSrc} />
            </Box>
        )}
        <Image src={imageSrc} borderTopLeftRadius='8px' borderBottomLeftRadius='8px' />
        <Box px='24px' py='20px' w='100%'>
            <Flex justify='space-between' width='100%'>
                <CategoryTag category={category} />
                <Stats favorites={favorites} likes={likes} />
            </Flex>
            <Text
                fontSize='20px'
                fontWeight='500'
                lineHeight='28px'
                letterSpacing='0.18px'
                mt='24px'
                mb='8px'
                isTruncated
                maxW='274px'
                // maxW="calc(100% - 40px)"
            >
                {title}
            </Text>
            <Text
                h='64px'
                fontSize='14px'
                fontWeight='400'
                lineHeight='20px'
                mb='24px'
                sx={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}
            >
                {description}
            </Text>
            <Flex justify='flex-end' gap='8px'>
                <Button
                    w='122px'
                    h='32px'
                    gap='8px'
                    borderRadius='6px'
                    padding='6px 12px'
                    bg='#ffffff0f'
                    border='1px solid #0000007a'
                    display='flex'
                    alignItems='center'
                    _hover='none'
                    _active='none'
                >
                    <Icon width='14px' height='14px'>
                        <svg viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                fill-rule='evenodd'
                                clip-rule='evenodd'
                                d='M6.99983 3.85875C8.21345 2.61187 11.2471 4.795 6.99983 7.60112C2.75258 4.795 5.7862 2.61275 6.99983 3.8605V3.85875Z'
                                fill='black'
                            />
                            <path
                                d='M1.75 1.75C1.75 1.28587 1.93437 0.840752 2.26256 0.512563C2.59075 0.184374 3.03587 0 3.5 0L10.5 0C10.9641 0 11.4092 0.184374 11.7374 0.512563C12.0656 0.840752 12.25 1.28587 12.25 1.75V13.5625C12.25 13.6416 12.2285 13.7193 12.1878 13.7872C12.1471 13.855 12.0888 13.9106 12.019 13.948C11.9492 13.9853 11.8706 14.0031 11.7916 13.9993C11.7125 13.9955 11.636 13.9703 11.5701 13.9265L7 11.4634L2.42987 13.9265C2.36399 13.9703 2.28745 13.9955 2.20841 13.9993C2.12936 14.0031 2.05077 13.9853 1.981 13.948C1.91123 13.9106 1.8529 13.855 1.81222 13.7872C1.77155 13.7193 1.75004 13.6416 1.75 13.5625V1.75ZM3.5 0.875C3.26794 0.875 3.04538 0.967187 2.88128 1.13128C2.71719 1.29538 2.625 1.51794 2.625 1.75V12.7452L6.75763 10.5735C6.82943 10.5257 6.91375 10.5002 7 10.5002C7.08625 10.5002 7.17057 10.5257 7.24238 10.5735L11.375 12.7452V1.75C11.375 1.51794 11.2828 1.29538 11.1187 1.13128C10.9546 0.967187 10.7321 0.875 10.5 0.875H3.5Z'
                                fill='black'
                            />
                        </svg>
                    </Icon>
                    <Text fontWeight='600' fontSize='14px' lineHeight='20px' color='#000000cc'>
                        Сохранить
                    </Text>
                </Button>
                <Button
                    w='87px'
                    h='32px'
                    borderRadius='6px'
                    p='5px 11px'
                    bg='#000000eb'
                    border='1px solid #00000014'
                    _hover='none'
                    _active='none'
                >
                    <Text fontWeight='600' fontSize='14px' color='#ffffff'>
                        Готовить
                    </Text>
                </Button>
            </Flex>
        </Box>
    </Flex>
);

export default HorizontalCard;
