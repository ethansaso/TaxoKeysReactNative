import { Stack } from "expo-router";

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ title: "TaxoKeys" }} />
        <Stack.Screen name="search" options={{ title: "Search Taxa" }} />
        <Stack.Screen name="taxon-description" options={{ title: "Taxon Description" }} />
        <Stack.Screen name="generate-key" options={{ title: "Generate Key" }} />
      </Stack>
  );
}