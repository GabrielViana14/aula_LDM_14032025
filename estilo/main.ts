import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  contato: { flexDirection: "row", padding: 10, borderBottomWidth: 1 },
  foto: { width: 50, height: 50, borderRadius: 25 },
  semFoto: { width: 50, height: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#ddd", borderRadius: 25 },
  info: { marginLeft: 10 },
  nome: { fontWeight: "bold" },
  botaoEditar: { backgroundColor: "blue", padding: 10, marginTop: 20, borderRadius: 5, alignItems: "center" },
  textoBotao: { color: "white", fontSize: 16 },
  text: { padding: 20, fontSize: 16, color: "black",},
});

export default styles