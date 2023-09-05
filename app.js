
const buscar = document.querySelector('#search');
const listaPersonaje = document.querySelector('#app');
const API = 'https://hp-api.onrender.com/api/characters';

fetch(API)
    .then(response => response.json())
    .then((data) => mostrarDatos(data) );
    
function mostrarDatos(personaje)  {
    listaPersonaje.innerHTML = `
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


