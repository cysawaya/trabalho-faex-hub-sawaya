import { Link } from "react-router-dom";
import * as S from "./Login.Styles";

export default function Login() {
  return (
    <S.Container>
      <S.Card>
        <S.Title>Entrar</S.Title>

        <S.Input placeholder="E-mail" />
        <S.Input type="password" placeholder="Senha" />

        <S.Button>Entrar</S.Button>

        <S.Footer>
          Não possui conta?
          <Link to="/cadastro"> Cadastre-se</Link>
        </S.Footer>
      </S.Card>
    </S.Container>
  );
}

