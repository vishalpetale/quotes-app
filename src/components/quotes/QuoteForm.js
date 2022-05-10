import { useRef, useState } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  // const [isEntering, setIsEntering] = useState(false);
  const [isValid, setIsValid] = useState(true);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    } else {
      setIsValid(true);
    }

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const handleFormFocus = () => {
    // setIsEntering(true);
  };
  return (
    <>
      <Card>
        <form
          className={classes.form}
          onSubmit={submitFormHandler}
          onFocus={handleFormFocus}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          {!isValid && <p>Quote must not be empty.</p>}
          <div className={classes.actions}>
            <button className="btn">Add Quote</button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
