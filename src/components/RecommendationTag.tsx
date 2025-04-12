import { Flex, Image, Text } from '@chakra-ui/react';

interface RecommendationTagProps {
    user: string;
    srcImg: string;
}

const RecommendationTag = ({ user, srcImg }: RecommendationTagProps) => (
    <Flex
        align='center'
        gap='8px'
        px='8px'
        py='4px'
        bg='#d7ff94'
        borderRadius='4px'
        width='fit-content'
    >
        <Image src={srcImg} borderRadius='full' w='16px' h='16px' />
        <Text fontSize='14px' fontWeight='400'>
            {user} рекомендует
        </Text>
    </Flex>
);

export default RecommendationTag;
