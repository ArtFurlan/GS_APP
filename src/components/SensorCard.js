import { StyleSheet, Text, View } from "react-native";

export default function SensorCard({ titulo, valor, unidade, critico }) {
  return (
    <View style={[styles.card, critico && styles.cardCritico]}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.valor}>
        {valor}
        {unidade}
      </Text>
      <Text style={styles.status}>{critico ? "Nível crítico" : "Normal"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111A3A",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#263B80",
  },
  cardCritico: {
    borderColor: "#FF4D4D",
    backgroundColor: "#35151F",
  },
  titulo: {
    color: "#B8C1EC",
    fontSize: 16,
  },
  valor: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 6,
  },
  status: {
    color: "#64FFDA",
  },
});