const datos = data.map((personaje) => 
    `<tr>
        <td> <img class="imagen" src=${personaje.image? personaje.image : 'descarga.jpeg'}></img>'</td> 
        <td>${personaje.name} </td> 
        <td>${personaje.alternate_names} </td> 
        <td>${personaje.species} </td> 
        <td>${personaje.gender} </td> 
        <td>${personaje.house} </td> 
        <td>${personaje.dateOfBirth} </td> 
        <td>${personaje.yearOfBirth} </td> 
        <td>${personaje.wizard} </td> 
        <td>${personaje.ancestry} </td> 
        <td>${personaje.eyeColour} </td> 
        <td>${personaje.hairColour} </td> 
        <td>wood: ${personaje.wand.wood},<br> 
            core: ${personaje.wand.core}, <br>
            length: ${personaje.wand.length} </td>  
        <td>${personaje.patronus} </td> 
        <td>${personaje.hogwartsStudent} </td> 
        <td>${personaje.hogwartsStaff} </td> 
        <td>${personaje.actor} </td> 
        <td>${personaje.alternate_actors} </td> 
        <td>${personaje.alive} </td> 
    </tr>`);
    HTMLResponse.innerHTML = `<table id="tabla">         
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
            ${datos}
        </tbody>
    </table>`;



{/* <tr> */}
// <td> <img class="imagen" src=${personaje.image? personaje.image : 'descarga.jpeg'} alt=""></img>'
// </td> 
// <td>${personaje.name} </td> 
// <td>${personaje.alternate_names} </td> 
// <td>${personaje.species} </td> 
// <td>${personaje.gender} </td> 
// <td>${personaje.house} </td> 
// <td>${personaje.dateOfBirth} </td> 
// <td>${personaje.yearOfBirth} </td> 
// <td>${personaje.wizard} </td> 
// <td>${personaje.ancestry} </td> 
// <td>${personaje.eyeColour} </td> 
// <td>${personaje.hairColour} </td> 
// <td>wood: ${personaje.wand.wood},<br> 
//     core: ${personaje.wand.core}, <br>
//     length: ${personaje.wand.length} </td>  
// <td>${personaje.patronus} </td> 
// <td>${personaje.hogwartsStudent} </td> 
// <td>${personaje.hogwartsStaff} </td> 
// <td>${personaje.actor} </td> 
// <td>${personaje.alternate_actors} </td> 
// <td>${personaje.alive} </td> 
// </tr>`);
//         HTMLResponse.innerHTML = `<table id="tabla">
//         <thead>
//             <tr>
//             <th>Imagen</th>
//             <th>Nombre</th>
//             <th>Nombre Alternativo</th>
//             <th>Especie</th>
//             <th>Genero</th>
//             <th>Casa</th>
//             <th>Fecha de Nacimiento</th>
//             <th>Año de Nacimiento</th>
//             <th>Mago</th>
//             <th>Ancestro</th>
//             <th>Color de Ojos</th>
//             <th>Color de Cabello</th>
//             <th>Varita</th>
//             <th>Patronus</th>
//             <th>Estudiante</th>
//             <th>Maestor</th>
//             <th>Actor</th>
//             <th>Actor Alternativo</th>
//             <th>Vive</th>
//         </tr>
//         </thead>
//         <tbody>
//         ${datos}
//         </tbody>
//     </table>`;

//     }
// }



// xhr.addEventListener('load', respuesta);
// xhr.open('GET',`${API}` );
// xhr.send();

//  document.querySelector('#search').addEventListener('keyup', e => {
//     var newData = data.filter(e => `${e.name}  
//     ${e.alternate_names.toLowerCase()} 
//     ${e.species.toLowerCase()} 
//     ${e.gender}.toLowerCase() 
//     ${e.house.toLowerCase()}  
//     ${e.dateOfBirth.toLowerCase()} 
//     ${e.yearOfBirth.toLowerCase()} 
//     ${e.wizard.toLowerCase()} 
//     ${e.ancestry.toLowerCase()} 
//     ${e.eyeColour.toLowerCase()} 
//     ${e.hairColour.toLowerCase()} 
//     ${e.wand.wood.toLowerCase()} 
//     ${e.wand.core.toLowerCase()} 
//     ${e.wand.length.toLowerCase()} 
//     ${e.patronus.toLowerCase()} 
//     ${e.hogwartsStudent.toLowerCase()} 
//     ${e.hogwartsStaff.toLowerCase()} 
//     ${e.actor.toLowerCase()} 
//     ${e.alternate_actors.toLowerCase()} 
//     ${e.alive.toLowerCase()} 
//     `.includes(input.value.toLowerCase()));

//  });