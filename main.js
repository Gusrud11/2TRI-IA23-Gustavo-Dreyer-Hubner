
const bolinha = document.querySelectorAll('.radios input[type="radio"]');
const labels = document.querySelectorAll('.radios label');
const imagem = document.querySelector('.imagem');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');

function mudarCorDaBolinha(bolinhaSelecionada) {
    labels.forEach((label, labelIndex) => {
        if (labelIndex === bolinhaSelecionada) {
            label.style.background = '#fff';
        } else {
            label.style.background = '#393d3e';
        }
    });
}

function mudarSelecaoRadio(direcao) {
    const arrayDeBolinhas = [...bolinha];
    const bolinhaSelecionada = arrayDeBolinhas.findIndex(input => input.checked);

    if (bolinhaSelecionada !== -1) {
        arrayDeBolinhas[bolinhaSelecionada].checked = false;

        if (direcao === 'left') {
            const novoIndex = (bolinhaSelecionada - 1 + arrayDeBolinhas.length) % arrayDeBolinhas.length;
            arrayDeBolinhas[novoIndex].checked = true;
        } else if (direcao === 'right') {
            const novoIndex = (bolinhaSelecionada + 1) % arrayDeBolinhas.length;
            arrayDeBolinhas[novoIndex].checked = true;
        }

        mudarCorDaBolinha(bolinhaSelecionada);
        const novaSrc = `img/${bolinhaSelecionada + 1}.png`;
        imagem.src = novaSrc;
    }
}

bolinha.forEach((radioInput, index) => {
    radioInput.addEventListener('change', () => {
        mudarCorDaBolinha(index);

        if (radioInput.checked) {
            const novaSrc = `img/${index + 1}.png`;
            imagem.src = novaSrc;
        }
    });
});

leftButton.addEventListener('click', () => {
    mudarSelecaoRadio('left');
});

rightButton.addEventListener('click', () => {
    mudarSelecaoRadio('right');
});

bolinha[0].checked = true;
mudarCorDaBolinha(0);
const novaSrc = 'img/1.png';
imagem.src = novaSrc;
