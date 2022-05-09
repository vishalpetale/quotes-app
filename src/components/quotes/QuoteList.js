import { useSearchParams } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const isSortingAscending = searchParams.get("sort") === "asc";

  const quotes = sortQuotes(props.quotes, isSortingAscending);

  const handleSorting = () => {
    setSearchParams({
      sort: isSortingAscending ? "desc" : "asc",
    });
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={handleSorting}>{`Sort ${
          isSortingAscending ? "Descending" : "Ascending"
        }`}</button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </>
  );
};

export default QuoteList;
