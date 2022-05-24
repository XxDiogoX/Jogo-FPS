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

    get nome(){
        return this._nome;
    }

    get vida(){
        return this._vida;
    }

    get armaEquipada(){
        return this._armaEquipada;
    }

    get granada(){
        return this._granada;
    }

    set vida(dano){
        this._vida =- dano;
    }

    set armaEquipada(arma){
        this._armaEquipada = arma;
    }

}