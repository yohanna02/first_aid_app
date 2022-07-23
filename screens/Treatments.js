import { Text, View, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import firstAidData from "../data";

export default function TreatmentScreen({ route, navigation }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const [filteredData] = firstAidData.filter((d) => d.id === route.params.id);
    setData(filteredData);
  }, []);

  return (
    <View>
      {data && (
        <>
            <View style={styles.imageContainer}>
                <Image source={data.image} style={styles.image} />
            </View>
            <View style={styles.textContainer}>
                <Text style={{color: "red"}}>Hello</Text>
            </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column"
  },
  imageContainer: {
    flex: 1,
    height: "10%"
  },
  image: {
    width: "100%",
    // height: 100
  },
  textContainer: {
    flex: 2
  }
});
