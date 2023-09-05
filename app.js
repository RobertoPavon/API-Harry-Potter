
const buscar = document.querySelector('#search');
const listaPersonaje = document.querySelector('#app');
const API = 'https://hp-api.onrender.com/api/characters';


fetch(API)
    .then(response => response.json())
    .then(data => mostrarDatos(data));
    
function mostrarDatos(personaje)  {
    listaPersonaje.innerHTML = `${mapear(personaje)}`
}
 
function mapeo(personaje) {
    let nuevo = [];
    for (let i = 0; i < personaje.length; i++) {
        
        let datos = `<div class= "container">  
            <div class= ${personaje[i].house ? personaje[i].house : 'Nogravius'}>  
                <div class="container-img"> 
                    <div class="imagen"> 
                        <img class="imagen" src=${personaje[i].image ? personaje[i].image : './img/escudo.png'}></img>  
                    </div>
                </div>
                <div class="info"> 
                    <div class="izquierda"> 
                        <h3>Nombre: ${personaje[i].name}</h3>
                        <h3>Nombre Alternativo: '${personaje[i].alternate_names}'</h3>
                        <h3>Especie: ${personaje[i].species}</h3>
                        <h3>Genero: ${personaje[i].gender}</h3>     
                        <h3>Casa: ${personaje[i].house}</h3>
                        <h3>Fecha de Nacimiento: ${personaje[i].dateOfBirth}</h3>
                        <h3>Año de Nacimiento: ${personaje[i].yearOfBirth}</h3>
                        <h3>Mago: ${personaje[i].wizard ? 'YES' : 'NO'} </h3>
                        <h3>Ancestro: ${personaje[i].ancestry}</h3>
                        <h3>Color de Ojos: ${personaje[i].eyeColour}</h3>
                    </div>
                    <div class="derecha"> 
                        <h3>Color de Cabello: ${personaje[i].hairColour}</h3>
                        <h3>Varita: </h3>
                        <p>&nbsp&nbsp&nbsp Wood: ${personaje[i].wand.wood},<br> 
                        &nbsp&nbsp&nbsp
                        Core: ${personaje[i].wand.core}, <br>
                        &nbsp&nbsp&nbsp
                        Length: ${personaje[i].wand.length}</p>
                        <h3>Patronus: ${personaje[i].patronus}</h3>
                        <h3>Estudiante: ${personaje[i].hogwartsStudent ? 'YES' : 'NO'}</h3>
                        <h3>Maestro: ${personaje[i].hogwartsStaff ? 'YES' : 'NO'}</h3>
                        <h3>Actor: ${personaje[i].actor}</h3>
                        <h3>Actor Alternativo: ${personaje[i].alternate_actors}</h3>
                        <h3>Vive: ${personaje[i].alive ? 'YES' : 'NO'}</h3>
                    </div>
                </div>
            </div>    
        </div>  
     `;
     nuevo.push(datos)
     
     
    }
    return nuevo;
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
                        <h3>Casa: ${ficha.house}</h3>
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

buscar.addEventListener('keyup', (e) => {
    var valor = buscar.value;
    fetch(API)
    .h3en(response => response.json())
    .h3en((data) => {
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
    // ${e.dateOfBirh3.toLowerCase()} 
    // ${e.yearOfBirh3.toLowerCase()} 
    // ${e.wizard.toLowerCase()} 
    // ${e.ancestry.toLowerCase()} 
    // ${e.eyeColour.toLowerCase()} 
    // ${e.hairColour.toLowerCase()} 
    // ${e.wand.wood.toLowerCase()} 
    // ${e.wand.core.toLowerCase()} 
    // ${e.wand.lengh3.toLowerCase()} 
    // ${e.patronus.toLowerCase()} 
    // ${e.hogwartsStudent.toLowerCase()} 
    // ${e.hogwartsStaff.toLowerCase()} 
    // ${e.actor.toLowerCase()} 
    // ${e.alternate_actors.toLowerCase()} 
    // ${e.alive.toLowerCase()} 
    // `.includes(buscar.value.toLowerCase()))
    // mostrarDatos(newData)
    
} )


