import {useContext} from "react";
import {ThemeContext} from "./ThemeContext";

const Button = ({ children }) => {
    const { toggleTheme } = useContext(ThemeContext);

    return (
        <label  onClick={toggleTheme}>
            {children}
        </label>

    );
            }

export {
    Button
}