import { ScrollView, StyleSheet, Text, View } from "react-native";
import SensorCard from "../components/SensorCard";
import { useMission } from "../context/MissionContext";

export default function Dashboard() {
  const { mission } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>{mission.nome}</Text>
      <Text style={styles.subtitulo}>Painel operacional da missão</Text>

      <SensorCard
        titulo="Temperatura dos Sensores"
        valor={mission.sensorTemperatura}
        unidade="°C"
        critico={mission.sensorTemperatura > 80}
      />

      <SensorCard
        titulo="Energia da Nave"
        valor={mission.energia}
        unidade="%"
        critico={mission.energia < 30}
      />

      <SensorCard
        titulo="Comunicação"
        valor={mission.comunicacao}
        unidade="%"
        critico={mission.comunicacao < 50}
      />

      <SensorCard
        titulo="Estabilidade Orbital"
        valor={mission.estabilidade}
        unidade="%"
        critico={mission.estabilidade < 60}
      />

      <View style={styles.statusBox}>
        <Text style={styles.statusTexto}>
          Status geral:{" "}
          {mission.energia < 30 ||
          mission.comunicacao < 50 ||
          mission.estabilidade < 60 ||
          mission.sensorTemperatura > 80
            ? "Atenção necessária"
            : "Missão estável"}
        </Text>
      </View>
    </ScrollView>
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
  },
  subtitulo: {
    color: "#B8C1EC",
    marginBottom: 20,
  },
  statusBox: {
    backgroundColor: "#0B1026",
    padding: 18,
    borderRadius: 14,
    marginTop: 10,
    marginBottom: 30,
  },
  statusTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});