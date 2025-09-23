/**
 * 
 * ESTRUCTURA SWITCH
 *  
 */
//Costos de una fruta en la tienda
//comillas invertidas alt+96

let comprar = "Mangos";

switch (comprar) {
    case "Naranjas":
        console.log("El costo de las naranjas es Q16 la mano");
        break;
        case "Platanos":
            console.log("El costo de los platanos es Q18 la docena");
            break;
                case "Manzanas":
                    console.log("El costo de las manzana por unidad es Q5");
                  //casos compartidos
                  case "Mangos":
                    case "Papayas":
                        console.log("El costo de los mangos y papayas es Q12 la libra");  
                        break;
                        default:
                        console.log(`Lo sentimos, no hay inventario para ${comprar}`)
            break;
}