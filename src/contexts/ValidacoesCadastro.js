import React from 'react'

const ValidacoesCadastro = React.createContext({
  nome: semValidacao // caso não exista ValidacoesCadastro.Provider no jsx
})

function semValidacao(dados){
  return {valido: true, texto: ""}
}

export default ValidacoesCadastro
