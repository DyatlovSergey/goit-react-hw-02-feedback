import React from "react";
import s from "./FeedbackForm.module.css";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
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

  totalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    if (!good) {
      return 0;
    }
    return ((good * 100) / this.totalFeedback()).toFixed(0);
  };

  render() {
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClickGood={this.handleGood}
            onClickNeutral={this.handleNeutral}
            onClickBad={this.handleBad}
          />
        </Section>
        {/* <div className={s.buttonList}>
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
        </div> */}

        {this.totalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.totalFeedback()}
              positiveFeedback={this.positiveFeedback()}
            />
          </Section>
        )}

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
