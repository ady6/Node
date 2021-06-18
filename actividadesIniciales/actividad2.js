var Coche = /** @class */ (function () {
    function Coche(matricula, marca, modelo) {
        this.matricula = matricula;
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = 0;
    }
    Coche.prototype.estadoCoche = function () {
        return this.matricula + " " + this.marca + " " + this.modelo + " va a " + this.velocidad;
    };
    Coche.prototype.acelerar = function (cuanto) {
        this.velocidad = this.velocidad + cuanto;
    };
    Coche.prototype.frenar = function (cuanto) {
        this.velocidad = this.velocidad - cuanto;
    };
    return Coche;
}());
// Aquí el punto de inicio de programa
var miCoche = new Coche("5566FTX", "Ford", "Fiesta");
miCoche.acelerar(50);
miCoche.frenar(10);
console.log(miCoche.estadoCoche());
