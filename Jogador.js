import { Inimigo } from "./Inimigo.js";
import { Personagem } from "./Personagem.js";

export class Jogador extends Personagem{
    constructor(nome,vida,armaEquipada,granada){
        super(nome,vida,armaEquipada,granada);

    }

    atirar(alvo){
        if(alvo instanceof Inimigo){
            alvo.vida = this.armaEquipada.dano;
        }else{
            console.log("Não pode atirar, o alvo não é um inimigo!");
        }
    }

}