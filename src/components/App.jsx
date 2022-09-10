import React from "react";
import { Component } from "react";
//компоненти
import { Section } from "./Section";
import { Statistics } from "./Statistics";
import { FeedbackOptions } from "./FeedbackOptions";
import { Notification } from "./Notification";
//
import s from './App.module.css';

//клас
export class App extends Component{
  //прописуємо стейт
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

//методи
  // state оновлюємо
  onUpdCount = item => {
    this.setState(prevState => {
      return {
        [item]: prevState[item] + 1,
      };
    });
  };
  // загальну кількість фідбеків рахуємо
  onTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  // % фібеків
  positivePercentage = () => {
    const { good } = this.state;
    const total = this.onTotalFeedback();
    return good !== 0 ? Math.round((good / total) * 100) : 0;
  };

  //рендер

  render() {
    const options = Object.entries(this.state);
    const total = this.onTotalFeedback();
    const positivePercentage = this.positivePercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.container}>
<Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onUpdCount}
          />
        </Section>
        <Section title="Statistic">
          {total > 0 ? (
            <Statistics
              options={options}
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    )
  }

}