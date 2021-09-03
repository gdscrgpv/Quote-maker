import React from "react";
import { Link } from "react-router-dom";

const NoQuoteFound = () => {
  return (
    <>
      <div className="centered">
        <h2>No Quotes Found!</h2>
      </div>
      <div className="centered">
        <Link className="btn" to="/new-quote">
          Add a quote
        </Link>
      </div>
    </>
  );
};

export default NoQuoteFound;
