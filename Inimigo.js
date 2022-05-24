import { Jogador } from "./Jogador.js";
import { Personagem } from "./Personagem.js";

export class Inimigo extends Personagem{
    constructor(nome,vida,armaEquipada,granada){
        super(nome,vida,armaEquipada,granada);
    }

    atirar(alvo){
        if(alvo instanceof Jogador){
            alvo.vida = this.armaEquipada.dano;
        }else{
            console.log("Não pode atirar, o alvo não é um jogador!!")
        }
    }

}