import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({aoEnviar, validacoes}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [erros, setErros] = useState(
    {
      cpf:{valido:true, texto:""},
      nome:{valido:true, texto:""},
    }
  )

  function validarCampos(e){
    const { name, value } = e.target
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }

  function possoEnviar(){
    return !Object
      .keys(erros)
      .some(p => erros[p].valido === false)
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if(possoEnviar){
          aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => setNome(e.target.value)}

        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}

        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(e) => setSobrenome(e.target.value)}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}

        onBlur={validarCampos}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}

        id="CPF"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(e) => setPromocoes(e.target.checked)}
            name="promocoes"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(e) => setNovidades(e.target.checked)}
            name="novidades"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
