import React, { useState, useContext } from 'react'
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro'

export default function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erros, setErros] = useState({senha:{valido:true, texto:""}})
  const validacoes = useContext(ValidacoesCadastro)

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
    <form onSubmit={(e) => {
      e.preventDefault()
      if(possoEnviar()){
        aoEnviar({ email, senha })
      }
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

        onBlur={validarCampos}
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
        Próximo
      </Button>
    </form>
  )
}
