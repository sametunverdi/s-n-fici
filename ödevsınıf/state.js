import React, {useState} from "react";
import { StyleSheet, View,Button, Text, SafeAreaView } from "react-native";

const App = () => {
  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(29);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <SafeAreaView style={StyleSheet.container}>
      <Button
        title={isVisible ? "Gizle" : "Göster"}
        onPress={() => setIsVisible(!isVisible)}
      />

      {isVisible && (
        <>
          <Text>İsim: {name}</Text>
          <Text>Yaş: {age}</Text>
          <Button title="İsmi Değiştir" onpress={() => setName("Ahmet")}/>
          <Button title="Yaşı Değiştir" onpress={() => setAge(30)} />
        </>
      )}
    </SafeAreaView>

  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifycontent: "center",
    alignItems: "center",
  },
  text: {
    fontsize: 20,
  
  },
});
    