import { Fragment } from "react";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { useHistory, useLocation } from "react-router-dom";

const sortQuote = (quotes, newQuote) => {
  return quotes.sort((quoteA, quoteB) => {
    if (newQuote) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const queryIsNew = queryParams.get("sort") === "new";
  const sortedQuote = sortQuote(props.quotes, queryIsNew);

  const changeSortingHandler = () => {
    history.push({
      pathname:location.pathname,
      search:`?sort=${(queryIsNew ? "old" : "new")}`
    })
    // history.push("/quotes?sort=" + (queryIsNew ? "old" : "new"));
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort By {queryIsNew ? "old" : "new"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuote.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
