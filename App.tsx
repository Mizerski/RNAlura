import { SafeAreaView, StyleSheet, Text } from "react-native";
import Home from "./src/components/header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
});
