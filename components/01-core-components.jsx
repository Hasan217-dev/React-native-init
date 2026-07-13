import { View, Text, Image, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text numberOfLines={7}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit ipsam
        eveniet ut ducimus labore id, aliquid quisquam enim reprehenderit
        laboriosam exercitationem corrupti illum, facere odit excepturi fuga
        expedita pariatur repellat, quas est! Sed similique a suscipit dolores.
        Hic, a qui?quisquam enim reprehenderit laboriosam exercitationem
        corrupti illum, facere odit excepturi fuga expedita pariatur repellat,
        quas est! Sed similique a suscipit dolores. Hic, a qui
      </Text>

      {/* remote image form internet */}
      <Image
        source={{
          uri: "https://chaicode.com/assets/hitesh-piyush-dark-fpMoT6Mp.webp",
        }}
        width={300}
        height={300}
        blurRadius={0.3}
      />

      {/* iNPUT FIELD */}
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"red"}
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          margin: 10,
          marginTop: 30,
          fontSize: 20,
        }}
      />

      <Pressable
        onPress={() => alert("Button Preessed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "red" : "yellow",
        })}
        hitSlop={{
          top: 10,
          bottom: 10,
          left: 10,
          right: 10,
        }}
      >
        {({ pressed }) =>
          pressed ? <Text>Pressing</Text> : <Text>Press me</Text>
        }
      </Pressable>
    </View>
  );
}
