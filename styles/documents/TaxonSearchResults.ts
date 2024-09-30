import { StyleSheet } from "react-native";

export const taxonSearchResultStyles = StyleSheet.create({
    taxonResultContainer: {
        flex: 1,
        minWidth: 120,  // Min width of each grid item
        aspectRatio: 1,
        backgroundColor: '#f0f0f0',
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    taxonResultImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    taxonResultText: {
        fontFamily: 'Montserrat',
        fontSize: 12,
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: 2,
        backgroundColor: '#0009',
        width: '100%',
        color: '#fff',
    }
})