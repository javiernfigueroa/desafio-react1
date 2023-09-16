import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Card } from './components/Card';
import { Footer } from './components/Footer';
import p1Image from './assets/img/p1.jpg';
import p2Image from './assets/img/p2.jpg';
import p3Image from './assets/img/p3.jpg';
import p4Image from './assets/img/p4.jpg';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header title="Adopta un perrito" />
      <Container>
        <Row>
          <Col lg={3} md={4} sm={6}>
            <Card
              imageSrc={p1Image}
              name="Bartolo"
              description="Lleno de energía y listo para jugar. Dale a Bartolo el hogar amoroso que se merece!"
              tags={[
                { backgroundColor: 'blue', breed: 'Golden' },
              ]}
            />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card
              imageSrc={p2Image}
              name="Messi"
              description="Es juguetón, amigable y se lleva bien con niños y otros animales. Haz de Messi parte de tu familia hoy mismo!"
              tags={[
                { backgroundColor: 'green', breed: 'Fox Terrier ' },
              ]}
            />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card
              imageSrc={p3Image}
              name="Gohan"
              description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
              tags={[
                { backgroundColor: 'red', breed: 'Lobo' },
              ]}
            />
          </Col>
          <Col lg={3} md={4} sm={6}>
            <Card
              imageSrc={p4Image}
              name="Princesa"
              description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. Ayuda a Princesa a encontrar su final feliz!"
              tags={[
                { backgroundColor: 'purple', breed: 'Poodle' },
              ]}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
