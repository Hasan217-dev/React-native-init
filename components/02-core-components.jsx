import { StyleSheet, Text, View , ScrollView, Button , Switch} from 'react-native'
import React, { useState } from 'react'

const HomeScrenn = () => {
  const [isDarkMode , setIsDarkMode] = useState(false)
  const items = Array.from({length : 5} , (_ , i)=> `Item ${i + 1}`  )
  return (
    <ScrollView
    style={{flex : 1 , backgroundColor : "red"}} contentContainerStyle={{
      padding : 16,
      alignItems : 'center',
      justifyContent : "center"
    }}
    >
      {items.map((item)=> (
        <View
        key={item}
        style={{
          backgroundColor : "white",
          padding : 16 ,
          borderRadius : 10,
          marginTop : 15,
        }}
        >
         <Text > {item} </Text>
        </View>
      ))}

      <Button 
      title='Helo im Button'
      color="blue"
      onPress={() => alert("Add to cart")}
      />

      <Switch 
        value={isDarkMode}
         onValueChange={setIsDarkMode}
         trackColor={{false : "blue" , true : "yellow"}}
         thumbColor="orange"
      />

    </ScrollView>

    
  )
}

export default HomeScrenn

const styles = StyleSheet.create({})