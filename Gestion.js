const fs = require('fs')

class Fichier  {

    constructor(fichier) {

        this.fichier = fichier
        
    }

    Lire(fichier){
        const fs = require('fs')
        
        this.contenu = fs.readFileSync(this.fichier,{encoding :'utf8',flag:'r'})
        //let package = JSON.parse(fichier)
        //console.log(contenu)
        //this.affichage()
    }
    Ecrire(contenu){
        fs.writeFileSync(this.fichier, this.contenu + '\n' + contenu)
    }
    Supprimer(){
        fs.rmSync(this.fichier)
    }
    affichage(){
        if(this.contenu != undefined)
            console.log('Mon contenu : \n' + this.contenu)
    }
    vider(){
        fs.writeFileSync(this.fichier,'')
    }
}
    class GestionFichierJson extends Fichier {
        

    }


let monfichier = new Fichier('myFile.txt')

monfichier.Lire()
monfichier.affichage()
monfichier.Ecrire('GOOOOAAAAAAALLLLLLL')
//monfichier.Supprimer()
monfichier.vider()
