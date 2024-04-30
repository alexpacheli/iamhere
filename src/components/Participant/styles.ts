import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    height: 56,
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    width: 42,
    height: 42,
    borderRadius: 5,
    backgroundColor: "#E23C44",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
});
