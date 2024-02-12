import { StatusBar } from "expo-status-bar";
import { Platform, View } from "react-native";
import { Constants } from "expo-constants";

function MyStatusbar(props) {
        const backgroundColor = props.backgroundColor ? props.backgroundColor : '#fff'
        const statusBarHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0
    return (  
        <View style={{backgroundColor: backgroundColor, height: statusBarHeight}}>
            <StatusBar {...props}/>
        </View>

    );
}

export default MyStatusbar;