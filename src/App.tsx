import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Logins/Login";
import Cadastro from "./components/Cadastro/Cadastro";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <h1 style={{ textAlign: "center", marginTop: "40px" }}>
              Dashboard - será desenvolvida na próxima aula
            </h1>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


