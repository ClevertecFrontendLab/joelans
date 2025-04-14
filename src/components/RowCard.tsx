import { Flex, Image, Link, Text } from '@chakra-ui/react';

import { categoryMap } from '~/data/categoryMap';

interface RowCardProps {
    title: string;
    category: string;
}

const RowCard: React.FC<RowCardProps> = ({ title, category }) => (
    <Flex
        px='24px'
        py='11px'
        align='center'
        justify='space-between'
        flex='1 1 0'
        gap='12px'
        border='1px solid #00000014'
        borderRadius='8px'
        w='100%'
    >
        <Flex align='center' minW='0' gap='12px'>
            <Image src={categoryMap.get(category)} flexShrink={0} />
            <Text
                fontSize='20px'
                fontWeight='500'
                letterSpacing='0.02rem'
                whiteSpace='nowrap'
                overflow='hidden'
                textOverflow='ellipsis'
                isTruncated
            >
                {title}
            </Text>
        </Flex>

        <Link
            href='#'
            // w="87px"
            // h="32px"
            borderRadius='6px'
            px='12px'
            py='4.5px'
            border='1px solid #2DB100'
            _hover='none'
            _active='none'
        >
            <Text fontWeight='600' fontSize='14px' color='#2DB100'>
                Готовить
            </Text>
        </Link>
    </Flex>
);

export default RowCard;
