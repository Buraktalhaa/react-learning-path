import { useContext } from "react";
import { darkTheme, lightTheme } from "./Icons";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeIcon(props) {
    const { themeName, handleThemeChange } = useContext(ThemeContext);

    return (
        <>
            {themeName === "light" ? <button className="btn" onClick={handleThemeChange}>{lightTheme} Light</button> : <button className="btn" onClick={handleThemeChange}>{darkTheme} Dark</button>}
        </>
    );
}