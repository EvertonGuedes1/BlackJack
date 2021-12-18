console.log("Bem vindx ao jogo de BlackJack")

const jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
    const carta1Usuario = comprarCarta()
    const carta2Usuario = comprarCarta()
    const carta1Computador = comprarCarta()
    const carta2Computador = comprarCarta()

    const pontuaçaoUsuario = carta1Usuario.valor + carta2Usuario.valor
    const pontuaçaoComputador = carta1Computador.valor + carta2Computador.valor

    console.log(`Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - ${pontuaçaoUsuario}`)
    console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuaçaoComputador}`)

    if (pontuaçaoUsuario > pontuaçaoComputador) {
        console.log("O usuário ganhou!")
    } else if (pontuaçaoComputador > pontuaçaoUsuario) {
        console.log("O computador ganhou!")
    } else if (pontuaçaoComputador === pontuaçaoUsuario) {
        console.log("Empate!")
    }

} else {
    console.log("O jogo acabou")
}
