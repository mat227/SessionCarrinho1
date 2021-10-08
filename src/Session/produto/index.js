import { Link } from "react-router-dom";
import Home from "../home";
import { Container } from "./styled";

export default function Produto(props) {
  return (
    // esse infomacoes esta sendo retornado do Home no mapeamento
    <Container>
      <img className="capa" src={props.informacoes.imagem} alt="" />
      <div className="titulo"> {props.informacoes.titulo} </div>
      <div className="preco"> {props.informacoes.preco} </div>

      <Link
        to={{
          pathname: "/detalhe",
          state: props.informacoes
        }}
      >
        <button> Ver Detalhes </button>
      </Link>
    </Container>
  );
}
