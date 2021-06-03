function validarNome(nome){
  if(nome.length < 3){
    return {valido: false, texto: "Nome deve ter no mínimo 3 dígitios."}
  } else {
    return {valido:true, texto:""}
  }
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido: false, texto: "CPF deve ter 11 dígitios."}
  } else {
    return {valido:true, texto:""}
  }
}

function validarSenha(senha){
  if(senha.length <= 4 || senha.length > 72){
    return {valido: false, texto: "Senha deve ter entre 4 e 72 dígitios."}
  }else{
    return {valido: true, texto: ""}
  }
}

export { validarNome, validarCPF, validarSenha }
