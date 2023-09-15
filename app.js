// se asigna la URL a una constante para fzcilitar su uso en el codigo
const API = 'https://hp-api.onrender.com/api/characters';

// se asignan constanes a los elementos HTML que se usaran en este codigo

const listaPersonaje = document.getElementById('app');
const buscar = document.getElementById('search');
const select = document.getElementById('select');

// se utiliza el metodo fetch para realizar la solicitud a la API
fetch(API)
    .then(response => response.json())
    .then(data => mostrarDatos(data));

    // se crea una funcion para renderizar los elementos html junto con los datos obtenidos de la API, esta funcion es llamada dentro del metodo fetch
function mostrarDatos(personaje)  {
    listaPersonaje.innerHTML = `${mapear(personaje)}`
}

// esta funcion aplica el metodo .map al arreglo obtenido del metodo fetch para extraer los datos y mostrarlos segun el formato indicado
function mapear(personaje) {
    const datos = personaje.map((ficha) =>

    /* se utiliza el operador ternario para realizar la comprobacion en algunos elementos*/
        `<div class= "container">
            <div class= ${ficha.house ? ficha.house : 'Nogravius'}>
                <div class="container-img">
                    <div class="imagen">
                        <img class="imagen" src=${ficha.image ? ficha.image : './img/escudo.png'}></img>
                    </div>
                </div>
                <div class="info">
                    <div class="izquierda">
                        <h3>Nombre: ${ficha.name}</h3>
                        <h3>Nombre Alternativo: '${ficha.alternate_names}'</h3>
                        <h3>Especie: ${ficha.species}</h3>
                        <h3>Genero: ${ficha.gender}</h3>
                        <h3>Casa: ${ficha.house ? ficha.house : 'not student'}</h3>
                        <h3>Fecha de Nacimiento: ${ficha.dateOfBirth}</h3>
                        <h3>Año de Nacimiento: ${ficha.yearOfBirth}</h3>
                        <h3>Mago: ${ficha.wizard ? 'YES' : 'NO'} </h3>
                        <h3>Ancestro: ${ficha.ancestry}</h3>
                        <h3>Color de Ojos: ${ficha.eyeColour}</h3>
                    </div>
                    <div class="derecha">
                        <h3>Color de Cabello: ${ficha.hairColour}</h3>
                        <h3>Varita: </h3>
                        <p>&nbsp&nbsp&nbsp Wood: ${ficha.wand.wood},<br>
                        &nbsp&nbsp&nbsp
                        Core: ${ficha.wand.core}, <br>
                        &nbsp&nbsp&nbsp
                        Length: ${ficha.wand.length}</p>
                        <h3>Patronus: ${ficha.patronus}</h3>
                        <h3>Estudiante: ${ficha.hogwartsStudent ? 'YES' : 'NO'}</h3>
                        <h3>Maestro: ${ficha.hogwartsStaff ? 'YES' : 'NO'}</h3>
                        <h3>Actor: ${ficha.actor}</h3>
                        <h3>Actor Alternativo: ${ficha.alternate_actors}</h3>
                        <h3>Vive: ${ficha.alive ? 'YES' : 'NO'}</h3>
                    </div>
                </div>
            </div>
        </div>
     `
/*  se utiliza el metodo .join para quitar la coma que separa cada objeto dentro del arreglo obtenido de la API y que se imprimia
    cuando se renderizaban los elementos en HTML, creando un nuevo elemento ' div class="container" ' solo con una coma (",") */
    ).join('');
        return datos;
}

// se agrega un evento de tipo 'keyup' al elemento input para realizar la busqueda por coincidencias con los caracteres ingresados
buscar.addEventListener('keyup', buscarPersonaje);

// se crea la funcion para buscar coicidencias por letras, esta funcion es utilizada en los eventos asignados al elemento input y select
function buscarPersonaje() {
    // se utiliza el metodo .toLowerCase para convertir las letras ingresadas en el elemento input en minusculas
    const valor = buscar.value.toLowerCase();

/*  se declara la constante resultados que contendra toda la coleccion de elementos div de la clase "container" que esten renderizados en el html */
    const resultados = document.getElementsByClassName('container');

// se declara una variable booleana que nos ayudara a saber si el elemento div tiene coicidencias con la palabra buscaad en el elemento input
    let coincide = false;

// se itera sobre los elementos de la coleccion de div de la clase "container"
    for (const resultado  of resultados) {
        // se declara la variable "texto" que contendra todo el texto de cada elemento ' div class="container" '
        let texto = resultado.innerText.toLowerCase();
/* si hay coicidencias dentro del texto del elemento ' div class="container" '  con respecto al valor ingresado en el input,
        se agregara la variable booleana con valor "true", de lo contrario, se agrega con el valor "false" */
        if (texto.includes(valor)) {
            coincide = true;
        }else{
            coincide = false;
        }
/*  si el elemento ' div class="container" ' tiene el valor de false en la variable booleana se oculta del html, sino, se muestra normalmente;
        se utiliza el operador ternario para realizar la comprobacion y se aplican estilos mediante la propiedad "style"   */
        resultado.style.display = coincide ? '' : 'none';
    }
};

/*  se agrega un evento de tipo 'chage' al elemento select para realizar la busqueda por coicidencias por el valor elegido;
    se incluye una funcion anonima que llamara a la funcion buscarPersonaje */
select.addEventListener('change', () => {
    // el valor del elemento "input" es igualado al valor selecionado en el elemento "select"
    buscar.value = select.value;
    buscarPersonaje();
    // se reinicia el valor del elemento "input" para que no se pueda visualizar el valor seleccionado en el elmento "select"
    buscar.value = '';

    // si el valor del elemento select es igual a '', se vuelve a llamar al metodo fetchpara mostrar todos los resultados
    if (buscar.value = '') {
        fetch(API)
        .then(response => response.json())
        .then(data => mostrarDatos(data));
    }
});