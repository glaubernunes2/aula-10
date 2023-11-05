function dividirPorZero(numero) {
    try {
        if (numero === 0) {
            throw new Error("Não é possível dividir por zero.")
        }
        return 10 / numero
    } catch (error) {
        return error.message
    }
}

const resultado1 = dividirPorZero(5)
console.log(resultado1) // Output: 2

const resultado2 = dividirPorZero(0)
console.log(resultado2) // Output: "Não é possível dividir por zero."
