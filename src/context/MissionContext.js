import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";

const MissionContext = createContext();

export function MissionProvider({ children }) {
  const [mission, setMission] = useState({
    nome: "Orbital Climate Intelligence",
    sensorTemperatura: 42,
    energia: 76,
    comunicacao: 88,
    estabilidade: 91,
  });

  const [config, setConfig] = useState({
    modoEscuro: true,
    notificacoes: true,
  });

  useEffect(() => {
    carregarDados();
  }, []);

  useEffect(() => {
    salvarDados();
  }, [mission, config]);

  async function carregarDados() {
    try {
      const missionSalva = await AsyncStorage.getItem("mission");
      const configSalva = await AsyncStorage.getItem("config");

      if (missionSalva) setMission(JSON.parse(missionSalva));
      if (configSalva) setConfig(JSON.parse(configSalva));
    } catch (error) {
      console.log("Erro ao carregar dados:", error);
    }
  }

  async function salvarDados() {
    try {
      await AsyncStorage.setItem("mission", JSON.stringify(mission));
      await AsyncStorage.setItem("config", JSON.stringify(config));
    } catch (error) {
      console.log("Erro ao salvar dados:", error);
    }
  }

  function atualizarMissao(novosDados) {
    setMission(novosDados);
  }

  function atualizarConfig(novaConfig) {
    setConfig(novaConfig);
  }

  return (
    <MissionContext.Provider
      value={{ mission, config, atualizarMissao, atualizarConfig }}
    >
      {children}
    </MissionContext.Provider>
  );
}

export function useMission() {
  return useContext(MissionContext);
}