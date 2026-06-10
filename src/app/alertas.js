import { StyleSheet, Text, View } from "react-native";
import AlertCard from "../components/AlertCard";
import { useMission } from "../context/MissionContext";

export default function Alertas() {
  const { mission } = useMission();

  const alertas = [];

  if (mission.energia < 30) {
    alertas.push("Energia abaixo de 30%. Risco para os sistemas principais.");
  }

  if (mission.sensorTemperatura > 80) {
    alertas.push("Temperatura acima de 80°C. Possível superaquecimento.");
  }

  if (mission.comunicacao < 50) {
    alertas.push("Comunicação abaixo de 50%. Sinal instável com a base.");
  }

  if (mission.estabilidade < 60) {
    alertas.push("Estabilidade orbital abaixo de 60%. Correção recomendada.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Alertas Automáticos</Text>

      {alertas.length === 0 ? (
        <Text style={styles.semAlerta}>Nenhum alerta crítico no momento.</Text>
      ) : (
        alertas.map((alerta, index) => (
          <AlertCard key={index} mensagem={alerta} />
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    padding: 20,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  semAlerta: {
    color: "#64FFDA",
    fontSize: 16,
    backgroundColor: "#0B1026",
    padding: 16,
    borderRadius: 12,
  },
});