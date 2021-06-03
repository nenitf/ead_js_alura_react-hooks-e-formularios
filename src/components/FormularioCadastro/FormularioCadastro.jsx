import React, { useState, useEffect } from "react";
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'

export default function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDadosColetados] = useState({})

  useEffect(() => {
    console.log(dadosColetados)
  }, [dadosColetados])

  const formulario = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
  ]

  function proximo(){
    setEtapaAtual(etapaAtual+1)
  }

  function coletarDados(dados){
    setDadosColetados({...dadosColetados, ...dados})
    proximo()
  }

  return (
    <>
      {formulario[etapaAtual]}
    </>
  )
}
