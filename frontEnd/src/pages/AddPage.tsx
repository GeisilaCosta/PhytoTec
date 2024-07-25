import ItemForm from '../components/ItemForm';
import { Container } from 'react-bootstrap';

const AddPage = () => {
  return (
    <Container>
      <h1 className="mt-3">Cadastrar Nova Planta</h1>
      <ItemForm />
    </Container>
  );
};

export default AddPage;
