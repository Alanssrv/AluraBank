import validarCPF from "./valida-cpf.js";
import validarMaiorIdade from "./valida-idade.js";

const camposForm = document.querySelectorAll('[required]');

camposForm.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
});

function verificaCampo(campo) {
    if (campo.name == 'cpf' && campo.value.length > 11)
        validarCPF(campo);
    if (campo.name == 'aniversario' && campo.value != '')
        validarMaiorIdade(campo);
}