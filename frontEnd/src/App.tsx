import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import ListPage from './pages/ListPage';
import AddPage from './pages/AddPage';
import ErrorPage from './pages/ErrorPage';
import Loading from './components/Loading'; 
import { Navbar, Nav, Container } from 'react-bootstrap';

import './App.css';

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Navbar.Brand className="me-2">
          <img
            src="public/logo.jpg"
            width="80"
            height="90"
            className="d-inline-block align-top"
            alt="Logo"
            style={{ borderRadius: '50%' }} 
          />
        </Navbar.Brand>
        <Navbar.Brand className="mx-auto"> 
          PhytoTec
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/add">Cadastrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container className="mt-4">
        {loading? (
          <Loading /> 
        ) : (
          <Routes>
            <Route path="/" element={<ListPage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="*" element={<ErrorPage />} /> 
          </Routes>
        )}
      </Container>
    </div>
  );
};

export default App;