import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import QuestionForm from './components/QuestionForm';
import ResultsTable from './components/ResultsTable';

function App() {
  const [results, setResults] = useState(null);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>AI Data Agent</h1>
      <FileUpload />
      <QuestionForm setResults={setResults} />
      {results && <ResultsTable results={results} />}
    </div>
  );
}

export default App;
