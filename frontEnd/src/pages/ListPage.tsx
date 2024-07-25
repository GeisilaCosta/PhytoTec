import ItemList from '../components/ItemList';
import { Container } from 'react-bootstrap';

const ListPage = () => {
  return (
    <Container>
      <h1 className="mt-3">Lista de Plantas Medicinais</h1>
      <ItemList />
    </Container>
  );
};

export default ListPage;
