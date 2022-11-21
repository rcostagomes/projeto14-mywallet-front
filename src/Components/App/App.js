import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import { useState } from "react";
import Cadastro from "../Cadastro/Cadastro";
import Extrato from "../Extrato/Extrato";
import Entrada from "../Entrada/Entrada";
import Saida from "../Saida/Saida";
import UserContext from "../../contexts/User.Context";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [token, setToken] = useState([]);
  const [user, setUser] = useState();

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Login
                  setToken={setToken}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                />
              }
            />
            <Route
              path="/cadastro"
              element={
                <Cadastro
                  name={name}
                  email={email}
                  password={password}
                  passwordC={passwordC}
                  setEmail={setEmail}
                  setName={setName}
                  setPassword={setPassword}
                  setPasswordC={setPasswordC}
                />
              }
            />
            <Route
              path="/Extrato"
              element={<Extrato token={token} user={user} />}
            />
            <Route path="/Entrada" element={<Entrada token={token} />} />
            <Route path="/Saida" element={<Saida token={token} />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}
