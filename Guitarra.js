class Guitarra {
    #preciodeCoste = 100;

    tocar(){
        return `cling cling de las ${this.cuerdas} cuerdas`;
    }
    tocarALTO(){
        console.log(`cling cling de las ${this.cuerdas} cuerdas`.toUpperCase())
    }
    tocarmuyALTO(){
        this.cuerdas-=1
    }
    mostrarPreciodeVenta(){
        return this.#preciodeCoste*1.2;
    }

    constructor(marca, cuerdas) {
        this.marca =marca;
        this.cuerdas = cuerdas;
    }
}
class GuitarraElectrica extends Guitarra {
    enchufar(){
        console.log("Power on");
    }
    tocarALTO(){
        if(this.distorsion){
        console.log("groaaaaaaaa");
        }else{
            console.log("groa");
        }

    }
    constructor(marca, cuerdas, distorsion) {
        super(marca,cuerdas);
        this.distorsion=distorsion;
    }
}

export {Guitarra, GuitarraElectrica};