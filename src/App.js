import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Components/Home'
import ArticleDetail from './Components/ArticleDetail'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </Router>
    )
  }
}

export default App