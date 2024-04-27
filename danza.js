var pregunta=window.prompt("¿desea saber de la danza?");
window.alert("se define danza folclorica a toda aquella manifestacion y exprecion artistica que representa las crencias, las costumbre, las tradiciones de una region o un pais en especifico, estas por lo general suelen llevarse a cabo en los teatros en dias patrios o fechas relevantes de la region"+pregunta);

var baile=prompt("consulta sobre que estado quieres saber sus fechas tradicionales y bailes:nayarit, oaxaca, guerrero");
switch(baile){
    case"nayarit":
    alert("machetes, cuchillos, el buey ");
    alert("feria nacional, feria del elote, feria abrileña y feria de la primavera")
    break;

    case"oaxaca":
    alert("la danza de la pluma, flor de piña, danza de los diablos");
    alert("la guelaguetza, la feria del mezcal y dia de muertos");
    break;

    case"guerrero":
    alert("el huaco, el mastuerzo, la mariquita");
    alert("fiesta de san lucas, fiesta de san martin, fiesta de san isidro y fiesta de cruces");
     break;

    default:
        alert("ese estado no esta");
   break;

}