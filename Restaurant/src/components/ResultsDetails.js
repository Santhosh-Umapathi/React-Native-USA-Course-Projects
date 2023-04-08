import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultsDetails = ({ navigation, results }) => {
  return (
    <View style={styles.containerView}>
      <Image source={{ uri: results.image_url }} style={styles.imageStyle} />
      <Text style={styles.text}>{results.name}</Text>
      <Text style={styles.subHeader}>
        {results.rating} Stars, {results.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    margin: 10,
  },
  text: {
    fontSize: 20,
  },
  subHeader: {
    color: "gray",
  },
  imageStyle: {
    height: 130,
    width: 250,
    borderRadius: 10,
  },
});

export default ResultsDetails;
