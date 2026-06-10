import { StyleSheet, Text, View } from "react-native";

export default function AlertCard({ mensagem }) {
  return (
    <View style={styles.card}>
      <Text style={styles.icone}>⚠️</Text>
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#35151F",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#FF4D4D",
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icone: {
    fontSize: 22,
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 15,
    flex: 1,
  },
});