import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../../components/comments/Comments";
import HighlightedQuotes from "../../components/quotes/HighlightedQuote";
import useHttp from "../../hooks/use-http";
import { getSingleQuote } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const SingleQuote = () => {
  const {
    sendRequest,
    data: loadedQuote,
    error,
    status,
  } = useHttp(getSingleQuote, true);
  const match = useRouteMatch();
  const params = useParams();
//   const quote = DUMMY_QUOTE.find((quote) => quote.id === params.quoteId);
  const { quoteId } = params;
  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <><h2>I have nothing to say! </h2>
    <p> -- {loadedQuote.author}</p>
    </>;
  }
  return (
    <div>
      <HighlightedQuotes text={loadedQuote.text} author={loadedQuote.author} />
      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link className="btn" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default SingleQuote;
