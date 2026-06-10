import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Central de Monitoramento</Text>
      <Text style={styles.subtitulo}>Missões Espaciais</Text>

      <View style={styles.menu}>
        <Link href="/dashboard" style={styles.botao}>Dashboard</Link>
        <Link href="/alertas" style={styles.botao}>Alertas</Link>
        <Link href="/formulario" style={styles.botao}>Atualizar Dados</Link>
        <Link href="/configuracoes" style={styles.botao}>Configurações</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#050816",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  titulo: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitulo: {
    color: "#64FFDA",
    fontSize: 20,
    marginBottom: 40,
  },
  menu: {
    width: "100%",
    gap: 16,
  },
  botao: {
    backgroundColor: "#1B2A59",
    color: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});