import { useState } from "react";
import "./App.css";

const StatisticLine = ({ text, value }) => {
    return (
        <p>
            {text} {value}
        </p>
    );
};

const Statistics = ({
    numGood,
    numNeutral,
    numBad,
    total,
    averageRating,
    positivePercentage,
}) => {
    return (
        <>
            <h1>statistics</h1>
            {total === 0 ? (
                <p>No feedback given</p>
            ) : (
                <table>
                    <tbody>
                        <tr>
                            <td>good</td>
                            <td>{numGood}</td>
                        </tr>
                        <tr>
                            <td>neutral</td>
                            <td>{numNeutral}</td>
                        </tr>
                        <tr>
                            <td>bad</td>
                            <td>{numBad}</td>
                        </tr>
                        <tr>
                            <td>total</td>
                            <td>{total}</td>
                        </tr>
                        <tr>
                            <td>average</td>
                            <td>{averageRating}</td>
                        </tr>
                        <tr>
                            <td>positive</td>
                            <td>{positivePercentage} %</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </>
    );
};

const Button = ({ text, onClick }) => {
    return <button onClick={onClick}>{text}</button>;
};

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const all = good + neutral + bad;
    const average = (good + neutral + bad) / 3;
    const positivePercentage = all === 0 ? 0 : (good / all) * 100;

    return (
        <>
            <h1>give feedback</h1>
            <Button onClick={() => setGood(good + 1)} text="good" />
            <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
            <Button onClick={() => setBad(bad + 1)} text="bad" />
            <Statistics
                numGood={good}
                numNeutral={neutral}
                numBad={bad}
                total={all}
                averageRating={average}
                positivePercentage={positivePercentage}
            />
        </>
    );
};

export default App;
