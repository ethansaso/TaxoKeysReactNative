import { Text, View } from "react-native";
import TKButton from "@/components/baubles/TKButton";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";

const Index = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('@/assets/fonts/Montserrat.ttf'),
    'Montserrat-Italic': require('@/assets/fonts/Montserrat Italic.ttf'),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Return a loading state while the font is loading
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          gap: 10
        }}
      >
        <TKButton
          title="Search Taxa"
          color="warning"
          onPress={() => router.push('/search')}
        />
        <TKButton
          title="Generate TaxoKey"
          color="success"
          onPress={() => router.push('/generate-key')}
        />
      </View>
    </View>
  );
}

export default Index;