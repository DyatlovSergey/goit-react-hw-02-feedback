import React from "react";
import s from "./FeedbackForm.module.css";

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => (
  <div className={s.buttonList}>
    <button type="button" className={s.button} onClick={onClickGood}>
      good
    </button>
    <button type="button" className={s.button} onClick={onClickNeutral}>
      neutral
    </button>
    <button type="button" className={s.button} onClick={onClickBad}>
      bad
    </button>
  </div>
);

export default FeedbackOptions;
