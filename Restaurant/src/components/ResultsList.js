import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ResultsDetails from "../components/ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({ title, resultsFiltered, navigation }) => {
  if (!resultsFiltered) {
    return null;
  }

  return (
    <View style={styles.containerView}>
      <Text style={styles.text}>{title}</Text>
      <Text style={{ marginLeft: 10 }}>
        Results found: {resultsFiltered.length}
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={resultsFiltered}
        keyExtractor={(key) => key.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Results", { id: item.id })}
            >
              <ResultsDetails results={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    marginBottom: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    marginLeft: 10,
  },
});

export default withNavigation(ResultsList);
