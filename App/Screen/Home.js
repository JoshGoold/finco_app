import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Home = () => {
  const logo = require("../../assets/logo.webp");
  const nav = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: "#0F172A", flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={logo}
          style={{
            width: 250,
            height: 250,
            resizeMode: "contain",
            borderRadius: 10,
            marginBottom: 20,
          }}
        />
        <Text
          style={{
            color: "#85C898",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Welcome to Einco
        </Text>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            textAlign: "center",
            marginBottom: 30,
          }}
        >
          Manage, visualize, and track your finances effortlessly.
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <TouchableOpacity
            onPress={() => nav.navigate("signup")}
            style={{
              backgroundColor: "transparent",
              paddingVertical: 15,
              paddingHorizontal: 50,
              borderColor: "#85C898",
              borderWidth: 2,
              borderRadius: 25,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#ffffff", fontSize: 16, fontWeight: "600" }}>
              Sign up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => nav.navigate("login")}
            style={{
              backgroundColor: "#85C898",
              paddingVertical: 15,
              paddingHorizontal: 50,
              borderRadius: 25,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: "#0F172A", fontSize: 16, fontWeight: "600" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
