import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "ios" ? 70 : 40,
  },
  eventName: {
    fontWeight: "bold",
    color: "#FDFCFE",
    fontSize: 24,
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 8,
    fontSize: 16,
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
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginTop: 36,
    marginBottom: 30,
    alignItems: "center",
    paddingRight: 8,
    borderRadius: 5,
    backgroundColor: "#1F1E25",
    width: "100%",
    flexDirection: "row",
  },
  listEmptyText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },
});
