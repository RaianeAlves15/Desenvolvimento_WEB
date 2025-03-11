import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/items');
      setItems(response.data);
    } catch (error) {
      console.error('Erro ao buscar itens:', error);
    }
  };

  const deleteItem = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este item?')) {
      try {
        await axios.delete(`http://localhost:3000/items/${id}`);
        fetchItems(); // Atualiza a lista após a exclusão
      } catch (error) {
        console.error('Erro ao excluir item:', error);
      }
    }
  };

  return (
    <div>
      <Link to="/add" className="button">Adicionar Item</Link>
      <div>
        {items.map(item => (
          <div key={item.id} className="card">
            <h3>ID: {item.id}</h3>
            <p>Nome: {item.name}</p>
            <Link to={`/edit/${item.id}`} className="button">Editar</Link>
            <button onClick={() => deleteItem(item.id)} className="button button-danger">Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;