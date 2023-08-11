function notas(n1, n2, n3, n4, n5, n6, nome) {
    resultado = (n1 + n2 + n3 + n4) / 6
    nomes = (nome)

    if (resultado >= 6) {
        return alert("Parabens Muleski : "+ nomes + " Você foi aprovado : "+ resultado)
    } else {
        return alert("PUTS Manin : "+ nomes + " Você foi reprovado : "+ resultado)
    }
}

nome = prompt("Digite seu nome")
n1 = parseFloat(prompt("Digite sua nota 1"))
n2 = parseFloat(prompt("Digite sua nota 2"))
n3 = parseFloat(prompt("Digite sua nota 3"))
n4 = parseFloat(prompt("Digite sua nota 4"))
n5 = parseFloat(prompt("Digite sua nota 5"))
n6 = parseFloat(prompt("Digite sua nota 6"))