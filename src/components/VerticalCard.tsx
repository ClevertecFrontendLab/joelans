import { Box, Flex, Image, Text } from '@chakra-ui/react';

import CategoryTag from './CategoryTag';
import Stats from './Stats';

interface VerticalCardProps {
    imageSrc: string;
    title: string;
    description: string;
    category: string;
    likes?: number;
    favorites?: number;
}

const VerticalCard = ({
    imageSrc,
    title,
    description,
    category,
    likes = 0,
    favorites = 0,
}: VerticalCardProps) => (
    <Box border='1px solid #00000014' borderRadius='8px' w='322px' h='414px'>
        <Image src={imageSrc} borderTopRadius='8px' />
        <Box px='24px' pt='16px' pb='20px'>
            <Text
                fontSize='20px'
                fontWeight='500'
                lineHeight='28px'
                mb='8px'
                isTruncated
                maxW='274px'
            >
                {title}
            </Text>
            <Text
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
            <Flex justify='space-between'>
                <CategoryTag category={category} color='lime' />
                <Stats favorites={favorites} likes={likes} />
            </Flex>
        </Box>
    </Box>
);

export default VerticalCard;
