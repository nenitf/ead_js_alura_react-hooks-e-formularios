import React, { useState } from 'react'
import { TextField, Button } from "@material-ui/core";

export default function DadosEntrega({ aoEnviar }) {
  const [cep ,setCep] = useState("")
  const [endereco ,setEndereco] = useState("")
  const [numero, setNumero] = useState(null)
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar();
      }}
    >
      <TextField
        value={cep}
        onChange={(e) => setCep(e.target.value)}
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
        id="numero"
        label="Numero"
        type="number"
        variant="outlined"
        margin="normal"
      />

      <TextField
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  )
}
