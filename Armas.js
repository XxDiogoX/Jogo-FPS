export class Armas{
    constructor(nome,calibre,quantidadeMunicao,dano,){
        if(this.constructor == Armas){
            throw new Error ("Essa classe não pode ser instanciada!");
        }else{
            this._nome = nome;
            this._calibre = calibre;
            this._quantidadeMunicao = quantidadeMunicao;
            this._dano = dano;
        }
    }
}