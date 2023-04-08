import React, {useState} from 'react';
import {
  Text,
  ScrollView,
} from "react-native";
//Hooks
import useResults from "../hooks/useResults";
//Components
import ResultsList from "../components/ResultsList";
import SearchBar from "../components/SearchBar";

const HomeScreen = () =>
{
    const [searchText, setSearchText] = useState('');
    const [searchAPI, results, error] = useResults(); //Using Custom Hooks

  //Filter API with price
  const filterByPrice = (price) =>
  {
    return results.filter(eachResult => {
      return eachResult.price === price;
    })
  };
  

  if (!results)
  {
    return (
      <ActivityIndicator
        size="large"
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      />
    );
  };
    

    return (
      <>
        <SearchBar
          txt={searchText}
          onChangeTxt={setSearchText} //sending function through prop to child to manage state
          onSubmitTxt={(searchTerm) => searchAPI(searchTerm)}
          //onChangeTxt={(newText) => {setSearchText(newText);}} //alternative
          //onSubmitTxt={()=>{searchAPI()}} //alternative
        />
        <ScrollView>
          {/* <Text style={{ marginLeft:5 }}>
            We have found {results.length} results
          </Text> */}
          {error !== "" ? <Text>Something went wrong</Text> : null}

          <ResultsList
            title="Cost Effective"
            resultsFiltered={filterByPrice("$")}
          />
          <ResultsList
            title="Bit Expensive"
            resultsFiltered={filterByPrice("$$")}
          />
          <ResultsList
            title="Big Spender"
            resultsFiltered={filterByPrice("$$$")}
          />
        </ScrollView>
      </>
    );
};


export default HomeScreen;