
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs);

listaSelecaoPokedevs.forEach(pokedev => {
    pokedev.addEventListener("click", () => {

        esconderCartaoPokedev();

        const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

        desativarPokedevNaListagem();

        ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

    })
})

function esconderCartaoPokedev() {
    const cartaoPokedevAberto = document.querySelector(".aberto");
    cartaoPokedevAberto.classList.remove("aberto");
}

function mostrarCartaoPokedevSelecionado(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
    const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
    cartaoPokedevParaAbrir.classList.add("aberto");
    return idPokedevSelecionado;
}

function desativarPokedevNaListagem() {
    const pokedevAtivoNaListagem = document.querySelector(".ativo");
    pokedevAtivoNaListagem.classList.remove("ativo");
}

function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
    const idPokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
    idPokedevSelecionadoNaListagem.classList.add("ativo");
}
