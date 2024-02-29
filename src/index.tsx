import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import logo from "../assets/icon.png";
import colors from "./styles/colors";
import { loadHeader } from "./components/services/loadData";

const Header = () => {
  const [header, setHeader] = useState({ title: "", subtitle: "" });

  useEffect(() => {
    setHeader(loadHeader());
  }, []);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Text style={styles.title}>{header.title}</Text>

      <Text style={styles.subtitle}>{header.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
  },
  logo: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    lineHeight: 42,
    color: colors.heading,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 15,
    color: colors.heading,
  },
});

export default Header;
