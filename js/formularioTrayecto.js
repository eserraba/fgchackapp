function recogerInput() {
    
    
    
    var lineasLista = document.getElementById("lineas");
    var valorLineaSeleccionada = lineasLista.options[lineasLista.selectedIndex].value;
    var nombreLineaSeleccionada = lineasLista.options[lineasLista.selectedIndex].text;
    
    alert("Opción seleccionada: " + valorLineaSeleccionada);
    
    if(valorLineaSeleccionada != "vacio") {
        document.getElementById("origen").setAttribute("disabled","enabled");
        $('select').selectmenu('enable');
        alert("Hola");
    }
}