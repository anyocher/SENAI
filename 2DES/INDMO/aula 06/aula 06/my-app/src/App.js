import React, { useState } from 'react';
import { Navbar, Nav, Container, Card, Button, Badge, Modal, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard({ name, addToCart }) {
  return (
    <div className="col-md-4">
      <Card>
        <Card.Img variant="top" src={`/${name.toLowerCase()}.jpg`} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Descrição do produto {name}.
          </Card.Text>
          <Button variant="primary" onClick={() => addToCart(name)}>
            Adicionar ao Carrinho
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

function Cart({ cartItems, removeFromCart, show, handleClose, finalizePurchase }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - R$ {item.price.toFixed(2)}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(index)} className="ms-2">
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className="mt-3">Total: R$ {totalPrice.toFixed(2)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={finalizePurchase}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (productName) => {
    // Adicione a lógica para obter o preço do produto com base no nome
    // Você pode usar um objeto ou um banco de dados para mapear os preços dos produtos
    const productPrice = 10; // Por exemplo, preço fixo de R$10 para todos os produtos
    const newItem = { name: productName, price: productPrice };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  const finalizePurchase = () => {
    // Implemente a lógica para finalizar a compra aqui
    // Por exemplo, limpar o carrinho de compras
    setCartItems([]);
    // Ou exibir uma mensagem de sucesso
    alert('Compra finalizada com sucesso!');
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Daily Check</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="temperatura.html">temperatura</Nav.Link>
            <Nav.Link href="#contato">Tarefa</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
          </Nav>
          <Button variant="primary" onClick={handleShow}>
            <i className="bi bi-cart"></i> <Badge bg="danger">{cartItems.length}</Badge>
          </Button>
        </Container>
      </Navbar>

{/* <nav class="navbar navbar-expand-lg navbar-dark bg-">

<div class="container">

   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">

        <ul class="navbar-nav">

            <li class="nav-item">
                <a class="nav-link" href="index.html">Home</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="temperatura.html">temperatura</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="matricula.html">tarefa</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="contato.html">Conato</a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#modalContato">Contato</a>
            </li>

        </ul>

    </div>

</div>

</nav> */}

      <Container className="mt-5">
        <h1 className="text-center mb-4">Produtos em Destaque</h1>
        <div className="row">
          <ProductCard name="frio" addToCart={addToCart} />
          <ProductCard name="outono" addToCart={addToCart} />
          <ProductCard name="primavera" addToCart={addToCart} />
          <ProductCard name="verao" addToCart={addToCart} />
        </div>
      </Container>

      

      <Cart cartItems={cartItems} removeFromCart={removeFromCart} show={showCart} handleClose={handleClose} finalizePurchase={finalizePurchase} />
    </div>
  );
}

export default App;