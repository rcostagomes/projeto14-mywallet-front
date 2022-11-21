import styled from "styled-components";
import Sair from "../../assets/Vector.png";
export default function Extrato() {
  return (
    <Main>
      <Navbar>
        <h2> Olá, Fulano</h2>
        <img src={Sair} alt="Sair" />
      </Navbar>

      <Infos></Infos>
      <Opçoes>
        <Entrada>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h3>
            Nova <br /> Entrada
          </h3>
        </Entrada>
        <Saida>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h3>
            Nova <br /> Saida
          </h3>
        </Saida>
      </Opçoes>
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
`;

const Navbar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  h2 {
    margin-left: 40px;
    color: #ffff;
  }

  img {
    margin-right: 40px;
    cursor: pointer;
  }
`;

const Infos = styled.div`
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
`;

const Opçoes = styled.div`
  display: flex;
  ion-icon {
    font-size: 25px;
    margin-top: 5px;
    margin-left: 5px;
  }
`;
const Entrada = styled.div`
  width: 155px;
  height: 114px;
  background-color: #a328d6;
  border-radius: 5px;
  margin-right: 12px;
  margin-top: 5px;
  color: #ffff;
  h3 {
    margin-left: 10px;
    margin-top: 40px;
  }
`;
const Saida = styled.div`
  width: 155px;
  height: 114px;
  margin-top: 5px;
  background-color: #a328d6;
  border-radius: 5px;
  color: #ffff;
  h3 {
    margin-left: 10px;
    margin-top: 40px;
  }
`;
