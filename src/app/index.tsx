import { Pressable, StyleSheet, Text, TextInput, View  } from 'react-native'

const HomePage = () => {
  return (
    <View style={{flex : 1 , justifyContent : "flex-end" , padding : 42}}>
      <Text style={{fontSize : 24 , fontWeight : "bold" , marginBottom : 24}}>Login Page</Text>

      <TextInput 
      placeholder='Email'
      style={{
        borderWidth : 1,
        borderRadius : 10,
        borderColor : '#ddd',
        padding : 14,
        fontSize : 18,
        marginBottom : 12
      }}
      />

       <TextInput 
      placeholder='Password'
      secureTextEntry
      style={{
        borderWidth : 1,
        borderRadius : 10,
        borderColor : '#ddd',
        padding : 14,
        fontSize : 18,
        marginBottom : 12
      }}
      />

      <Pressable
      style={{
        backgroundColor : "#6c63ff",
        padding : 16,
        borderRadius : 12,
        alignItems : "center"
      }}
      >
     <Text
     style={{color : "white" , fontSize : 16 , fontWeight : "bold"}}
     >Login</Text>
      </Pressable>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({});