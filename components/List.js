import { View, Image, Text, StyleSheet } from "react-native";

export default function List(props) {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image}/>
            <Text style={styles.text}>{props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginBottom: 10,
        alignItems: "center",
        borderBottomColor: "#898d78",
        borderBottomWidth: 0.5,
        paddingBottom: 5
    },  
    image: {
        width: 60,
        height: 60
    },
    text: {
        color: "red",
        marginLeft: "10%",
        fontSize: 20
    }
});