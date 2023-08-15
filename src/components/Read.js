<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import axios from 'axios';
=======
<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import axios from "axios";
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
>>>>>>> 0d03b6c243cf3d6c9d7507e10c6693e5993a03e5
>>>>>>> 85aee16b9a4d1527e6218e9d9f414574201d2a63

function ReadComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    axios
      .get("/api/items") // Faz uma requisição GET para a rota no backend
      .then((response) => {
        setItems(response.data); // Atualiza o estado com os itens recebidos
      })
      .catch((error) => {
        console.error("Erro ao buscar itens:", error);
=======
>>>>>>> 85aee16b9a4d1527e6218e9d9f414574201d2a63
    axios.get('/api/items') // Faz uma requisição GET para a rota no backend
      .then(response => {
        setItems(response.data); // Atualiza o estado com os itens recebidos
      })
      .catch(error => {
        console.error('Erro ao buscar itens:', error);
<<<<<<< HEAD
=======
>>>>>>> 0d03b6c243cf3d6c9d7507e10c6693e5993a03e5
>>>>>>> 85aee16b9a4d1527e6218e9d9f414574201d2a63
      });
  }, []);

  return (
    <div>
      <h2>Lista de Itens</h2>
      <ul>
<<<<<<< HEAD
        {items.map(item => (
=======
<<<<<<< HEAD
        {items.map((item) => (
=======
        {items.map(item => (
>>>>>>> 0d03b6c243cf3d6c9d7507e10c6693e5993a03e5
>>>>>>> 85aee16b9a4d1527e6218e9d9f414574201d2a63
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

<<<<<<< HEAD
export default ReadComponent;
=======
<<<<<<< HEAD
export default ReadComponent;
=======
export default ReadComponent;
>>>>>>> 0d03b6c243cf3d6c9d7507e10c6693e5993a03e5
>>>>>>> 85aee16b9a4d1527e6218e9d9f414574201d2a63
