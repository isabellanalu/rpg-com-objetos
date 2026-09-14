class Personagem{
    constructor(nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
        this.defesa= defesa
    }
    
    curar(quantidade){
        this.vida= this.vida + quantidade 
        if(this.vida>this.vidaMax){
            this.vida = this.vidaMax
        }
    
    }
    causaDano(Personagem){
        Personagem.recebeDano(this.ataque)
        
    }
    
    recebeDano(quantidade){
        let dano= quantidade-this.defesa
        if (quantidade < this.defesa){
            dano = 0
        }
        this.vida= this.vida - dano
       
        if(this.vida <=0){
        this.vida = "eliminado"
    }
    
    }
    estaVivo(){
         return this.vida > 0
    }

    mostrarStatus(){
       console.log(this.nome + " | Vida: " + this.vida)
    }
}

class Guerreiro extends Personagem{
golpePesado(Personagem){
    Personagem.recebeDano(this.ataque* 2)
}
}
class Teste extends Personagem {
    constructor(nome){
        super (nome,80, 35, 15)
    }
}

const druida = new Personagem("Kode", 80, 25, 8)

const guerreiro = new Personagem("Thorin", 60, 20, 40)

const mago = new Personagem("Gandalfe", 60, 25, 17)

const arqueiro = new Personagem("Legolas", 80, 25, 13)

const elfo = new Personagem ("Dobby", 95, 15, 10)

const anao = new Personagem ("Soneca", 30, 90, 5)

const princesa = new Personagem ("Cinderela", 85, 30, 12)

const personagens = [
druida,
guerreiro, 
mago,
arqueiro,
elfo,
anao,
princesa
]

personagens.forEach(function(personagens){
    personagens.mostrarStatus()
})

let turno = 1
let jogadorAtual=0

function proximoTurno(){
    turno=turno+1
    jogadorAtual= jogadorAtual === 0 ? 1 :0
}
proximoTurno()
proximoTurno()

console.log(turno)
console.log(jogadorAtual)
