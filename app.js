const API = 'https://hp-api.onrender.com/api/characters';
const listaPersonaje = document.getElementById('app');
const buscar = document.getElementById('search');
const select = document.getElementById('select');

fetch(API)
    .then(response => response.json())
    .then(data => mostrarDatos(data));
    
function mostrarDatos(personaje)  {
    listaPersonaje.innerHTML = `${mapear(personaje)}`
}

function mapear(personaje) {
    const datos = personaje.map((ficha) => 
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
    ).join('');
        return datos;
}

buscar.addEventListener('keyup', buscarPersonaje);

function buscarPersonaje() {
    const valor = buscar.value.toLowerCase();
    const resultados = document.getElementsByClassName('container');
    let coincide = false;
    for (const resultado  of resultados) {
        let texto = resultado.innerText.toLowerCase();
        if (texto.includes(valor)) {
            coincide = true;
        }else{
            coincide = false;
        }
        resultado.style.display = coincide ? '' : 'none';
    }
};

select.addEventListener('change', () => {
    buscar.value = select.value;
    buscarPersonaje();
    buscar.value = '';
    if (buscar.value = '') {
        fetch(API)
        .then(response => response.json())
        .then(data => mostrarDatos(data));
    }
});