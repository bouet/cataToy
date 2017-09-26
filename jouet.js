class Jouet {


    constructor(unLibelle,uneTancheAge,uneCategorie){
        this._libelle = unLibelle;
        this._trancheAge = uneTancheAge;
        this._categorie = uneCategorie;

        this._categorie.ajouterJouet(this);
    }

    get libelle(){
        return this._libelle;
    }

    get TrancheAge(){
        return this._trancheAge.toString();
    }

    get Categorie(){
        return this._categorie.libelle;
    }

}
module.exports = Jouet;