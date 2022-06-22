import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {AntDesign} from '@expo/vector-icons'
import { color } from './Colors';


const MobileItem = ({item}) => {
    return (
        <TouchableOpacity
          style={styles.container}
        >
          {/* icon  */}
          <View style={styles.icon_text}>
          <AntDesign name={item.icon} size={24} color={item.iconColor} />
    
            {/* title   */}
            <View style={{ alignItems: "flex-start", marginLeft: 20 }}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </View>
    
          {/* next  */}
          <TouchableOpacity >
          <AntDesign name="right" size={20} color="black" />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    };
    
    export default MobileItem;
    
    const styles = StyleSheet.create({
      container: {
        paddingHorizontal:20,
        paddingVertical: 13,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
      icon_text: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      title: {
        fontSize: 15,
        fontWeight: "bold",
      },
      subTitle: {
        fontSize: 13,
        fontWeight: "bold",
      },

    })