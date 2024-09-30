import { taxonSearchResultStyles } from "@/styles/documents/TaxonSearchResults";
import { Image, Text, View } from "react-native";

interface Taxon {
  taxon_name: string;
  photo_img: string;
  // Add other fields if necessary
}

type TaxonSearchResultProps = {
  taxon: Taxon;
};

const TaxonSearchResult: React.FC<TaxonSearchResultProps> = ({ taxon }) => {
  return (
    <View style={taxonSearchResultStyles.taxonResultContainer}>
      <Image
        style={taxonSearchResultStyles.taxonResultImage}
        source={{
          uri: taxon.photo_img,
        }}/>
      <Text style={taxonSearchResultStyles.taxonResultText} numberOfLines={1}>{taxon.taxon_name}</Text>
    </View>
  )
}

export default TaxonSearchResult;