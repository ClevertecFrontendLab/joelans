import { Box, Heading } from '@chakra-ui/react';

import CategoryTag from './CategoryTag';

const Slider = () => (
    <Box pt='24px' mb='40px'>
        <Heading as='h2' mb='24px' fontSize='48px' fontWeight='500' textAlign='left'>
            Новые рецепты
        </Heading>
        <CategoryTag category='Веганские блюда' color='lime' />
    </Box>
);

export default Slider;
