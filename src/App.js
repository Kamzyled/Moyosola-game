import React, { useState } from 'react';
import questions from './questions.json';

function App() {
  const [category, setCategory] = useState('');
  const [question, setQuestion] = useState('');

  const categories = Object.keys(questions);

  const getRandomQuestion = () => {
    if (!category) return;
    const qs = questions[category];
    setQuestion(qs[Math.floor(Math.random() * qs.length)]);
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>Moyosola Game</h1>
      <p>Select a relationship category:</p>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">--Choose--</option>
        {categories.map(cat =>
          <option key={cat} value={cat}>{cat}</option>
        )}
      </select>
      <button style={{ marginLeft: 10 }} onClick={getRandomQuestion} disabled={!category}>
        Get Question
      </button>
      {question && (
        <div style={{ marginTop: 30, padding: 20, background: '#f7f7f7', borderRadius: 6 }}>
          <strong>Question:</strong>
          <p>{question}</p>
        </div>
      )}
    </div>
  );
}

export default App;