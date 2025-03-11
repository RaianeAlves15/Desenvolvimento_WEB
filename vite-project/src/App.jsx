import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import ItemEdit from './components/ItemEdit';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Lista de Itens</h1>
        </header>
        <Routes>
          <Route path="/" element={<ItemList />} />
          <Route path="/add" element={<ItemForm />} />
          <Route path="/edit/:id" element={<ItemEdit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
