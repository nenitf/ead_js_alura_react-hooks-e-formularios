import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core";

export default function DadosUsuario({ aoEnviar, validacoes }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erros, setErros] = useState({senha:{valido:true, texto:""}})

  function validarCampos(e){
    const { name, value } = e.target
    console.log(validacoes)

    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value)

    setErros(novoEstado)
  }

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      aoEnviar({ email, senha })
      }}>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <TextField
        value={senha}
        onChange={(e) => setSenha(e.target.value)}

        onBlur={(e) => validarCampos(e)}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}

        id="senha"
        name="senha"
        label="Senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  )
}
