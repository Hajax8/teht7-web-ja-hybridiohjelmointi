import { View } from "react-native";
import { Text } from "react-native-paper";
import useTheme from "../context/useTheme";
import Style from "../Style";
import ThemeSwitchButton from "../comps/ThemeSwitchButton";

function Settings() {
    const {isDarkMode } = useTheme();

    return (
        <View style = {[Style.container,isDarkMode ? Style.dark : Style.light]}>
            <Text>Settings</Text>
            <ThemeSwitchButton/>
        </View>
      );
}

export default Settings;
