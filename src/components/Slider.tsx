import { Box, Flex, Heading } from '@chakra-ui/react';

import CategoryTag from './CategoryTag';
import Stats from './Stats';
import VerticalCard from './VerticalCard';

const cards = [
    {
        imgSrc: './recipes-images/vertical-card-1.png',
        title: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        category: 'Первые блюда',
        favorites: 1,
    },
    {
        imgSrc: './recipes-images/vertical-card-2.png',
        title: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и  невероятно вкусными. Мягкий вкус и лadfsfrferfreferfeferferf',
        category: 'Веганские блюда',
        favorites: 2,
        likes: 1,
    },
    {
        imgSrc: './recipes-images/vertical-card-3.png',
        title: 'Оладьи на кефире "Пышные" препышные на кефире',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: 'Десерты, выпечка',
        likes: 1,
    },
    {
        imgSrc: './recipes-images/vertical-card-4.png',
        title: 'Салат "Здоровье"',
        description:
            'Сельдерей очень полезен для здоровья, пора набираться витаминов. Не  салат, а сплошное удовольствие:) лadfsfrferfreferfeferferf',
        category: 'Салаты',
    },
    {
        imgSrc: './recipes-images/vertical-card-3.png',
        title: 'Оладьи на кефире "Пышные" препышные на кефире',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        category: 'Десерты, выпечка',
        likes: 1,
    },
];

const Slider = () => (
    <Box pt='24px' mb='40px'>
        <Heading as='h2' mb='24px' fontSize='48px' fontWeight='500' textAlign='left'>
            Новые рецепты
        </Heading>
        <CategoryTag category='Веганские блюда' color='lime' />
        <Stats favorites={2} likes={1} />
        <Flex flexWrap='wrap'>
            {cards.map((card) => (
                <VerticalCard
                    imageSrc={card.imgSrc}
                    title={card.title}
                    description={card.description}
                    category={card.category}
                    favorites={card.favorites}
                    likes={card.likes}
                />
            ))}
        </Flex>
    </Box>
);

export default Slider;
