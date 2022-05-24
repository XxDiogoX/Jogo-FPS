import { Personagem } from "./Personagem.js";

export class Inimigo extends Personagem{
    constructor(nome,vida,armaEquipada,granada){
        super(nome,vida,armaEquipada,granada);
    }
}