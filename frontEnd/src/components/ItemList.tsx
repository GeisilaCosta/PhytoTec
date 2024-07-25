import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { ListGroup, Form, Button } from 'react-bootstrap';

interface Item {
  id: number;
  imageUrl: string;
  name: string;
  indication: string;
  description: string;
}

const ItemList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('/plants').then((response) => {
      setItems(response.data);
    });
  }, []);

  const handleSearch = () => {
    axios.get(`/plants/search?indication=${search}`).then((response) => {
      setItems(response.data);
    });
  };

  return (
    <div>
      <Form.Group className="mb-3" controlId="formSearch">
        <Form.Control type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar por indicação" />
      </Form.Group>
      <Button variant="primary" onClick={handleSearch}>Buscar</Button>
      <ListGroup className="mt-3">
        {items.map((item) => (
          <ListGroup.Item key={item.id}>
            <img src={item.imageUrl} alt={item.name} className="img-thumbnail" />
            <h3>{item.name}</h3>
            <p>{item.indication}</p>
            <p>{item.description}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ItemList;

