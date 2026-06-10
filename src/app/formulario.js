import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useMission } from "../context/MissionContext";

export default function Formulario() {
  const { mission, atualizarMissao } = useMission();

  const [nome, setNome] = useState(mission.nome);
  const [sensorTemperatura, setSensorTemperatura] = useState(String(mission.sensorTemperatura));
  const [energia, setEnergia] = useState(String(mission.energia));
  const [comunicacao, setComunicacao] = useState(String(mission.comunicacao));
  const [estabilidade, setEstabilidade] = useState(String(mission.estabilidade));

  function salvar() {
    if (!nome.trim()) {
      Alert.alert("Erro", "O nome da missão é obrigatório.");
      return;
    }

    const temp = Number(sensorTemperatura);
    const ene = Number(energia);
    const com = Number(comunicacao);
    const est = Number(estabilidade);

    if (isNaN(temp) || isNaN(ene) || isNaN(com) || isNaN(est)) {
      Alert.alert("Erro", "Todos os valores numéricos devem ser válidos.");
      return;
    }

    if (ene < 0 || ene > 100 || com < 0 || com > 100 || est < 0 || est > 100) {
      Alert.alert("Erro", "Energia, comunicação e estabilidade devem estar entre 0 e 100.");
      return;
    }

    atualizarMissao({
      nome,
      sensorTemperatura: temp,
      energia: ene,
      comunicacao: com,
      estabilidade: est,
    });

    Alert.alert("Sucesso", "Dados da missão atualizados.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atualizar Dados da Missão</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome da missão"
        placeholderTextColor="#8E99C7"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Temperatura dos sensores"
        placeholderTextColor="#8E99C7"
        value={sensorTemperatura}
        onChangeText={setSensorTemperatura}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Energia entre 0 e 100"
        placeholderTextColor="#8E99C7"
        value={energia}
        onChangeText={setEnergia}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Comunicação entre 0 e 100"
        placeholderTextColor="#8E99C7"
        value={comunicacao}
        onChangeText={setComunicacao}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Estabilidade entre 0 e 100"
        placeholderTextColor="#8E99C7"
        value={estabilidade}
        onChangeText={setEstabilidade}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.textoBotao}>Salvar dados</Text>
      </TouchableOpacity>
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
  input: {
    backgroundColor: "#111A3A",
    color: "#FFFFFF",
    borderRadius: 12,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#263B80",
  },
  botao: {
    backgroundColor: "#64FFDA",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },
  textoBotao: {
    color: "#050816",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});