var Coche = /** @class */ (function () {
    function Coche(matricula, marca, modelo) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
    }
    Coche.prototype.ver = function () {
        return this.matricula + " - " + this.marca + " - " + this.modelo;
    };
    return Coche;
}());
var Parking = /** @class */ (function () {
    function Parking() {
        this.plazas = [null, null, null, null, null, null];
    }
    Parking.prototype.aparcar = function (coche) {
        // Busca la primera plaza libre y aparca un Coche
        for (var p = 0; p < this.plazas.length; p++) {
            if (this.plazas[p] == null) {
                this.plazas[p] = coche;
                return "Acaba de aparcar el coche: " + coche.ver();
            }
        }
        return "No queda ninguna plaza libre";
    };
    Parking.prototype.todasLasPlazas = function () {
        var salida = "";
        // Retorna un listado con todas las plazas 
        // Para cada una informa sobre si está libre u ocupada
        for (var p = 0; p < this.plazas.length; p++) {
            if (this.plazas[p] == null) {
                salida = salida + "Plaza nº " + p + " (libre)";
            }
            else {
                salida = salida + "Plaza nº " + p + " " + this.plazas[p].ver();
            }
            salida = salida + "\n";
        }
        return salida;
    };
    Parking.prototype.plazasLibres = function () {
        var salida = "";
        // Retorna una cadena que informa de los números de plaza libres
        for (var p = 0; p < this.plazas.length; p++) {
            if (this.plazas[p] == null) {
                salida = salida + "Plaza nº " + p + " libre";
            }
            salida = salida + "\n";
        }
        return salida;
    };
    Parking.prototype.plazasOcupadas = function () {
        var salida = "";
        // Retorna una cadena que informa de los números de plazas ocupadas // Y sobre qué coche las ocupa.
        for (var p = 0; p < this.plazas.length; p++) {
            if (this.plazas[p] != null) {
                salida = salida + "Plaza nº " + p + " ocupada";
            }
            salida = salida + "\n";
        }
        return salida;
    };
    return Parking;
}());
// Aquí el punto de ejecución del programa. 
// Creamos el parking y aparcamos coches.
var c1 = new Coche("55665FGK", "Seat", "Ibiza");
var c2 = new Coche("13823AJS", "Skoda", "Scala");
var c3 = new Coche("12334AEF", "Lexus", "Axis");
var c4 = new Coche("1234A5SD", "otro", "coche");
var c5 = new Coche("35565RTF", "otro", "mas");
var parking1 = new Parking();
parking1.aparcar(c1);
parking1.aparcar(c2);
parking1.aparcar(c3);
parking1.aparcar(c4);
parking1.aparcar(c5);
console.log(parking1.todasLasPlazas());
console.log(parking1.plazasLibres());
console.log(parking1.plazasOcupadas());
