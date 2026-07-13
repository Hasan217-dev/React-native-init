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







// import { StyleSheet, Text, View , FlatList } from 'react-native'
// import React from 'react'

// const USERS = [
//   { "id": 1, "name": "Ali Khan", "role": "admin" },
//   { "id": 2, "name": "Sara Ahmed", "role": "editor" },
//   { "id": 3, "name": "Usman Tariq", "role": "user" },
//   { "id": 4, "name": "Ayesha Malik", "role": "moderator" },
//   { "id": 5, "name": "Bilal Hussain", "role": "user" }
// ]

// const HomePage = () => {
//   return (
//     <FlatList
//     data={USERS}
//     keyExtractor={(item) => item.id}
//     renderItem={({item}) => (
//         <Text> {item.role} </Text>
//     )}
//      />
//   )
// }

// export default HomePage

// const styles = StyleSheet.create({})