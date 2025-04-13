import { Flex, Image, Text } from '@chakra-ui/react';

import { categoryMap } from '~/data/categoryMap';

interface CategoryTagProps {
    category: string;
    color?: 'yellow' | 'lime';
}

const CategoryTag = ({ category, color = 'yellow' }: CategoryTagProps) => {
    const bgColor = color === 'lime' ? '#d7ff94' : '#ffffd3';
    const src = categoryMap.get(category);

    return (
        <Flex
            width='fit-content'
            align='center'
            px='8px'
            py='2px'
            borderRadius='4px'
            bg={bgColor}
            gap='8px'
        >
            <Image src={src} w='16px' h='16px' />
            <Text fontSize='14px' fontWeight='400' lineHeight='20px' letterSpacing='0.01rem'>
                {category}
            </Text>
        </Flex>
    );
};

export default CategoryTag;
