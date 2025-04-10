import 'simplebar-react/dist/simplebar.min.css';

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    chakra,
    Flex,
    Icon,
    Image,
    Link,
    Text,
    VStack,
} from '@chakra-ui/react';
import SimpleBar from 'simplebar-react';
const Scrollbar = chakra(SimpleBar);

interface MenuProps {
    categories: Array<{
        title: string;
        icon: string;
        sections: string[];
    }>;
}

const Menu: React.FC<MenuProps> = ({ categories }) => (
    <Box
        width='256px'
        pt='24px'
        boxShadow='0px 2px 4px  #00000033'
        sx={{
            '@media (max-width: 1100px)': {
                display: 'none',
            },
        }}
    >
        <Box
            position='relative'
            overflow='hidden'
            height='calc(100vh - 253.39px)'
            py='10px'
            pl='10px'
            pr='16px'
            borderRadius='12px'
            _hover={{ boxShadow: '0px 2px 4px  #0000000f' }}
        >
            <Scrollbar
                autoHide={false}
                style={{ maxHeight: '100%' }}
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    marginTop: '10px',
                    marginBottom: '8px',
                    '& .simplebar-scrollbar': {
                        left: '-2px',
                    },
                    '& .simplebar-scrollbar::before': {
                        backgroundColor: '#00000029',
                        borderRadius: '8px',
                        width: '8px',
                    },
                    '& .simplebar-track.simplebar-vertical': {
                        width: '8px',
                        position: 'absolute',
                        right: '4px',
                    },
                    '& .simplebar-track': {
                        width: '8px',
                        backgroundColor: '#0000000A',
                        borderRadius: '8px',
                    },
                }}
            >
                <Accordion allowMultiple ml='10px' mr='16px'>
                    {categories.map((category, index) => (
                        <AccordionItem key={index} border='none'>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton
                                            py='12px'
                                            px='8px'
                                            transition='all 0.2s ease-out'
                                            _hover={{ bg: '#ffffd3' }}
                                            _expanded={{ bg: '#eaffc7' }}
                                        >
                                            <Flex textAlign='left' flex='1' align='center'>
                                                <Image src={category.icon} mr='12px' />
                                                <Text fontWeight={isExpanded ? 700 : 500}>
                                                    {category.title}
                                                </Text>
                                            </Flex>
                                            <AccordionIcon />
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel p='0'>
                                        <VStack gap='0' align='flex-start'>
                                            {category.sections.map((section, subIndex) => (
                                                <Link
                                                    _hover={{ bg: '#ffffd3' }}
                                                    transition='all 0.2s ease-out'
                                                    role='group'
                                                >
                                                    <Flex
                                                        py='6px'
                                                        pl='40px'
                                                        width='230px'
                                                        position='relative'
                                                    >
                                                        <Box
                                                            width='1px'
                                                            height='24px'
                                                            bg='#c4ff61'
                                                            _groupHover={{ bg: '#ffffd3' }}
                                                        />
                                                        <Text
                                                            key={subIndex}
                                                            ml='11px'
                                                            fontWeight='500'
                                                        >
                                                            {section}
                                                        </Text>
                                                    </Flex>
                                                </Link>
                                            ))}
                                        </VStack>
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    ))}
                </Accordion>
            </Scrollbar>
        </Box>
        <Box px='24px' pb='27px'>
            <Text fontSize='12px' fontWeight='500' color='#0000003d'>
                Версия программы 03.25
            </Text>
            <Text fontSize='12px' fontWeight='400' color='#000000a3' lineHeight='16px' my='16px'>
                Все права защищены, ученический файл, <br></br>©Клевер Технолоджи, 2025
            </Text>
            <Button
                leftIcon={
                    <Icon width='12px' height='12px' marginRight='-2px'>
                        <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path d='M8 6.5V5.5H3.5V4L1 6L3.5 8V6.5H8Z' fill='black' />
                            <path
                                d='M10 1.5H5.5C4.9485 1.5 4.5 1.9485 4.5 2.5V4.5H5.5V2.5H10V9.5H5.5V7.5H4.5V9.5C4.5 10.0515 4.9485 10.5 5.5 10.5H10C10.5515 10.5 11 10.0515 11 9.5V2.5C11 1.9485 10.5515 1.5 10 1.5Z'
                                fill='black'
                            />
                        </svg>
                    </Icon>
                }
                p='5px'
                height='auto'
                bg='transparent'
                _hover='none'
                _active='none'
                ml='-5px'
                display='flex'
                alignItems='center'
            >
                <Text fontSize='12px' fontWeight='600'>
                    Выйти
                </Text>
            </Button>
        </Box>
    </Box>
);

export default Menu;
