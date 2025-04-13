import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface AvatarCardProps {
    imgSrc?: string;
    user: string;
    userHandle: string;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ imgSrc, user, userHandle }) => (
    <Flex align='center' minW='0'>
        <Avatar src={imgSrc} w='48px' h='48px' borderRadius='full' mr='12px' />
        <Box minW='0'>
            <Text
                fontWeight='500'
                fontSize='18px'
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
                width='100%'
                display='block'
            >
                {user}
            </Text>
            <Text fontSize='14px' fontWeight='400' color='#000000a3'>
                {userHandle}
            </Text>
        </Box>
    </Flex>
);

export default AvatarCard;
