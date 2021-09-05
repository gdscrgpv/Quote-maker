import { useRef, useState } from "react";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import { Prompt } from "react-router";

const QuoteForm = (props) => {
  const [isEntering, SetIsEntering] = useState(false);
  const [isEmpty, setIsEmpty] = useState(true);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
     
    if(enteredText.length===0){
      setIsEmpty(true)
      return;
    }

    // optional: Could validate here

    if(enteredText.length>0){
      setIsEmpty(false);
    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }
  }

  const onFocusHandler = () => {
    SetIsEntering(true);
  };

  const isEntered = () => {
    SetIsEntering(false);
  };

  return (
    <>
      <Card>
        <Prompt
          when={isEntering}
          message={(location) =>
            "Are you sure want to exit! All your data will be lost :("
          }
        />
        <form
          onFocus={onFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
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
          {isEmpty && <p>*This feild is required</p> }
          <div className={classes.actions}>
            <button onClick={isEntered} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default QuoteForm;
