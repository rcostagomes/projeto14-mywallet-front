import styled from "styled-components";
export default function Entrada() {
  return (
    <Main>
      <Navbar>
        <h3> Nova Entrada </h3>
      </Navbar>

      <form>
        <input placeholder="Valor"></input>
        <input placeholder="Descrição"></input>
        <button>
          <h3> Salvar entrada </h3>
        </button>
      </form>
    </Main>
  );
}
const Main = styled.div`
  width: 100vw;
  height: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8c11be;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    margin-bottom: 10px;
    width: 326px;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
  }
  button {
    width: 326px;
    height: 46px;
    background: #a328d6;
    border-radius: 5px;
    color: #ffff;
  }
`;

const Navbar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  h3 {
    margin-left: 20px;
    color: #ffff;
  }
`;
