import { Box, Button, Flex, Heading, Icon } from '@chakra-ui/react';

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
        <Flex position='relative'>
            <Button
                position='absolute'
                left='-8px'
                top='147px'
                zIndex='1'
                width='48px'
                height='48px'
                gap='8px'
                paddingLeft='12px'
                paddingRight='12px'
                borderRadius='6px'
                bg='#000000'
                display='flex'
                alignItems='center'
                justifyContent='center'
                _hover='none'
                _active='none'
            >
                <Icon width='24px' height='24px'>
                    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M22.4999 12C22.4999 11.8011 22.4209 11.6103 22.2802 11.4697C22.1396 11.329 21.9488 11.25 21.7499 11.25H4.06038L8.78088 6.531C8.85061 6.46127 8.90592 6.37849 8.94366 6.28738C8.9814 6.19627 9.00082 6.09862 9.00082 6C9.00082 5.90139 8.9814 5.80374 8.94366 5.71263C8.90592 5.62152 8.85061 5.53873 8.78088 5.469C8.71114 5.39927 8.62836 5.34396 8.53725 5.30622C8.44614 5.26848 8.34849 5.24905 8.24988 5.24905C8.15126 5.24905 8.05361 5.26848 7.9625 5.30622C7.87139 5.34396 7.78861 5.39927 7.71888 5.469L1.71888 11.469C1.64903 11.5387 1.59362 11.6214 1.55581 11.7126C1.518 11.8037 1.49854 11.9014 1.49854 12C1.49854 12.0987 1.518 12.1963 1.55581 12.2875C1.59362 12.3786 1.64903 12.4613 1.71888 12.531L7.71888 18.531C7.78861 18.6007 7.87139 18.656 7.9625 18.6938C8.05361 18.7315 8.15126 18.7509 8.24988 18.7509C8.34849 18.7509 8.44614 18.7315 8.53725 18.6938C8.62836 18.656 8.71114 18.6007 8.78088 18.531C8.85061 18.4613 8.90592 18.3785 8.94366 18.2874C8.9814 18.1963 9.00082 18.0986 9.00082 18C9.00082 17.9014 8.9814 17.8037 8.94366 17.7126C8.90592 17.6215 8.85061 17.5387 8.78088 17.469L4.06038 12.75H21.7499C21.9488 12.75 22.1396 12.671 22.2802 12.5303C22.4209 12.3897 22.4999 12.1989 22.4999 12Z'
                            fill='#FFFFD3'
                        />
                    </svg>
                </Icon>
            </Button>
            <Box overflow='hidden' width='100%'>
                <Flex gap='24px'>
                    {cards.map((card) => (
                        <VerticalCard
                            imageSrc={card.imgSrc}
                            title={card.title}
                            description={card.description}
                            category={card.category}
                            favorites={card.favorites}
                            likes={card.likes}
                            colorTag='lime'
                        />
                    ))}
                </Flex>
            </Box>
            <Button
                position='absolute'
                right='-8px'
                top='147px'
                zIndex='1'
                width='48px'
                height='48px'
                gap='8px'
                paddingLeft='12px'
                paddingRight='12px'
                borderRadius='6px'
                bg='#000000'
                display='flex'
                alignItems='center'
                justifyContent='center'
                _hover='none'
                _active='none'
            >
                <Icon width='24px' height='24px'>
                    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M1.5 12C1.5 11.8011 1.57902 11.6103 1.71967 11.4697C1.86032 11.329 2.05109 11.25 2.25 11.25H19.9395L15.219 6.531C15.0782 6.39017 14.9991 6.19916 14.9991 6C14.9991 5.80084 15.0782 5.60983 15.219 5.469C15.3598 5.32817 15.5508 5.24905 15.75 5.24905C15.9492 5.24905 16.1402 5.32817 16.281 5.469L22.281 11.469C22.3508 11.5387 22.4063 11.6214 22.4441 11.7126C22.4819 11.8037 22.5013 11.9014 22.5013 12C22.5013 12.0987 22.4819 12.1963 22.4441 12.2875C22.4063 12.3786 22.3508 12.4613 22.281 12.531L16.281 18.531C16.1402 18.6718 15.9492 18.7509 15.75 18.7509C15.5508 18.7509 15.3598 18.6718 15.219 18.531C15.0782 18.3902 14.9991 18.1992 14.9991 18C14.9991 17.8008 15.0782 17.6098 15.219 17.469L19.9395 12.75H2.25C2.05109 12.75 1.86032 12.671 1.71967 12.5303C1.57902 12.3897 1.5 12.1989 1.5 12Z'
                            fill='#FFFFD3'
                        />
                    </svg>
                </Icon>
            </Button>
        </Flex>
    </Box>
);

export default Slider;
