import React, { useState } from 'react';
import axios from 'axios';

function QuestionForm({ setResults }) {
  const [question, setQuestion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question) return;
    try {
      const formData = new FormData();
      formData.append("question", question);

      const res = await axios.post("http://127.0.0.1:8000/ask", formData);
      setResults(res.data);
    } catch (err) {
      console.error(err);
      alert("Error fetching answer.");
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Ask a Question</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type your question here"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          style={{ width: '70%', marginRight: '10px' }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuestionForm;
