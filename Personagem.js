export class Personagem{
    constructor(nome,vida,armaEquipada,granada){
        if(this.constructor == Personagem){
            throw new Error ("Está classe não pode ser instanciada!");
        }else{
            this._nome = nome;
            this._vida = vida;
            this._armaEquipada = armaEquipada;
            this._granada = granada;
        }
    }
}