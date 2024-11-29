import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const nav = useNavigation();
  // save informationin redux store
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#0F172A",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
      }}
    >
      <Text
        onPress={() => nav.navigate("home")}
        style={{
          fontSize: 20,
          position: "absolute",
          top: 0,
          padding: 40,
          color: "white",
          alignSelf: "left",
        }}
      >
        Back
      </Text>

      <View
        style={{
          width: "100%",
          padding: 30,
          backgroundColor: "tranparent",
          borderWidth: 2,
          borderColor: "transparent",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Login to Einco
        </Text>
        <View style={{ width: "100%", marginBottom: 20 }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#aaa"
            style={{
              backgroundColor: "none",
              color: "white",
              fontSize: 16,
              borderWidth: 2,
              borderColor: "#85C898",
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginBottom: 15,
            }}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#aaa"
            secureTextEntry
            style={{
              backgroundColor: "none",
              color: "white",
              fontSize: 16,
              borderWidth: 2,
              borderColor: "#85C898",
              borderRadius: 10,
              paddingVertical: 15,
              paddingHorizontal: 20,
              marginBottom: 15,
            }}
          />
          <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: 20 }}>
            <Text style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
        onPress={() => nav.navigate("budgets")}
          style={{
            backgroundColor: "#85C898",
            paddingVertical: 15,
            paddingHorizontal: 50,
            borderRadius: 25,
            marginBottom: 20,
            width: "100%",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#0F172A", fontSize: 16, fontWeight: "600" }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{ color: "white", fontSize: 14, fontWeight: "500" }}>
            Don't have an account?{" "}
            <Text
              style={{ color: "#85C898", fontWeight: "bold" }}
              onPress={() => nav.navigate("signup")}
            >
              Sign up
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
