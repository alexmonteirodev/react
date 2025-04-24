//utilizando react-bootstrap para criação de componente
import React from "react";
import { CardBody, CardText, CardTitle } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const App2 = () => {
  return (
    //as opções devem ser passadas como se fossem propriedades, ex: bg="dark", porém tbm da pra usar o class do bootstrap sem problemas.
    //ex: a margem não tem a propriedade m, logo não da pra usar o m='5', a solução é usar como no App1.jsx className="m-5"
    <Card bg="dark" text="white" className="m-5">
      <Card.Header>Notebook</Card.Header>
      <CardBody>
        <CardTitle>R$ 2500</CardTitle>
        <CardText>
          Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
        </CardText>
      </CardBody>
    </Card>
  );
};

export default App2;
