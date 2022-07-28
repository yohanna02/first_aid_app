import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import firstAidData from "../data";

export default function TreatmentScreen({ route }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const [filteredData] = firstAidData.filter((d) => d.id === route.params.id);
    setData(filteredData);
  }, []);

  return (
    <ScrollView>
      {data && (
        <View>
          <View style={styles.imageContainer}>
            <Image source={data.image} style={styles.image} />
          </View>
          <View style={styles.treatmentContainer}>
              {data.treatments.map((treatment, index) => (
                <View key={index}>
                  { treatment.heading === "" ? <Text></Text> : <Text style={styles.heading}>{index + 1}. {treatment.heading}</Text>}
                  <Text style={styles.treatmentText}>{ treatment.treatment }</Text>
                </View>
              ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {

  },  
  imageContainer: {
  },
  image: {
    width: "100%",
    height: 250
  },
  treatmentContainer: {
  },
  heading: {
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 30
  },
  treatmentText: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    lineHeight: 25
  }
});
