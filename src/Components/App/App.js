import GlobalStyle from "../GlobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import { useState } from "react";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}
