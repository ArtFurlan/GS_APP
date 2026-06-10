import { StyleSheet, Switch, Text, View } from "react-native";
import { useMission } from "../context/MissionContext";

export default function Configuracoes() {
  const { config, atualizarConfig } = useMission();

  function alterarModoEscuro(valor) {
    atualizarConfig({
      ...config,
      modoEscuro: valor,
    });
  }

  function alterarNotificacoes(valor) {
    atualizarConfig({
      ...config,
      notificacoes: valor,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>

      <View style={styles.card}>
        <Text style={styles.texto}>Modo escuro</Text>
        <Switch value={config.modoEscuro} onValueChange={alterarModoEscuro} />
      </View>

      <View style={styles.card}>
        <Text style={styles.texto}>Notificações de alerta</Text>
        <Switch value={config.notificacoes} onValueChange={alterarNotificacoes} />
      </View>

      <Text style={styles.info}>
        As configurações são salvas localmente usando AsyncStorage.
      </Text>
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
  card: {
    backgroundColor: "#111A3A",
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#263B80",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  texto: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  info: {
    color: "#B8C1EC",
    marginTop: 20,
    fontSize: 14,
  },
});