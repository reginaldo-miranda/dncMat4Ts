import { createContext, ReactNode, useState } from "react"


interface ThemeContextType{
   theme : 'light' | 'dark'
   toggleTheme: () => void 
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined)

export const ThemePovider = ({children}: {children: ReactNode}) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    const toggleTheme = () => {
        setTheme((previousTheme) => (previousTheme === 'light' ? 'dark' : 'light'))
    }
}

