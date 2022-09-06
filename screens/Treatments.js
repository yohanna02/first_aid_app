import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import * as Speech from "expo-speech";
import firstAidData from "../data";

export default function TreatmentScreen({ route }) {
  const [data, setData] = useState(null);
  let playIndex = 0;

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const [filteredData] = firstAidData.filter((d) => d.id === route.params.id);
    setData(filteredData);

    return () => {
      Speech.stop();
    };
  }, []);

  function stop() {
    Speech.stop();
    setIsPlaying(false);
  }

  function play() {
    if (data.treatments[playIndex].heading !== "") {
      Speech.speak(`${playIndex + 1}. ${data.treatments[playIndex].heading}`, {
        onStart() {
          setIsPlaying(true);
        },
        onError() {
          alert("An Error occured While playing");
        }
      });
    }

    Speech.speak(data.treatments[playIndex].treatment, {
      onError() {
        alert("An Error occured While playing");
      }
    });

    playIndex++;
    console.log(playIndex);
    if (playIndex > data.treatments.length - 1) {
      playIndex = 0;
      setIsPlaying(false);
      return;
    }
    play();
  }

  return (
    <>
      <ScrollView>
        {data && (
          <View>
            <View style={styles.imageContainer}>
              <Image source={data.image} style={styles.image} />
            </View>
            <View style={styles.treatmentContainer}>
              {data.treatments.map((treatment, index) => (
                <View key={index}>
                  {treatment.heading === "" ? (
                    <Text></Text>
                  ) : (
                    <Text style={styles.heading}>
                      {index + 1}. {treatment.heading}
                    </Text>
                  )}
                  <Text style={styles.treatmentText}>
                    {treatment.treatment}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
      {isPlaying ? (
        <Button title="Stop" style={styles.button} onPress={stop} />
      ) : (
        <Button
          title={isPlaying ? "Playing..." : "Listen"}
          style={styles.button}
          onPress={play}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {},
  image: {
    width: "100%",
    height: 250,
  },
  treatmentContainer: {},
  heading: {
    marginTop: 10,
    paddingLeft: 10,
    fontSize: 30,
  },
  treatmentText: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    lineHeight: 25,
  },
  button: {
    position: "absolute",
    flex: 0.1,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
});
