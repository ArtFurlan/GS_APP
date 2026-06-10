import { Stack } from "expo-router";
import { MissionProvider } from "../context/MissionContext";

export default function Layout() {
  return (
    <MissionProvider>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#0B1026" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
          contentStyle: { backgroundColor: "#050816" },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Central Espacial" }} />
        <Stack.Screen name="dashboard" options={{ title: "Dashboard" }} />
        <Stack.Screen name="alertas" options={{ title: "Alertas" }} />
        <Stack.Screen name="formulario" options={{ title: "Atualizar Dados" }} />
        <Stack.Screen name="configuracoes" options={{ title: "Configurações" }} />
      </Stack>
    </MissionProvider>
  );
}