import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            black: string;
            light: string;
        };
        breakpoints: {
            xs: number,
            sm: number,
            md: number,
            lg: number,
            xl: number,
            xxl: number,
        },
    }
}
