import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const HeaderRightNav = () => {

    const pics =
    "https://images.unsplash.com/photo-1638913662252-70efce1e60a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
  
  return (
    <TouchableOpacity style={{ marginTop: 15, marginRight: 15 }}>
    <Image
      source={{ uri: pics }}
      style={{ width: 50, height: 50, borderRadius: 100 }}
    />
  </TouchableOpacity>
  )
}

export default HeaderRightNav