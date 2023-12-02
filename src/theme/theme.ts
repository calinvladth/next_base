import {DefaultTheme} from "styled-components";

const theme: DefaultTheme = {
    colors: {
        black: '#000000',
        light: '#FFFFFF',
    },
    breakpoints: {
        xs: 320,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        xxl: 1536,
    }
};

export const device = {
    xs: `(max-width: ${theme.breakpoints.xs}px)`,
    sm: `(max-width: ${theme.breakpoints.sm}px)`,
    md: `(max-width: ${theme.breakpoints.md}px)`,
    lg: `(max-width: ${theme.breakpoints.lg}px)`,
    xl: `(max-width: ${theme.breakpoints.xl}px)`,
    xxl: `(max-width: ${theme.breakpoints.xxl}px)`,
}

export default theme;