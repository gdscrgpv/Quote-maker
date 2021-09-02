import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return (
    <li className={classes.item}>
      <h4>{props.text}</h4>
    </li>
  );
};

export default CommentItem;
