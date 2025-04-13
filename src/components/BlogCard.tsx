import { Box, Text } from '@chakra-ui/react';

import AvatarCard from './AvatarCard';

interface BlogCardProps {
    imgSrc?: string;
    user: string;
    userHandle: string;
    post: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ imgSrc, user, userHandle, post }) => (
    <Box
        borderRadius='8px'
        border='1px solid #00000014'
        px='24px'
        pt='24px'
        pb='20px'
        bg='#ffffff'
        flex='1 1 0'
        minW='0'
    >
        <Box mb='28px' minW='0'>
            <AvatarCard imgSrc={imgSrc} user={user} userHandle={userHandle} />
        </Box>
        <Text
            fontSize='14px'
            fontWeight='400'
            sx={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            }}
        >
            {post}
        </Text>
    </Box>
);

export default BlogCard;
