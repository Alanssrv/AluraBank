const elemIniciarCamera = document.querySelector('[data-video-botao]');
const elemCamera = document.querySelector('[data-camera]');
const elemVideo = document.querySelector('[data-video]');
const elemBotaoCapturarFoto = document.querySelector('[data-tirar-foto]');
const elemCanvas = document.querySelector('[data-video-canvas]');
const elemMensagem = document.querySelector('[data-mensagem]');
const elemBotaoEnviarFoto = document.querySelector('[data-enviar]');

let imagemUrl = '';

elemIniciarCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    
    elemIniciarCamera.style.display = 'none';
    elemCamera.style.display = 'block';

    elemVideo.srcObject = iniciarVideo;
});

elemBotaoCapturarFoto.addEventListener('click', function () {
    elemCanvas.getContext('2d').drawImage(elemVideo, 0, 0, elemCanvas.width, elemCanvas.height);

    imagemUrl = elemCanvas.toDataURL('image/jpeg');

    elemCamera.style.display = 'none';
    elemMensagem.style.display = 'block';
});

elemBotaoEnviarFoto.addEventListener('click', () => {
    const dadosCliente = localStorage.getItem('cadastro');
    const dadosClienteJSON = JSON.parse(dadosCliente);

    dadosClienteJSON.imagem = imagemUrl;

    localStorage.setItem('cadastro', JSON.stringify(dadosClienteJSON));

    window.location.href = './abrir-conta-form-3.html';
});