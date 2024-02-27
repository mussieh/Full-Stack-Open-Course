import { useState } from "react";
import "./App.css";

const App = () => {
    const anecdotes = [
        "If it hurts, do it more often.",
        "Adding manpower to a late software project makes it later!",
        "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        "Premature optimization is the root of all evil.",
        "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        "The only way to go fast, is to go well.",
    ];

    const [selected, setSelected] = useState(0);
    const [votes, setVotes] = useState({});

    const mostVotedIndex = (() => {
        let mostVotedKey = 0;
        let mostVotedValue = 0;
        for (let key in votes) {
            if (votes[key] > mostVotedValue) {
                mostVotedKey = key;
                mostVotedValue = votes[key];
            }
        }
        return mostVotedKey;
    })();

    const handleVoteClick = () => {
        const votesCopy = { ...votes };
        votesCopy[selected] = votesCopy[selected] ? votesCopy[selected] + 1 : 1;
        setVotes(votesCopy);
    };

    const handleNextAnecdoteClick = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length));
    };

    return (
        <div>
            {anecdotes[selected]} <br />
            <p>has {votes[selected] ? votes[selected] : 0} votes</p>
            <button onClick={handleVoteClick}>vote</button>
            <button onClick={handleNextAnecdoteClick}>next anecdote</button>
            <h1>Anecdote with most votes</h1>
            {anecdotes[mostVotedIndex]} <br />
            <p>has {votes[mostVotedIndex] ? votes[mostVotedIndex] : 0} votes</p>
        </div>
    );
};

export default App;
