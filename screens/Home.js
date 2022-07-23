import { FlatList, StyleSheet, View, Pressable } from "react-native"
import data from "../data"
import List from "../components/List";

export default function HomeScreen({ navigation }) {
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={({item}) => (
                    <Pressable onPress={() =>
                        navigation.navigate('Treatment', { id: item.id })
                      }>
                        <List
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                        />
                    </Pressable>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16
    }
});