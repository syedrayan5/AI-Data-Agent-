import React, { useState } from "react";
import "./styles.css"; // ensure correct path
import FileUpload from "./components/FileUpload";
import QuestionForm from "./components/QuestionForm";
import ResultsTable from "./components/ResultsTable";

export default function App(){
  const [results, setResults] = useState(null);
  const [tables, setTables] = useState([]);

  return (
    <div className="app">
      <header className="header">
        <div className="logo">AI</div>
        <div>
          <div className="title">AI Data Agent</div>
          <div className="subtitle">Upload Excel → Ask business questions → Get answers, charts & tables</div>
        </div>
      </header>

      <main className="grid">
        <section className="card">
          <h2 style={{margin:0}}>Workspace</h2>
          <p className="meta">Upload an Excel file and ask insightful business questions in plain English.</p>

          <div className="uploader">
            <FileUpload onUploaded={(newTables)=> setTables(newTables)} />
            <div className="question">
              <QuestionForm onAnswer={(res)=> setResults(res)} tables={tables} />
            </div>
          </div>

          <div className="note">Tip: Click <strong>Show SQL</strong> in results to review generated queries.</div>
        </section>

        <aside className="card">
          <div className="results-header">
            <div>
              <strong>Latest Result</strong>
              <div className="meta">Quick summary and visualized output</div>
            </div>
            <div>
              <button className="btn secondary" onClick={()=> window.location.reload()}>Reset</button>
            </div>
          </div>

          {results ? (
            <>
              <div className="answer">{results.answer}</div>
              <div className="meta">SQL: <code style={{fontSize:12, color: "#374151"}}>{results.sql || "—"}</code></div>

              <div className="chart">
                {/* Your ResultsTable component can show chart + table */}
                <ResultsTable results={results} />
              </div>
            </>
          ) : (
            <div style={{marginTop:12, color:"var(--muted)"}}>No query run yet. Upload a file and ask a question to see results here.</div>
          )}
        </aside>
      </main>
    </div>
  )
}
