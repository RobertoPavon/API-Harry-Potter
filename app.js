// ariana.cruz@bbva.com
// adair.lopez.carrasco@bbva.com
// rocio.bermudez@bbva.com
// ricardo.bernardino.munoz@bbva.com
// gustavo.antonio.bautista@bbva.com
// jessica.hernandez.avendano@bbva.com
// joseeduardo.hernandez3@bbva.com


const buscar = document.querySelector('#search');
const listaPersonaje = document.querySelector('#app');
const API = 'https://hp-api.onrender.com/api/characters';

fetch(API)
    .then(response => response.json())
    .then((data) => mostrarDatos(data) );
    
function mostrarDatos(personaje)  {
    listaPersonaje.innerHTML = `
    <table id="tabla">         
        <thead>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Nombre Alternativo</th>
                <th>Especie</th>
                <th>Genero</th>
                <th>Casa</th>
                <th>Fecha de Nacimiento</th>
                <th>Año de Nacimiento</th>
                <th>Mago</th>
                <th>Ancestro</th>
                <th>Color de Ojos</th>
                <th>Color de Cabello</th>
                <th>Varita</th>
                <th>Patronus</th>
                <th>Estudiante</th>
                <th>Maestor</th>
                <th>Actor</th>
                <th>Actor Alternativo</th>
                <th>Vive</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                ${mapear(personaje)}
            </tr>
        </tbody>
    </table>`;
}

function mapear(personaje) {
    const datos = personaje.map((ficha) => 
        `<tr>
            <td> <img class="imagen" src=${ficha.image ? ficha.image : 'descarga.jpeg'}></img></td> 
            <td>${ficha.name} </td> 
            <td>${ficha.alternate_names} </td> 
            <td>${ficha.species} </td> 
            <td>${ficha.gender} </td> 
            <td>${ficha.house} </td> 
            <td>${ficha.dateOfBirth} </td> 
            <td>${ficha.yearOfBirth} </td> 
            <td>${ficha.wizard} </td> 
            <td>${ficha.ancestry} </td> 
            <td>${ficha.eyeColour} </td> 
            <td>${ficha.hairColour} </td> 
            <td>wood: ${ficha.wand.wood},<br> 
                core: ${ficha.wand.core}, <br>
                length: ${ficha.wand.length} </td>  
            <td>${ficha.patronus} </td> 
            <td>${ficha.hogwartsStudent} </td> 
            <td>${ficha.hogwartsStaff} </td> 
            <td>${ficha.actor} </td> 
            <td>${ficha.alternate_actors} </td> 
            <td>${ficha.alive} </td> 
        </tr>`);
        return datos;
        
}

buscar.addEventListener('keyup', (e) => {
    var valor = buscar.value;
    fetch(API)
    .then(response => response.json())
    .then((data) => {
        const array = mapear(data);
        const newData = array.filter( (dat) => dat.name == `${valor}` )
        console.log(newData);
        console.log(valor)}) 
                
            

    // var newData = data.filter(e => 
    //`${e.name}
    // ${e.alternate_names.toLowerCase()} 
    // ${e.species.toLowerCase()} 
    // ${e.gender.toLowerCase()} 
    // ${e.house.toLowerCase()}  
    // ${e.dateOfBirth.toLowerCase()} 
    // ${e.yearOfBirth.toLowerCase()} 
    // ${e.wizard.toLowerCase()} 
    // ${e.ancestry.toLowerCase()} 
    // ${e.eyeColour.toLowerCase()} 
    // ${e.hairColour.toLowerCase()} 
    // ${e.wand.wood.toLowerCase()} 
    // ${e.wand.core.toLowerCase()} 
    // ${e.wand.length.toLowerCase()} 
    // ${e.patronus.toLowerCase()} 
    // ${e.hogwartsStudent.toLowerCase()} 
    // ${e.hogwartsStaff.toLowerCase()} 
    // ${e.actor.toLowerCase()} 
    // ${e.alternate_actors.toLowerCase()} 
    // ${e.alive.toLowerCase()} 
    // `.includes(buscar.value.toLowerCase()))
    // mostrarDatos(newData)
        
    
    
} )


