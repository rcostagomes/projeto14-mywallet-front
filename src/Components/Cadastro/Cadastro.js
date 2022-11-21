import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/MyWallet.png";
export default function Cadastro(props) {
  const navigate = useNavigate();
  const {
    name,
    email,
    password,
    passwordC,
    setEmail,
    setPassword,
    setName,
    setPasswordC,
  } = props;

  function cadaster(event) {
    event.preventDefault();
    if (password === passwordC) {
      const promise = axios.post(`http://localhost:5000/singUp`, {
        email: `${email}`,
        name: `${name}`,
        password: `${password}`,
      });
      promise.then((response) => {
        conclude(response);
      });
      promise.catch((err) => console.log(err));
    } else {
      alert("Digite a mesma senha em ambos os campos de senha");
    }
  }

  function conclude(response) {
    navigate("/");
  }
  return (
    <Main>
      <Title src={Logo} />
      <form>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          required
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirme a senha"
          onChange={(e) => setPasswordC(e.target.value)}
        />
        <button type="submit" onClick={cadaster}>
          <p> Cadastrar</p>
        </button>
      </form>
      <Link to="/">
        <h3> Já tem uma conta? Entre agora! </h3>
      </Link>
    </Main>
  );
}
const Main = styled.div`
  width: 100vw;
  height: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #8c11be;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    input {
      width: 326px;
      height: 46px;
      margin-bottom: 15px;
      background: #ffffff;
      border-radius: 5px;
    }
    button {
      width: 326px;
      height: 46px;
      background: #a328d6;
      border-radius: 4.63636px;
      font-family: "Raleway";
      font-style: normal;
      font-weight: 400;
      font-size: 20.976px;
      line-height: 26px;
      text-align: center;
      cursor: pointer;
      color: #ffffff;
    }
  }
  h3 {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
const Title = styled.img`
  margin-bottom: 70px;
  width: 147px;
  height: 50px;
`;
