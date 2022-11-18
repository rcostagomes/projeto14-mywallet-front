import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import { useState } from "react";
import Cadastro from "../Cadastro/Cadastro";
import Extrato from "../Extrato/Extrato";
import Entrada from "../Entrada/Entrada";
import Saida from "../Saida/Saida";

export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
              />
            }
          />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/Extrato" element={<Extrato />} />
          <Route path="/Entrada" element={<Entrada/>} />
          <Route path="/Saida" element={<Saida/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
