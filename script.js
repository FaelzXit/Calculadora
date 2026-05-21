const pegaValor = document.querySelectorAll('button')
const visor = document.querySelector('#visor')

let valor1 = ''

pegaValor.forEach(botao => {

    botao.addEventListener('click', () => {

        // LIMPAR
        if (botao.value === 'C') {

            valor1 = ''
            visor.innerHTML = ''

        }

        // CALCULAR
        else if (botao.value === '=') {

            let valorSeparado
            let res


            // SOMA
            if (valor1.includes('+')) {

                valorSeparado = valor1.split('+')

                res =
                    Number(valorSeparado[0]) +
                    Number(valorSeparado[1])

                    console.log(valorSeparado)
            }

            // SUBTRAÇÃO
            else if (valor1.includes('-')) {

                valorSeparado = valor1.split('-')

                res =
                    Number(valorSeparado[0]) -
                    Number(valorSeparado[1])

                    console.log(valorSeparado)
                    
            }

            // MULTIPLICAÇÃO
            else if (valor1.includes('*')) {

                valorSeparado = valor1.split('*')

                res =
                    Number(valorSeparado[0]) *
                    Number(valorSeparado[1])

                    console.log(valorSeparado)
                    
            }

            // DIVISÃO
            else if (valor1.includes('/')) {

                valorSeparado = valor1.split('/')

                res =
                    Number(valorSeparado[0]) /
                    Number(valorSeparado[1])

                    console.log(valorSeparado)

            }

            // PORCENTAGEM
            else if (valor1.includes('%')) {

                valorSeparado = valor1.split('%')

                res =
                    (Number(valorSeparado[0]) / 100) *
                    Number(valorSeparado[1])

                    console.log(valorSeparado)

            }

            visor.textContent = res

        }

        // ESCREVER NO VISOR
        else {

            valor1 += botao.value
            visor.textContent = valor1

        }

    })

})