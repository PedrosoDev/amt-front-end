import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            secondary: string;

            background: string;
            darkBackground: string;
            text: string;
            lightText: string;
        }
    }
}