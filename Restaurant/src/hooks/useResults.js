import yelpAPI from "../api/yelpAPI";
import { useEffect, useState } from "react";

//Exporting hook directly as a function with array
export default () =>
{
    const [results, setResults] = useState([]);
    const [error, setError] = useState("");

    //Search Yelp API
    const searchAPI = async (searchTerm) => {
        try {
          const response = await yelpAPI.get("/search",
            {
              params:
              {
                limit: 50,
                term: searchTerm,
                location: "newyork",
              },
            });
            setError("");
            setResults(response.data.businesses);
        }
        catch (error) { setError(error); }
    };

    //Calling only once during initial screen mount
    useEffect(() =>
    {
        searchAPI('Pasta')
    }, [])

    return [searchAPI, results, error];
    

};
