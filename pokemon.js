// Classe abstrata
function Pokemon(nome) {
    this.nome = nome;
}

// Métodos da classe abstrata
Pokemon.ataque = function() {
}

Pokemon.mover = function() {
}

// Classes filhas
class Bulbasaur extends Pokemon {
    ataque() {
        console.log(this.nome + " usou folha navalha");
    }

    mover() {
        console.log(this.nome + " está correndo");
    }
}

class Charmander extends Pokemon {
    ataque() {
        console.log(this.nome + " usou lança-chamas");
    }

    mover() {
        console.log(this.nome + " está pulando");
    }
}

class Squirtle extends Pokemon {
    ataque() {
        console.log(this.nome + " usou jato d'água");
    }

    mover() {
        console.log(this.nome + " está nadando");
    }
}

// Instâncias de objetos
const venu = new Bulbasaur("Venu");
const zard = new Charmander("Zard");
const blast = new Squirtle("Blast");

venu.ataque(); // Saída: venu usou folha navalha
zard.ataque(); // Saída: zard usou lança-chamas
blast.ataque(); // Saída: blast usou jato d'água

venu.mover(); // Saída: venu está correndo
zard.mover(); // Saída: zard está pulando
blast.mover(); // Saída: blast está nadando