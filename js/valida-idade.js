export default function validarMaiorIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if (validarIdade(dataNascimento)) {
        console.log('É maior de idade');   
    } else {
        console.log('Menor de idade');
    }
}

function validarIdade(dataNascimento) {
    const dataAtual = new Date();
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());

    return dataAtual >= dataMais18;
}