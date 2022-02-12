import React from "react";
import s from "./FeedbackForm.module.css";

const Statistics = ({ good, neutral, bad }) => (
  <div>
    <p>Statistics </p>
    <span className={s.statItem}>Good: {good}</span>
    <span className={s.statItem}>Neutral:{neutral}</span>
    <span className={s.statItem}>Bad:{bad}</span>
  </div>
);

export default Statistics;
