import { Text, View } from "react-native";
import TKButton from "@/components/baubles/TKButton";
import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { Header } from "@rneui/base";

const IndexArchived = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat': require('@/assets/fonts/Montserrat.ttf'),
    'Montserrat-Italic': require('@/assets/fonts/Montserrat Italic.ttf'),
  });

  const router = useRouter();

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Return a loading state while the font is loading
  }

  return (
    <>
      <Header
        leftComponent={{ icon: 'menu', color: '#000' }}
        containerStyle={{ backgroundColor: 'white' }}
        centerComponent={{ text: 'Search', style: { color: '#000', fontSize: 18, fontFamily: 'Montserrat', fontWeight: 700 } }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: "#f4f3ef"
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
          }}
        >
          <TKButton
            title="Search Taxa"
            color="warning"
            onPress={() => router.push('/generate-key')}
          />
          <TKButton
            title="Generate TaxoKey"
            color="success"
            onPress={() => router.push('/generate-key')}
          />
        </View>
      </View>
    </>
  );
}

export default IndexArchived;