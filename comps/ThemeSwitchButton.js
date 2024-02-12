import { Switch } from "react-native-paper";
import useTheme from "../context/useTheme";

function ThemeSwitchButton() {
    const {isDarkMode, toggleDarkMode} = useTheme()

    return ( 
        <Switch value = {isDarkMode} onValueChange={toggleDarkMode}/>
     );
}

export default ThemeSwitchButton;