import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ItemEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/items/${id}`);
        setName(response.data.name);
      } catch (error) {
        console.error('Erro ao buscar item:', error);
      }
    };
    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/items/${id}`, { name });
      navigate('/'); // Redireciona após salvar
    } catch (error) {
      console.error('Erro ao atualizar item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit" className="button">Salvar</button>
    </form>
  );
};

export default ItemEdit;
