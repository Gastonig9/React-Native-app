import { StyleSheet, View, Text } from "react-native";

export default function Header({ titleHeader }) {
    return(
        <View style={styles.headerContain}>
            <Text style={styles.headerText}>{titleHeader}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    headerContain: {
        width: "100%",
        padding: 25,
        marginBottom: 10,
        backgroundColor: "#3FA7D6",
        
    },
    headerText: {
        textAlign: "center",
        fontSize: 25,
        color: "white"
      },
})