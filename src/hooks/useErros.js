import React, { useState } from 'react'

function useErros(validacoes){
  const estadoInicial = criarEstadoIniciais(validacoes)
  const [erros, setErros] = useState(estadoInicial)

  function validarCampos(event){
    const { name, value } = event.target
    const novoEstado = {...erros}
    novoEstado[name] = validacoes[name](value)
    setErros(novoEstado)
  }

  return [ erros, validarCampos ]
}

function criarEstadoIniciais(validacoes){
  return Object
    .keys(validacoes)
    .reduce((acc, p) => {
      acc[p] = {
        valido: true,
        texto: ""
      }
      return acc
    }, {})
}

export default useErros
