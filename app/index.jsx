import { MotiText,MotiView ,MotiImage} from "moti";
import { FlatList } from "react-native";
import {COLORS} from "../constants/colors";
import { Dimensions , Animated,ScrollView} from "react-native";
import { MotiSafeAreaView } from "moti";
import { SIZES } from "../constants/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import picture from "../assets/kemal.jpg"
import chaka from "../assets/chaka.jpeg"
import one from "../assets/bg2.jpg"
import two from "../assets/bg1.jpg"
import three from "../assets/bg3.jpg"
import { StatusBar } from "expo-status-bar";
import { EvilIcons } from '@expo/vector-icons';
import { TextInput } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
import {faker} from "@faker-js/faker"
import { useMemo, useRef,useState } from "react";
import { MotiPressable } from 'moti/interactions'

const IMAGES = [
    {
      id: 1,
      src: chaka,
      name: faker.person.firstName(),
    },
    {
      id: 2,
      src: one,
      name: faker.person.firstName(),
    },
    {
      id: 3,
      src: two,
      name: faker.person.firstName(),
    },
    {
      id: 4,
      src: three,
      name: faker.person.firstName(),
    }
  ];



export default function Main(){

    
    const {width, height} = Dimensions.get("screen")
    const {top} = useSafeAreaInsets(); 
    const position = useRef(new Animated.Value(0)).current
    const [bg,setBg] = useState(chaka)

    const Card = ({name,id,image})=>{
        const [showText,setShowText] = useState(false)
        return (
            <MotiPressable 
                onPress={()=>{
                    setShowText(!showText)
                    setBg(image)
                }}
                animate={{rotateZ: `${showText ?  0: 2}deg`,scale: parseInt(`${showText ? 1.3 : 1}`)}}
                transition={{
                    duration:200,
                    type:"timing"
                }}
                key={id} style={{height:300,marginHorizontal:10}}   >
                <MotiImage source={image} style={[{width: 220, height: 250,borderRadius:15}]}  resizeMode="cover" />
                {
                    showText && (<MotiText style={{fontSize:18,textAlign:"center",color:COLORS.lightGrey,fontWeight:800,marginVertical:15}} from={{opacity:0,translateY:500}} animate={{opacity:1,translateY:0}} transition={{duration:200,type:"spring"}}>{name}</MotiText>)
                }
            </MotiPressable>
        )
    }



    return (
        <MotiSafeAreaView style={{flex:1}}>
            <StatusBar style={{backgroundColor:"transparent"}} />
            <ImageBackground source={bg} resizeMode="cover" blurRadius={1.5} >
                <ScrollView 
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

                    <MotiView style={{marginHorizontal:SIZES.extraLarge,marginTop:SIZES.extraLarge,backgroundColor:"transparent",paddingVertical:SIZES.small,borderRadius:8,borderColor:COLORS.white,borderWidth:0.5,paddingHorizontal:SIZES.small,flexDirection:"row",justifyContent:"space-between"}} blurRadius={40}>
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

                    {/* informations */}

                    <MotiView style={{marginVertical:SIZES.extraLarge,backgroundColor:"transparent",paddingVertical:SIZES.small,paddingHorizontal:SIZES.small,flexDirection:"column",justifyContent:"space-between"}} blurRadius={40}>
                        
                        <MotiView style={{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:SIZES.small,gap:SIZES.small}}>
                            <MotiText style={{fontSize:25,color:COLORS.white,fontWeight:600}}>NEW</MotiText>
                                <MotiView style={{width:10,height:10,borderRadius:10,backgroundColor:COLORS.white}}></MotiView>
                            <MotiText style={{fontSize:25,color:COLORS.yellow,fontWeight:500}}>STORY</MotiText>
                        </MotiView>
                        <MotiView style={{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:SIZES.small,gap:SIZES.small}}>
                            <MotiText style={{fontSize:35,textAlign:"center",color:COLORS.white,fontWeight:800}}>SHAKA SANZAGAKONA</MotiText>
                        </MotiView>
                        <MotiView style={{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:SIZES.small,gap:SIZES.small}}>
                            <MotiText style={{fontSize:15,textAlign:"center",color:COLORS.lightGrey,fontWeight:400}}>1800 , african history Drama , hero , history , africa</MotiText>
                        </MotiView>
                        <MotiView style={{marginTop:35,marginHorizontal:65,flexDirection:"row",justifyContent:"center",alignItems:"center",padding:2,borderRadius:10,gap:5,backgroundColor:COLORS.red,opacity:0.8}}></MotiView>
                    </MotiView>

                    <Animated.FlatList 
                        data={IMAGES}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={{marginVertical:40}}
                        snapToInterval={180}
                        decelerationRate="fast"
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent:{contentOffset:{x:position}}
                                }
                            ],
                            {useNativeDriver:true}
                        )}
                        renderItem={({item})=>{
                            console.log(item)
                            return (
                                <Card id={item.id} image={item.src} key={item.id} name={item.name} />
                            )
                        }}
                    />
                </ScrollView>
            </ImageBackground>
        </MotiSafeAreaView>
    
    )
}