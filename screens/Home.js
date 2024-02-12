import { Text, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import React from "react";
import Style from "../Style";
import useTheme from "../context/useTheme";

function Home() {
    const { isDarkMode } = useTheme()
    console.log(isDarkMode);
    return ( 
        <View style = {[Style.container, isDarkMode ?  Style.dark : Style.light]}>
            <Text style = {isDarkMode ? Style.dark : Style.light }> Home</Text>
        </View>

     );
}

export default Home;