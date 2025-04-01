import { createContext } from "react"
import { ReactNode } from "react"

interface ThemeContextType{
   theme : 'light' | 'dark'
   toggleTheme: () => void 
}

const ThemeContext = createContext<ThemeContextType | undefined >(undefined)

export const ThemePovider = ({children}: {children: ReactNode})

}