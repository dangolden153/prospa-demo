import { StatusBar } from 'expo-status-bar';
import React,{useLayoutEffect, useState} from 'react'
import { View, Text,StyleSheet, FlatList,TextInput } from 'react-native'
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Divider } from 'react-native-elements';
import { Image } from 'react-native-elements/dist/image/Image';
import { ScrollView } from 'react-native-gesture-handler';
// import {  } from 'react-native-elements/dist/input/Input';
import { Ionicons } from '@expo/vector-icons';

const mealData = [
    {
      id: 1,
      mealName: "Salad",
      description: "react native elements dist image",
      img: require("../images/food_1.jpg"),
    },
    {
      id: 2,
      mealName: "Fried rice",
      description: "react native elements dist image",
      img: require("../images/food_2.jpg"),
    },
    {
      id: 3,
      mealName: "Vegetable",
      description: "react native elements dist image",
      img: require("../images/food_3.jpg"),
    },
    {
      id: 4,
      mealName: "Bread",
      description: "react native elements dist image",
      img: require("../images/food_4.jpg"),
    },
    {
        id: 5,
        mealName: "Fried rice",
        description: "react native elements dist image",
        img: require("../images/food_5.jpg"),
      },
      {
        id: 6,
        mealName: "Vegetable",
        description: "react native elements dist image",
        img: require("../images/food_6.jpg"),
      },
      {
        id: 7,
        mealName: "Bread",
        description: "react native elements dist image",
        img: require("../images/food_1.jpg"),
      },
  ];

  

const Menu = ({navigation}) => {

    const [search, setSearch] = useState("")

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Breakfast Menu",
            headerRight:() =>(
                <View style={{paddingRight: 15}}>
               <Ionicons name="menu" size={30} color="black" /> 
                </View>
            )
        })
        
    },[navigation])


    ////// data been rendered by an array  

    const renderMealMenu =(item) =>{
        return(
            <View>
                <ScrollView contentContainerStyle={styles.menuStyle}>
           
           
                <Image source={item.img} style={{height: 80, width: 80, borderRadius: 20}} />
                <View style={styles.right_flex}>
                <Text style={{color:"white", fontSize: 20}}>{item.mealName}</Text>
                <Text style={{color:"white", fontSize: 16}}>{item.description}</Text>

                <View style={styles.iconBtn}>
                <Ionicons name="heart-outline" size={30} color="white" /> 
                <Button title="kitchen" type="outline" styles={{color:"white"}} containerStyle={styles.btn} />
                
                </View>
                </View>    
                
            
            </ScrollView>
            <Divider style={{marginVertical: 10}} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.inputContainer}> 
            <TextInput 
            type="text"
            placeholder="Search"
            value={search}
            onChange={(text)=> setSearch(text)}
            style={styles.input}
            />
                <Ionicons name="search" size={30} color="white" /> 
            </View>
            

            <FlatList style={{padding: 20, }}
            data={mealData}  
            renderItem={({item})=>{
                return renderMealMenu(item)
            }}
            keyExtractor={item => `${item.id}`}
            />
            
        </View>
    )
}

export default Menu


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#1A1A21",
        // alignItems:"center",
        // width:"100%",
    },
    menuStyle:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent:"space-between",
        margin: 10,
        marginVertical:10,
    },

    right_flex:{
    },

    iconBtn:{
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
        
    },
    btn:{
        color: "#F64B29",
        borderColor: "#F64B29",
    
    },
    inputContainer:{
        flexDirection:"row",
        alignSelf:"center",
        marginTop: 10,
        justifyContent:"center"
    },
    input:{
        backgroundColor: "white",
        width: "70%",
        borderRadius: 20,
        marginRight:10,
        paddingHorizontal: 15,
        paddingVertical: 5
    }
})