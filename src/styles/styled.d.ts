import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            darkPrimary: string;
            secondary: string;

            outline: string;
            background: string;
            darkBackground: string;
            text: string;
            lightText: string;
        }
    }
}