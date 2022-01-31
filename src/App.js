import React, { useState } from 'react';

import { Container } from './components/Container/Container';
import { FeedbackBtn } from './components/FeedbackBtn/FeedbackBtn';
import { Notification } from './components/Notification/Notification';
import { Section } from './components/Section/Section';
import { StatisticList } from './components/StatisticList/StatisticList';

import { H1Styled } from './App.styles';

const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const increment = evt => {
        const value = evt.target.textContent.toLowerCase();

        switch (value) {
            case 'good':
                setGood(good + 1);
                break;

            case 'neutral':
                setNeutral(neutral + 1);
                break;

            case 'bad':
                setBad(bad + 1);
                break;

            default:
                return;
        }
    };

    const totalCountFeedback = (good, neutral, bad) => {
        return good + neutral + bad;
    };

    const positivePercentage = (good, neutral, bad) => {
        let total = good + neutral + bad;
        let percentage = ((good / total) * 100).toFixed(0);
        return `${percentage}%`;
    };

    return (
        <Container>
            <H1Styled>Feedback Service</H1Styled>
            <Section title={'Please leave your feedback'}>
                <FeedbackBtn
                    options={['good', 'neutral', 'bad']}
                    onLeaveFeedback={increment}
                />
            </Section>

            <Section title={'Statistics'}>
                {totalCountFeedback(good, neutral, bad) < 1 ? (
                    <Notification text={'No feedback given'} />
                ) : (
                    <StatisticList
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={totalCountFeedback(good, neutral, bad)}
                        positivePercentage={positivePercentage(
                            good,
                            neutral,
                            bad,
                        )}
                    />
                )}
            </Section>
        </Container>
    );
};

export default App;
