export const theme = {
    colors: {
        white: '#eee',
        black: '#111',
        gray: '#333',
        lightGray: 'CCC'
    },
    bColor: {
        dark: {
            primary: "#000"
        },
        ligth: {
            primary: "#fff"
        }
    },
    sizes: {
        xsmall: '1rem',
        small: '1.2rem',
        medium: '1.6rem',
        large: '2.4rem',
        xlarge: '3.2rem',
        xxlarge: '4.0rem'
    },
}

export type HeadingProps = {
    color?: keyof typeof theme.colors,
    size?: keyof typeof theme.sizes,
    fontWeight?: 100 | 400 | 700,
    level?: 1 | 2 | 3 | 4 | 5 | 6,
    textAlign?: 'center' | 'end' | 'justify' | 'left' | 'right' | 'start' |
    'inherit' | 'inherit' | 'initial' | 'unset'
}
export type ContainerProps = {
    dplay?: "flex" | "block",
    pd?: number,
    justifyC?: 'space-between' | 'center' | 'flex-end' | 'flex-start'
}

export type GlobalProps = {
    theme: "dark" | 'ligth'
}
