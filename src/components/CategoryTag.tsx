import { Flex, Image, Text } from '@chakra-ui/react';

interface CategoryTagProps {
    category: string;
    color?: 'yellow' | 'lime';
}

const entries: [string, string][] = [
    ['Салаты', './eggplant-icon.svg'],
    ['Закуски', './tomato-icon.svg'],
    ['Первые блюда', './pot-icon.svg'],
    ['Вторые блюда', './frying-pan-icon.svg'],
    ['Десерты, выпечка', './bread-icon.svg'],
    ['Блюда на гриле', './oven-icon.svg'],
    ['Веганские блюда', './leaf-icon.svg'],
    ['Детские блюда', './child-tasty-icon.svg'],
    ['Лечебное питание', './health-eating-icon.svg'],
    ['Национальные', './spoon-icon.svg'],
    ['Соусы', './sauce-icon.svg'],
    ['Напитки', './drinks-icon.svg'],
    ['Заготовки', './jelly-icon.svg'],
];

const map = new Map<string, string>(entries);

const CategoryTag = ({ category, color = 'yellow' }: CategoryTagProps) => {
    const bgColor = color === 'lime' ? '#d7ff94' : '#ffffd3';
    const src = map.get(category);

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
