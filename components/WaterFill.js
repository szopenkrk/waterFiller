import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import * as style from './style'; 

export default function WatterFill() {
  const [watter, setWatter] = useState("");
 
  return (
    <>
    <View style={styles.container}>
      <div className={[style.cartoon, style.hb, style.thin-border]}>
        <div className={[style.water-lines, style.ha]}></div>
        <div className={[style.bottle, style.b, style.ha, style.hb]}></div>
        <div className={style.neck}></div>
        <div className={[style.cap, style.b, style.ha]}></div>
      </div>
      <TouchableOpacity style={styles.addWater}>
        <Text style={styles.waterText}>Add water</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  addWater: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});