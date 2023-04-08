import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({txt, onChangeTxt, onSubmitTxt}) =>
{

    return (
      <View style={styles.containerView}>
        <Ionicons
          name="ios-search"
          size={40}
          style={{ alignSelf: "center", marginHorizontal: 7 }}
        />

        <TextInput
            style={{ fontSize: 20, flex: 1 }}
            placeholder="Search Restaurant"
            value={txt}
            onChangeText={onChangeTxt} //Receiving prop from parent screen
            onEndEditing={() => {onSubmitTxt()}}
            //onEndEditing={onSubmitTxt} same equivalent for above code
        />
            
      </View>
    );
};

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: "lightgrey",
    height: 50,
    flexDirection: "row",
    margin: 10,
    borderRadius: 10,
  },
});

export default SearchBar;