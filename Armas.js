export class Armas{
    constructor(nome,calibre,quantidadeMunicao,dano){
        if(this.constructor == Armas){
            throw new Error ("Essa classe não pode ser instanciada!");
        }else{
            this._nome = nome;
            this._calibre = calibre;
            this._quantidadeMunicao = quantidadeMunicao;
            this._dano = dano;
            this._cartuchoMunicao = 3;
        }
    }

    get nome(){
        return this._nome;
    }

    get calibre(){
        return this._calibre;
    }

    get quantidadeMunicao(){
        return this._quantidadeMunicao;
    }

    set quantidadeMunicao(quantidade){
        this._quantidadeMunicao -= quantidade;
        if(this._quantidadeMunicao == 0 || this._quantidadeMunicao < 0){
            this._quantidadeMunicao = 0;
            console.log("Sem munição!!");
        }
    }

    get dano(){
        return this._dano;
    }


   
}