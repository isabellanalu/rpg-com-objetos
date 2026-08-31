class personagem{
    constructor(nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
        this.defesa= defesa
    }
    
    curar(quantidade){
        this.vida= this.vida + quantidade 
    }
    causaDano(personagem){
        personagem.recebeDano(this.ataque)
        
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
const druida = new personagem("Kode", 80, 25, 8)

const guerreiro = new personagem("Thorin", 60, 20, 40)

const mago = new personagem("Gandalfe", 60, 25, 17)

const arqueiro = new personagem("Legolas", 80, 25, 13)

const elfo = new personagem ("Dobby", 95, 15, 10)

const anao = new personagem ("Soneca", 30, 90, 5)

const princesa = new personagem ("Cinderela", 85, 30, 12)

druida.causaDano(mago

)

console.log (mago.mostrarStatus())