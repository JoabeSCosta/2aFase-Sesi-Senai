import Navbar from "../components/Navbar";
import './Home.css';
import { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

function Home() {
  const { usuarioLogado } = useContext(GlobalContext);

  const DataInput = () => {
    const [data, setData] = useState("");

    const handleInputChange = (e) => {
      let valor = e.target.value.replace(/\D/g, "");

      if (valor.length >= 3 && valor.length <= 4) {
        valor = valor.slice(0, 2) + "/" + valor.slice(2);
      } else if (valor.length >= 5) {
        valor = valor.slice(0, 2) + "/" + valor.slice(2, 4) + "/" + valor.slice(4, 8);
      }

      // Limitar os dias a 31
      const dia = valor.slice(0, 2);
      if (parseInt(dia) > 31) {
        valor = "31" + valor.slice(2);
      }

      // Limitar os meses a 12
      const mes = valor.slice(3, 5);
      if (parseInt(mes) > 12) {
        valor = valor.slice(0, 3) + "12" + valor.slice(5);
      }

      // Limitar o ano a 2006
      const ano = valor.slice(6, 10);
      if (parseInt(ano) > 2006) {
        valor = valor.slice(0, 6) + "2006";
      }

      setData(valor);
    };

    return (
      <input
        className="nascimento-input"
        type="text"
        id="data"
        name="data"
        value={data}
        onChange={handleInputChange}
        maxLength="10"
        placeholder="dd/mm/aaaa"
      />
    );
  };

  const handleClear = () => {
    // Lógica para limpar os campos
    setData("");
    // Limpar outros campos se necessário
  };

  return (
    <div className="home-container">
      <aside className="esquerdo">
        <div className="texts">
          <label className="titulo">Cadastro de funcionários</label>
          <p className="descricao">
            Digite os dados do funcionário abaixo e clique em
            <label className="verde">&nbsp;Confirmar</label>
          </p>
        </div>

        <section className="inputs">
          <input className="username-input" placeholder="Digite seu nome" type="text" />
          <input className="email-input" placeholder="Digite seu email" type="email" />
          <input className="senha-input" placeholder="Digite sua senha" type="password" />
          <input className="telefone" placeholder="Digite seu telefone" type="text" />
          <DataInput />
        </section>

        <section className="buttons">
          <button className="confirma">CONFIRMAR</button>
          <button className="limpa" onClick={handleClear}>
            LIMPAR
          </button>
        </section>
      </aside>

      <aside className="direito">
        <div className="profile-section">
          <img className="profile-picture" src="profile-img.png" alt="Profile" />
          <button className="change-photo-button">Trocar Foto</button>
        </div>
      </aside>
    </div>
  );
}

export default Home;