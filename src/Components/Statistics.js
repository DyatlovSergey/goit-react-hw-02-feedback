import React from "react";
import s from "./FeedbackForm.module.css";

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => (
  <div>
    <span className={s.statItem}>Good: {good}</span>
    <span className={s.statItem}>Neutral: {neutral}</span>
    <span className={s.statItem}>Bad: {bad}</span>
    <span className={s.statItem}>Total: {totalFeedback}</span>
    <span className={s.statItem}>Positive feedback: {positiveFeedback}%</span>
  </div>
);

export default Statistics;
