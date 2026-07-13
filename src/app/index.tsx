import {View , Text , Image, TextInput} from "react-native"
import {useState} from "react"


export default function App() {
  const [name , setName] = useState("")
  return (
    <View>
      <Text numberOfLines={7}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam eveniet ut ducimus labore id, aliquid quisquam enim reprehenderit laboriosam exercitationem corrupti illum, facere odit excepturi fuga expedita pariatur repellat, quas est! Sed similique a suscipit dolores. Hic, a qui?quisquam enim reprehenderit laboriosam exercitationem corrupti illum, facere odit excepturi fuga expedita pariatur repellat, quas est! Sed similique a suscipit dolores. Hic, a qui</Text>


     {/* remote image form internet */}
      <Image
      source={{
        uri : "https://chaicode.com/assets/hitesh-piyush-dark-fpMoT6Mp.webp"
      }}
      width={300}
      height={300}
      blurRadius={0.3}
      />
      
      <TextInput 
      placeholder="Enter your name"
      onChangeText={setName}
      placeholderTextColor={"red"}
      />
      
    </View>
  );
}
