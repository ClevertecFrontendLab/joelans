import { Box, Heading, Text } from '@chakra-ui/react';

interface PageTitleProps {
    title: string;
    description?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description }) => (
    <Box my='32px'>
        <Heading as='h1' fontSize='48px' fontWeight='700' lineHeight='48px' textAlign='center'>
            {title}
        </Heading>
        {description && (
            <Text mt='12px' fontWeight='500' lineHeight='24px' textAlign='center' color='#000000a3'>
                {description}
            </Text>
        )}
    </Box>
);

export default PageTitle;
