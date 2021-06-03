import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core";

export default function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

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
        id="senha"
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
