import { Alert, Dimensions, FlatList, ScrollView, Text, View } from "react-native";
import { Button, Header, SearchBar } from "@rneui/base";
import TKHeader from "@/components/baubles/TKHeader";
import { useState } from "react";
import axios from "axios";
import TaxonSearchResult from "@/components/documents/TaxonSearchResult";
import { indexStyles } from "@/styles/stacks/index.styles";

interface Taxon {
  taxon_name: string;
  photo_img: string;
  // Add other fields if necessary
}

const SearchPage = () => {
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState<Taxon[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://taxokeys.org/api/taxa?taxon_name=${value}`);
      setSearchResults(response.data.results); // Axios automatically parses the response
      console.log(response.data);
    } catch (error) {
      Alert.alert("Error", "Unable to fetch data");
      console.error(error);
    }
  };

  // Determine screen width dynamically for responsive layout
  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      <View style={{flex: 1}}>
        <SearchBar
          containerStyle={{width: '100%', backgroundColor: 'unset', borderWidth: 0, padding: 0}}
          lightTheme
          onChangeText={newVal => setValue(newVal)}
          onBlur={handleSearch}
          placeholder="Search for a taxon..."
          inputStyle={{color: '#888', fontFamily: 'Montserrat'}}
          value={value}
        />
        {searchResults && (
          <FlatList
            data={searchResults}
            keyExtractor={(item, index) => index.toString()}  // Key for each item
            numColumns={Math.floor(screenWidth / 124)} // Number of columns based on screen width and 200px min width
            renderItem={({ item }) => (
              <TaxonSearchResult taxon={item} />
            )}
            contentContainerStyle={indexStyles.gridContainer}
          />
        )}
      </View>
    </>
  );
}

export default SearchPage;
