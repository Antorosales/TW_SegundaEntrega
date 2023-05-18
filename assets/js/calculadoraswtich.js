
let i = 0;
val = 0;

option = parseInt(prompt("Ingrese la opcion que desea realizar: (1)Transformar / (2)Buscar"))

switch(option) {
case 1:

    while (i < 1){
    let valores = parseInt(prompt("Ingrese la cantidad de Pesos Chilenos (CLP) a transformar"));
    if (valores < 0) {
        alert("Transformando a numero positivo");
        valores = valores * -1;
        i++;
    } else if (valores == 0) {
        alert("Ingrese un monto valido!");
    } else if (isNaN(valores)) {
        alert("Ha ingresado una letra o no ha ingresado nada!");
    } else {
        i++;
    }
    val = valores;
    }

    let opcion = prompt("Escriba la opcion a transformar: UF,UTM o Dolares", "Dolares")
                
                function transformar() {
                    let resultado = 0;
                    let unidadf = 35591;
                    let unidadt = 62388;
                    let dolares = 810;
                    if (('uf' == opcion) || ('Uf' == opcion) || ('UF' == opcion)) {
                        resultado = val / unidadf;
                        document.write(`<div class="alert alert-success" role="alert">El valor de la UF en pesos chilenos es:$ ${resultado}</div>`);
                        alert(`El valor en UF es:$ ${resultado}`);
                    }
                    else if (('utm' == opcion) || ('Utm' == opcion) || ('UTM' == opcion)) {
                        resultado = val / unidadt;
                        document.write(`<div class="alert alert-success" role="alert">El valor de la UTM en pesos chilenos es:$ ${resultado}</div>`);
                        alert(`El valor en UTM es:$ ${resultado}`);
                    }
                    else if (('dolares' == opcion) || ('Dolares' == opcion) || ('DOLARES' == opcion)) {
                        resultado = val / dolares;
                        document.write(`<div class="alert alert-success" role="alert">El valor del dolar en pesos chilenos es:$ ${resultado}</div>`);
                        alert(`El valor en dolares es:$ ${resultado}`);
                    }
                }
                transformar(opcion);
                

case 2:
                
    const valores = [

        {nombre: 'UF', valor: 35591},
        {nombre: 'dolar', valor: 810},
        {nombre: 'utm', valor: 62388},
    ]

    
    let buscar = prompt("Ingresa el valor del tipo de moneda que deseas buscar (UF , dolar y utm)")
     
    const resultado = valores.find ((el) => el.nombre === buscar);
    
    alert(Object.values(resultado));

    console.log(resultado);
    

    default:
        alert("Esa opcion no se encuentra disponible")

    }

