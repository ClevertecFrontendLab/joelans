import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Icon,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Switch,
} from '@chakra-ui/react';

const SearchBar = () => (
    <Box mb='32px'>
        <Flex align='center' mb='16px'>
            <IconButton
                mr='12px'
                _hover='none'
                _active='none'
                bg='transparent'
                border='1px solid #0000007a'
                borderRadius='6px'
                w='48px'
                h='48px'
                icon={
                    <Icon w='24px' h='24px'>
                        <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M9 15.75C9 15.5511 9.07902 15.3603 9.21967 15.2197C9.36032 15.079 9.55109 15 9.75 15H14.25C14.4489 15 14.6397 15.079 14.7803 15.2197C14.921 15.3603 15 15.5511 15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5H9.75C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75ZM6 11.25C6 11.0511 6.07902 10.8603 6.21967 10.7197C6.36032 10.579 6.55109 10.5 6.75 10.5H17.25C17.4489 10.5 17.6397 10.579 17.7803 10.7197C17.921 10.8603 18 11.0511 18 11.25C18 11.4489 17.921 11.6397 17.7803 11.7803C17.6397 11.921 17.4489 12 17.25 12H6.75C6.55109 12 6.36032 11.921 6.21967 11.7803C6.07902 11.6397 6 11.4489 6 11.25ZM3 6.75C3 6.55109 3.07902 6.36032 3.21967 6.21967C3.36032 6.07902 3.55109 6 3.75 6H20.25C20.4489 6 20.6397 6.07902 20.7803 6.21967C20.921 6.36032 21 6.55109 21 6.75C21 6.94891 20.921 7.13968 20.7803 7.28033C20.6397 7.42098 20.4489 7.5 20.25 7.5H3.75C3.55109 7.5 3.36032 7.42098 3.21967 7.28033C3.07902 7.13968 3 6.94891 3 6.75Z'
                                fill='black'
                            />
                        </svg>
                    </Icon>
                }
                aria-label='Filter icon'
            />
            <InputGroup w='458px'>
                <Input
                    placeholder='Название или ингредиент...'
                    borderRadius='6px'
                    border='1px solid #0000007a'
                    sx={{
                        '::placeholder': {
                            color: '#134b00',
                            fontSize: '18px',
                            fontWeight: '400',
                        },
                        _hover: {
                            borderColor: '#0000007a',
                        },
                        _focus: {
                            borderColor: '#0000007a',
                            boxShadow: 'none',
                        },
                    }}
                    fontSize='18px'
                    fontWeight='400'
                    color='#134b00'
                    h='48px'
                />
                <InputRightElement p='24px'>
                    <SearchIcon w='18px' h='18px' />
                </InputRightElement>
            </InputGroup>
        </Flex>
        <Flex align='center'>
            <FormControl display='flex' alignItems='center' gap='12px' w='auto' mr='16px'>
                <FormLabel htmlFor='toggle-switch' m='0'>
                    Исключить мои аллергены
                </FormLabel>
                <Switch id='toggle-switch' />
            </FormControl>
            <Menu>
                <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon w='20px' h='20px' />}
                    w='234px'
                    py='8px'
                    pl='16px'
                    pr='12px'
                    iconSpacing={3}
                    bg='transparent'
                    color='#2d3748'
                    fontWeight='400'
                    borderRadius='6px'
                    _hover='none'
                    _active='none'
                    border='1px solid #00000014'
                    _expanded={{
                        bg: 'transparent',
                    }}
                >
                    Выберите из списка...
                </MenuButton>
                <MenuList>
                    <MenuItem>Молочные продукты</MenuItem>
                    <MenuItem>Яйцо</MenuItem>
                    <MenuItem>Рыба</MenuItem>
                    <MenuItem>Моллюски</MenuItem>
                    <MenuItem>Орехи</MenuItem>
                    <MenuItem>Томат (помидор)</MenuItem>
                    <MenuItem>Цитрусовые</MenuItem>
                    <MenuItem>Клубника (ягоды)</MenuItem>
                    <MenuItem>Шоколад</MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    </Box>
);

export default SearchBar;
