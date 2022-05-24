import { Inimigo } from "./Inimigo.js";
import { Personagem } from "./Personagem.js";
import { Shotgun } from "./Shotgun.js";

export class Jogador extends Personagem{
    constructor(nome,vida,armaEquipada,granada){
        super(nome,vida,armaEquipada,granada);

    }


}