import { createContext, useEffect, useState } from "react"

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {
    const [themeName, setThemeName] = useState("light");



    function handleThemeChange() {
        setThemeName(prevTheme => {
            const themeInfo = prevTheme === "light" ? "dark" : "light"
            changeTheme(themeInfo);
            localStorage.setItem("theme", themeInfo);
            return themeInfo;
        });
    }



    function changeTheme(themeName) {
        document.documentElement.setAttribute("data-bs-theme", themeName);
    }



    // Eğer localStorage'da bir tema varsa, onu kullan
    // Yoksa varsayılan temayı kullan(browser ayarları)
    function getPreferredTheme() {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }



    // Get the user's preferred theme
    useEffect(() => {
        changeTheme(getPreferredTheme());
        setThemeName(getPreferredTheme());
    }, [])

    return <ThemeContext.Provider value={{ themeName, handleThemeChange }}>
        {children}
    </ThemeContext.Provider>
}

export { ThemeContext, ThemeContextProvider };