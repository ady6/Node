var Semana;
(function (Semana) {
    Semana[Semana["lunes"] = 1] = "lunes";
    Semana[Semana["martes"] = 2] = "martes";
    Semana[Semana["miercoles"] = 3] = "miercoles";
    Semana[Semana["jueves"] = 4] = "jueves";
    Semana[Semana["viernes"] = 5] = "viernes";
    Semana[Semana["sabado"] = 6] = "sabado";
    Semana[Semana["domingo"] = 7] = "domingo";
})(Semana || (Semana = {}));
;
var valores = [1, 2, 3, 4];
var contacto;
var dia;
contacto = ["Hola", "Buenas", 8];
dia = Semana.martes;
console.log(dia);
for (var _i = 0, miarray_1 = miarray; _i < miarray_1.length; _i++) {
    var numero = miarray_1[_i];
    console.log(numero);
}
