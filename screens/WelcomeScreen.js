import * as React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/little-lemon-logo.png")}
        />
        <Text style={styles.promo}>Mediterranean Bistro</Text>
      </View>
      <Pressable
        style={styles.subscribeButton}
        onPress={() => navigation.navigate("Subscribe")}
      >
        <Text style={styles.subscribeButtonText}>Newsletter</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
  },
  logo: {
    width: 300,
    height: 200,
    resizeMode: "contain",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  promo: {
    marginTop: 45,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    color: "#333",
  },
  subscribeButton: {
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  subscribeButtonText: {
    fontSize: 17,
    color: "#fff",
  },
});

export default WelcomeScreen;
