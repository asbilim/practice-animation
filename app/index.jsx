import { MotiText,MotiView,MotiScrollView ,MotiImage} from "moti";
import {COLORS} from "../constants/colors";
import { Dimensions } from "react-native";
import { MotiSafeAreaView } from "moti";
import { Tabs } from "expo-router";
import { SIZES } from "../constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import picture from "../assets/kemal.jpg"
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageBackground } from "react-native";

export default function Main(){

    const {width, height} = Dimensions.get("screen")
    const {top} = useSafeAreaInsets(); 
   
    return (
        <MotiSafeAreaView style={{flex:1}}>
            <StatusBar hidden />
            <Tabs.Screen 
                options={{
                    headerShown:false,
                }}
            />
            <ImageBackground source={picture} >
                <MotiScrollView 
                    style={{backgroundColor:"transparent",minHeight:height}}
                >

                <MotiView
                        style={{
                            flex:1,paddingHorizontal:SIZES.extraLarge,paddingVertical:SIZES.small,marginVertical:top,flexDirection:"row",justifyContent:"space-between",alignItems:"center"
                        }}
                >
                        <MotiView 
                            style={{flexDirection:"column",justifyContent:"center",alignItems:"flex-start",gap:SIZES.small}}
                        >
                            <MotiView
                                style={{flex:1,flexDirection:"row",justifyContent:"flex-start",gap:SIZES.small}}
                            >
                                <MotiText style={{fontSize:19,fontWeight:700,color:COLORS.white}}>Hello</MotiText>
                                <MotiText style={{fontSize:19,fontWeight:300,color:COLORS.white}}>{"Daisy"} !</MotiText>
                            </MotiView>
                            <MotiView
                                style={{flex:1,flexDirection:"row",justifyContent:"flex-start",gap:SIZES.small}}
                            >
                                <MotiText style={{fontSize:14,fontWeight:400,color:COLORS.darkGrey}}>Check for latest stories</MotiText>
                            </MotiView>
                        </MotiView>
                        <MotiView>
                            <MotiImage source={picture} style={{width:45,height:45,resizeMode:"cover",borderRadius:22.5}} />
                        </MotiView>
                </MotiView>

                    {/* search */}

                    <MotiView style={{marginHorizontal:SIZES.extraLarge,marginVertical:SIZES.extraLarge,backgroundColor:"transparent",paddingVertical:SIZES.small,borderRadius:8,borderColor:COLORS.white,borderWidth:0.5,paddingHorizontal:SIZES.small,flexDirection:"row",justifyContent:"space-between"}} blurRadius={40}>
                        <MotiView
                            style={{flex:8,flexDirection:"row",alignItems:"center"}}
                        >
                            <EvilIcons name="search" size={24} color={COLORS.lightGrey} />
                            <TextInput  style={{flex:1,color:COLORS.lightGrey,paddingLeft:8}} placeholder="The history of..." placeholderTextColor={COLORS.darkGrey} />
                        </MotiView>
                        <MotiView
                            style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end",borderLeftWidth:1,borderLeftColor:COLORS.darkGrey}}
                        >
                            <MaterialCommunityIcons name="microphone-outline" size={24} color={COLORS.darkGrey} />
                        </MotiView>
                    </MotiView>
                </MotiScrollView>
            </ImageBackground>
        </MotiSafeAreaView>
    
    )
}