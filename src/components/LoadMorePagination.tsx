import { Button, Flex, Text } from '@chakra-ui/react';

import HorizontalCard from './HorizontalCard';

interface Recommendation {
    user: string;
    imgSrc: string;
}

interface Card {
    imgSrc: string;
    title: string;
    description: string;
    category: string;
    likes?: number;
    favorites?: number;
    recommendation?: Recommendation;
}

interface LoadMorePaginationProps {
    cards: Card[];
    button?: boolean;
}

const LoadMorePagination: React.FC<LoadMorePaginationProps> = ({ cards, button = false }) => (
    <Flex direction='column' align='center'>
        <Flex wrap='wrap' gap='24px' mb={button ? '16px' : '0px'}>
            {cards.map((card, index) => (
                <HorizontalCard
                    key={index}
                    imageSrc={card.imgSrc}
                    title={card.title}
                    description={card.description}
                    category={card.category}
                    likes={card.likes}
                    favorites={card.favorites}
                    recommendation={card.recommendation}
                />
            ))}
        </Flex>
        {button && (
            <Button
                width='152px'
                height='40px'
                borderRadius='6px'
                px='16px'
                py='8px'
                bg='#b1ff2e'
                _hover='none'
                _active='none'
            >
                <Text fontSize='16px' fontWeight='600'>
                    Загрузить еще
                </Text>
            </Button>
        )}
    </Flex>
);

export default LoadMorePagination;
