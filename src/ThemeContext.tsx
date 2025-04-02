import { createContext, ReactNode, useContext, useState } from "react"


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
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext)
    
    if(!context){
        throw new Error("useThme deve ser utilizaso com um themeProvider")

    }
    return context
}