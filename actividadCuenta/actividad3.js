var Cuenta = /** @class */ (function () {
    function Cuenta(saldo, cliente, numero) {
        this.saldo = 0;
        this.cliente = cliente;
        this.numero = numero;
    }
    Cuenta.prototype.estadoCuenta = function () {
        return this.cliente + " con número de cuenta: " + this.numero + " tiene un sueldo de: " + this.saldo + " euros";
    };
    Cuenta.prototype.ingresar = function (cuanto) {
        this.saldo = this.saldo + cuanto;
    };
    Cuenta.prototype.retirar = function (cuanto) {
        this.saldo = this.saldo - cuanto;
    };
    return Cuenta;
}());
// Aquí el punto de inicio de programa
var cuenta1 = new Cuenta(1000, "Adaya", 123456789);
cuenta1.ingresar(800);
cuenta1.retirar(500);
console.log(cuenta1.estadoCuenta());
