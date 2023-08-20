export default function validarCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, '');
    console.log(validarNumerosRepetidos(cpf));
    console.log(cpf);
}

function validarNumerosRepetidos(cpf) {
    const numerosRepetidos = ['00000000000', '11111111111',
                              '22222222222', '33333333333',
                              '44444444444', '55555555555',
                              '66666666666', '77777777777',
                              '88888888888', '99999999999'];

    return numerosRepetidos.includes(cpf);
}