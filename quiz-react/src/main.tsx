import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home';
import { QuizProvider } from './context/quiz';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QuizProvider>
      <Home />
    </QuizProvider>
  </React.StrictMode>,
)
