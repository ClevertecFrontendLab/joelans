import { Flex, Heading, Text } from '@chakra-ui/react';

interface PageTitleProps {
    title: string;
    description?: string;
    location?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, description, location = 'top' }) => (
    <Flex
        direction={location === 'bottom' ? 'row' : 'column'}
        justify='space-between'
        sx={{
            '@media (max-width: 1440px)': {
                columnGap: location === 'bottom' ? '39px' : '0px',
            },
        }}
    >
        <Heading
            as='h1'
            fontSize='48px'
            fontWeight={location === 'bottom' ? '500' : '700'}
            lineHeight='48px'
            textAlign={location === 'bottom' ? 'left' : 'center'}
            letterSpacing={location === 'bottom' ? '0.13rem' : 'normal'}
            sx={{
                '@media (max-width: 1440px)': {
                    fontSize: location === 'bottom' ? '36px' : '48px',
                    lineHeight: location === 'bottom' ? '40px' : '48px',
                },
                '@media (max-width: 768px)': {
                    direction: 'column',
                    fontSize: '24px',
                    lineHeight: '32px',
                },
            }}
        >
            {title}
        </Heading>
        {description && (
            <Text
                mt={location === 'bottom' ? '0px' : '12px'}
                fontWeight='500'
                lineHeight='24px'
                textAlign={location === 'bottom' ? 'left' : 'center'}
                color='#000000a3'
                letterSpacing={location === 'bottom' ? '0.0079rem' : 'normal'}
                width={location === 'bottom' ? '668px' : '696px'}
                sx={{
                    '@media (max-width: 768px)': {
                        fontSize: '14px',
                        lineHeight: '20px',
                    },
                }}
            >
                {description}
            </Text>
        )}
    </Flex>
);

export default PageTitle;
