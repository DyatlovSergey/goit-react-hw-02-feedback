import React from "react";
import s from "./FeedbackForm.module.css";

const Statistics = ({
  // good,
  // neutral,
  // bad,
  options,
  totalFeedback,
  positiveFeedback,
}) => (
  <ul>
    <li className={s.statItem}>Good: {options.good}</li>
    <li className={s.statItem}>Neutral: {options.neutral}</li>
    <li className={s.statItem}>Bad: {options.bad}</li>
    <li className={s.statItem}>Total: {totalFeedback}</li>
    <li className={s.statItem}>Positive feedback: {positiveFeedback}%</li>
  </ul>
);

export default Statistics;
