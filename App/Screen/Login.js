import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
// import {setUser} from "../../redux/actions/setUser" <-- need implementation

const Login = () => {
  const nav = useNavigation();
  // save informationin redux store
  // const dispatch = useDispatch()

  const [userid, setUserid] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Validation Error", "Please provide a username and password.");
    }
    try {
      const response = await fetch(
        `https://final-project-backend-9io5wpxd9-joshs-projects-9174c388.vercel.app/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );
      const data = await response.json();
      if (data.Success) {
        console.log(data);
        setUserid(String(data.User._id));
        // dispatch(setUser(data.User)) <-- need implementation
        nav.navigate("loading", { userid: data.User._id });
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };
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
            placeholder="Username"
            onChangeText={setUsername}
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
            onChangeText={setPassword}
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
          onPress={() => handleLogin()}
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
