import { createContext, useState } from "react"

export const Context = createContext();


export const ContextoProvider = ({children}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const data = {
        isMenuOpen,
        setIsMenuOpen,
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

