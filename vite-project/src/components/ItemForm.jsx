import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ItemForm = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/items', { name });
      navigate('/'); // Redireciona após salvar
    } catch (error) {
      console.error('Erro ao adicionar item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome do item"
        required
      />
      <button type="submit" className="button">Salvar</button>
    </form>
  );
};

export default ItemForm;
