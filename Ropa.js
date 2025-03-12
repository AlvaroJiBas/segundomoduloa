class Ropa {
    getTamano(){
        return this.tamano;
    }
    getColor(){
        return this.color;
    }
    lavar(){
        return "Lavando";
    }
    planchar(){
        return "Planchando"
    }

    constructor(tamano,color) {
        this.tamano = tamano;
        this.color = color;
    }
}
class Pantalon extends Ropa{
    #pierna=0;
    getEstilo(){
        return this.estilo;
    }
    meterPierna(){
        if (this.#pierna < 2){
            this.#pierna+=1;
            return "pierna introducida";
            
        } else{
            return "ya tienes las dos piernas dentro";
        }
       
    }

    constructor(tamano,color,estilo) {
        super(tamano,color);
        this.estilo=estilo;
    }
}
class Camiseta extends Ropa{
    #brazo=0;
    getLongitud(){
        return this.longitud;
    }
    meterBrazo(){
        if (this.#brazo < 2){
            this.#brazo+=1;
            return "pierna introducida";
            
        } else{
            return "ya tienes las dos piernas dentro";
        }
       
    }

    constructor(tamano,color,longitud) {
        super(tamano,color);
        this.longitud=longitud;
    }
}
export {Ropa, Camiseta,Pantalon};