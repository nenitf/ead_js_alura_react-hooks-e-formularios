import React, { useState, useEffect } from "react";
import DadosPessoais from './DadosPessoais'
import DadosUsuario from './DadosUsuario'
import DadosEntrega from './DadosEntrega'
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

export default function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0)
  const [dadosColetados, setDadosColetados] = useState({})

  useEffect(() => {
    if(etapaAtual === formulario.length - 1){
      aoEnviar(dadosColetados)
    }
  }, [dadosColetados])

  const formulario = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>
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
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  )
}
