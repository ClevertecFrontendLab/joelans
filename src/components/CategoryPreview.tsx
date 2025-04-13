import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

import PageTitle from './PageTitle';
import RowCard from './RowCard';
import VerticalCard from './VerticalCard';

interface CategoryPreviewProps {
    preview: Preview;
}

interface Preview {
    categoryTitle: string;
    categoryDescription: string;
    detailedRecipe: DetailedRecipe[];
    briefRecipe: BriefRecipe[];
}

interface DetailedRecipe {
    title: string;
    description: string;
    category: string;
    likes?: number;
    favorites?: number;
}

interface BriefRecipe {
    title: string;
    category: string;
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ preview }) => (
    <Box pb='27px' pt='24px' borderTop='1px solid #00000014'>
        <Box mb='24px'>
            <PageTitle
                location='bottom'
                title={preview.categoryTitle}
                description={preview.categoryDescription}
            />
        </Box>
        <Flex columnGap='24px' minW='0'>
            {preview.detailedRecipe.slice(0, 2).map((recipe) => (
                <VerticalCard
                    location='bottom'
                    title={recipe.title}
                    description={recipe.description}
                    category={recipe.category}
                    likes={recipe.likes}
                    favorites={recipe.favorites}
                />
            ))}
            <Flex gap='12px' flexDirection='column' flex='1 1 0' minW='0'>
                {preview.briefRecipe.slice(0, 3).map((recipe) => (
                    <RowCard title={recipe.title} category={recipe.category} />
                ))}
            </Flex>
        </Flex>
    </Box>
);

export default CategoryPreview;
