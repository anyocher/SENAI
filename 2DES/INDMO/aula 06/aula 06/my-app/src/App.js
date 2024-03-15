import React, {useState} from 'react';
import {Navbar, Nav, Conteiner, Car, Button, Badage, Container} from 'react-bootstrap';
import "bootstrap/dits/css/bootstrap.MIN.css";

function 'ProductCard ' ({name, addCard}){
  return (
    <div className="col-md-4">
      <Card> 
        <Card.Img variant="top" src={` \${name.toLowerCase().jpg}`}/>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          
         <Card.text>
          Descriçao do produto {name} , um otimo produto para você comprar.
         </Card.text>

         <Buttom variant="primary" onClick={() => addCard{name}}>
          Adicionar ao carrinho
         </Buttom>
         </Card.Body>
      </Card>
    </div>
  );
}

  function CardPage ({cardItems, removefromCard}) {
    return {(
      <Container className="mt-5">
      <h1 className='text-center mb-4'> 
      Carrinho de compras 
      </h1>
    )}
  }
