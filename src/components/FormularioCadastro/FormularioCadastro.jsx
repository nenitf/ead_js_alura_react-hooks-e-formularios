import React, { useState } from "react";
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0)

  const formulario = [
    <DadosUsuario aoEnviar={proximo}/>,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosEntrega />,
  ]

  function proximo(){
    setEtapaAtual(etapaAtual+1)
  }

  return (
    <>
      {formulario[etapaAtual]}
    </>
  )
}
