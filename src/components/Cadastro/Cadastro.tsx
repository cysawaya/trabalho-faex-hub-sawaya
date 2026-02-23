import { Link } from "react-router-dom";
import * as S from "./Cadastro.Styles";

export default function Cadastro() {
  return (
    <S.Container>
      <S.Card>
        <S.Title>Criar conta</S.Title>

        <S.Input placeholder="Nome completo" />
        <S.Input placeholder="E-mail" />
        <S.Input type="password" placeholder="Senha" />

        <S.Button>Cadastrar</S.Button>

        <S.Footer>
          Já possui conta?
          <Link to="/login"> Entrar</Link>
        </S.Footer>
      </S.Card>
    </S.Container>
  );
}

