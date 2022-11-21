import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Saida(props) {
  const { token } = props;
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function newPayment(event) {
    const headers = {
      headers: { Authorization: `Bearer ${token}` },
    };
    event.preventDefault();

    axios
      .post(
        `http://localhost:5000/transaction`,
        {
          description: description,
          type: "saida",
          value: parseFloat(value),
        },
        headers
      )
      .then((res) => {
        alert("Entrada Registrada com sucesso !!");
        navigate("/Extrato");
      });
  }
  return (
    <Main>
      <Navbar>
        <h3> Nova Saida </h3>
      </Navbar>

      <form>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" onClick={newPayment}>
          <h3> Salvar Saida</h3>
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
