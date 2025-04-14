import { extendTheme } from '@chakra-ui/react';

export const appTheme = extendTheme({
    components: {
        Switch: {
            baseStyle: {
                track: {
                    width: '34px',
                    height: '20px',
                    padding: '0',
                    bg: '#00000029',
                    _checked: {
                        bg: '#03b24fdb',
                    },
                },
                thumb: {
                    position: 'absolute',
                    width: '16px',
                    height: '16px',
                    top: '2px',
                    left: '2px',
                },
            },
        },
    },
});
