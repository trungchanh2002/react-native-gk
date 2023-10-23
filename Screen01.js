import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function Screen01({ navigation }) {
  const userAccounts = [
    { email: "chanh", password: "123" },
    { email: "user2@example.com", password: "password2" },
    { email: "user3@example.com", password: "password3" },
    { email: "user4@example.com", password: "password4" },
    { email: "user5@example.com", password: "password5" },
  ];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleContinue = () => {
    const foundUser = userAccounts.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      navigation.navigate("Screen02");
    } else {
      alert("Email hoặc mật khẩu không đúng");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("./assets/desktop.png")} style={styles.desktop} />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hello Again!</Text>
      <Text>Enter your email and password</Text>

      <View style={styles.container1}>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Nhập email"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Nhập mật khẩu"
          secureTextEntry={true}
          style={styles.input}
        />
        <Text style={styles.textForgot}>Forgot Password</Text>
        <TouchableOpacity onPress={handleContinue}>
          <Text style={styles.btnContinue}>Continue</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container2}>
        <Image source={require("./assets/twitter.png")} style={styles.icon} />
        <Image source={require("./assets/facebook.png")} style={styles.icon} />
        <Image source={require("./assets/shopee.png")} style={styles.icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container1: {},
  container2: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 7,
  },
  desktop: {
    height: 100,
    width: 100,
  },
  btnContinue: {
    marginTop: 20,
    width: 300,
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: "#2C7AA8",
    textAlign: "center",
    lineHeight: 47,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Arial",
  },
  input: {
    marginTop: 20,
    height: 50,
    width: 300,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
    paddingLeft: 10,
  },
  textForgot: {
    textAlign: "right",
    marginTop: 10,
    textDecorationLine: "underline",
    color: "blue",
  },
});

export default Screen01;
