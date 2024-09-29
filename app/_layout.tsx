import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="search" />
      <Stack.Screen name="taxon-description" />
      <Stack.Screen name="generate-key" />
    </Stack>
  );
}
