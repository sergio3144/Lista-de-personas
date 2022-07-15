
const personas = []

function mostrarPersonas(){
    let texto = ''
    for (persona of personas) {
        texto += `<li>${persona.nombre} ${persona.apellido}</li> <br>`
    }
    document.getElementById('personas').innerHTML = texto;
}
function agregarPersona(){
    const forma = document.forms['forma']
    const Nombre = forma['Nombre']
    const Apellido = forma['Apellido']
    if(Nombre.value != '' && Apellido.value != ''){
        const persona = new Persona(Nombre.value, Apellido.value)
        personas.push(persona)
        mostrarPersonas();
        Nombre.value = ''
        Apellido.value = ''
    }
}
function eliminarListas() {
    personas.splice(persona)
    mostrarPersonas()
}
function eliminarLista () {
    personas.pop(persona)
    mostrarPersonas()
}

