import React from "react";
import s from "./FeedbackForm.module.css";
import Statistics from "./Statistics";
class FeedbackForm extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Please leave feedback</p>
        <div className={s.buttonList}>
          <button type="button" className={s.button} onClick={this.handleGood}>
            good
          </button>
          <button
            type="button"
            className={s.button}
            onClick={this.handleNeutral}
          >
            neutral
          </button>
          <button type="button" className={s.button} onClick={this.handleBad}>
            bad
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
        {/* <div>
          <p>Statistics </p>
          <span className={s.statItem}>Good: {this.state.good}</span>
          <span className={s.statItem}>Neutral:{this.state.neutral}</span>
          <span className={s.statItem}>Bad:{this.state.bad}</span>
        </div> */}
      </div>
    );
  }
}

export default FeedbackForm;
