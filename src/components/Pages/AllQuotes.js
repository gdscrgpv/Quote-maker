import React, {useEffect} from "react";
import QuoteList from "../quotes/QuoteList";
import useHttp from "../../hooks/use-http";
import { getAllQuotes } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import NoQuoteFound from "./NoQuoteFound";


const AllQuotes = () => {
  const {
    sendRequest,
    data: loadedQuote,
    status,
    error,
  } = useHttp(getAllQuotes, true);

useEffect(() => {
    sendRequest()
}, [sendRequest])

if(status==="pending"){
    return(
        <p className="centered"><LoadingSpinner/></p>
    )
}
if(error){
    <p className="centered">{error}</p>
}

if(status==="completed" && (!loadedQuote || loadedQuote.length===0)){
    return<NoQuoteFound/>
}
  return (
    <>
      <QuoteList quotes={loadedQuote} />
    </>
  );
};

export default AllQuotes;
