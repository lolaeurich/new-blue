import React, { useState } from "react";
import "./style.css";

function AyaContato() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [termos, setTermos] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifique se todos os campos estão preenchidos e o checkbox marcado
    if (!nome || !telefone || !email || !termos) {
      alert("Por favor, preencha todos os campos e aceite os termos.");
      return;
    }

    // Processar o envio
    alert("Formulário enviado com sucesso!");
    // Aqui você pode fazer a chamada para uma API ou outro processo de envio.
  };

  return (
    <section className="section-aya-contato">
      <div className="contato-aya">
        <div className="contato-text">
          <h3>Entre em contato</h3>
          <p>
            Converse com um dos nossos corretores e
            <br />
            receba informações exclusivas deste
            <br />
            empreendimento.
          </p>
        </div>

        <div className="form-contato">
          <form className="formulario" onSubmit={handleSubmit}>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome Completo"
              required
            />
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="Telefone"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />

            <div className="checkbox-container">
              <input
                type="checkbox"
                style={{width: "3%", marginTop: "0%", backgroundColor: "transparent"}}
                checked={termos}
                onChange={() => setTermos(!termos)}
                required
              />
              <span>Concordo com os Termos e Política de Privacidade</span>
            </div>

            <button type="submit">Quero mais informações</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AyaContato;
