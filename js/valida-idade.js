export default function validarMaiorIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (!validarIdade(dataNascimento))
        campo.setCustomValidity('A pessoa informado não tem mais de 18 anos');
}

function validarIdade(dataNascimento) {
    const dataAtual = new Date();
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());
    
    return dataAtual >= dataMais18;
}