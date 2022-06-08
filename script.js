//contenedores
const container = document.getElementById(`container`);
const containerText = document.getElementById(`container-text`);
const containerButton = document.getElementById(`button-container`);
//botones
const button1 = document.getElementById(`button-1`);
const button2 = document.getElementById(`button-2`);

button1.addEventListener(`click`, (e) => {
    e.preventDefault();

    document.getElementById("button-container").style.display = "none";
    document.getElementById("container-text").style.display = "none";
    
    crearFormulario();
    obtenerValoresInputsEnviarlosAlArrayYStorage();
    //obtenerValoresStorage();
});
/* button2.addEventListener(`click`, (e) => {
    e.preventDefault();
    document.getElementById("button-container").style.display = "none";
    document.getElementById("container-text").style.display = "none";
    
    ponerCódigo();
}); */
// ÁREA DE CREACIÓN DE FUNCIONES

//FN crearFormulario
let form = ``;

function crearFormulario() {
    //creo el form
    form = document.createElement(`form`);
    container.append(form);
    form.className = `form-registro`;
    form.setAttribute(`id`,`form-registro`);
    //creo los inputs y los agrego al form
    let input1 = document.createElement(`input`);
    let input2 = document.createElement(`input`);
    let input3 = document.createElement(`input`);
    let input4 = document.createElement(`input`);
    form.append(input1);
    form.append(input2);
    form.append(input3);
    form.append(input4);
    //les doy una class
    input1.className = `input`;
    input2.className = `input`;
    input3.className = `input`;
    input4.className = `input`;
    //les doy un ID
    input1.setAttribute(`id`, "input1");
    input2.setAttribute(`id`, "input2");
    input3.setAttribute(`id`, "input3");
    input4.setAttribute(`id`, "input4");
    //les doy su placeholder
    input1.setAttribute(`placeholder`, "Nombre");
    input2.setAttribute(`placeholder`, "Casa de Hogwarts");
    input3.setAttribute(`placeholder`, "Patronus");
    input4.setAttribute(`placeholder`, "Fecha de nacimiento");
    input1.setAttribute(`required`, ``);
    input2.setAttribute(`required`, ``);
    input3.setAttribute(`required`, ``);
    input4.setAttribute(`required`, ``);
    //creo los botones y los agrego al form
    let botonVolver = document.createElement(`button`);
    let botonRegistro = document.createElement(`button`);
    botonVolver.className = `boton`;
    botonRegistro.className = `boton`;
    botonVolver.setAttribute(`id`, `boton-volver`);
    botonRegistro.setAttribute(`id`, `boton-registro`);
    botonVolver.innerText = `Volver`;
    botonRegistro.innerText = `Registrarme`;
    form.append(botonVolver);
    form.append(botonRegistro);

    botonVolver.addEventListener(`click`, (e) => {
        e.preventDefault();
        document.getElementById(`form-registro`).style.display = `none`;
        document.getElementById("button-container").style.display = "block";
        document.getElementById("container-text").style.display = "block";
    })
    
}


//FN obtenerValoresInputsYEnviarlosAlArrayYStorage
//obtengo los inputs
let inputs = document.getElementsByClassName(`input`);
//creo el array de objetos Alumnos
let planillaAlumnos = [];
let alumno = ``;
let alumnosEnJSON = ``; //array planillaAlumnos en storage
//FN para guardar en Local
const guardarLocal = (clave, valor) => {
    alumnosEnJSON = localStorage.setItem(clave, valor);
} 

const obtenerValoresInputsEnviarlosAlArrayYStorage = () => {
    form.addEventListener(`submit`, (e) => {
        e.preventDefault();

        class Alumnos {
            constructor(name, house, patronus, dateOfBirth) {
                this.name = name;
                this.house = house;
                this.patronus = patronus;
                this.dateOfBirth = dateOfBirth;
            }

        }

        alumno = new Alumnos(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
        planillaAlumnos.push(alumno);
        //alumnosEnJSON = localStorage.setItem(`alumnos_registrados`, JSON.stringify(planillaAlumnos));
        //mostramos la ficha del alumno registrado
        guardarLocal(`lista_alumnos`, JSON.stringify(planillaAlumnos));
        obtenerValoresStorage();
        mostrarFicha();
        document.getElementById(`form-registro`).style.display = `none`;
        
    })
}
//localStorage.clear()
//FN obtener valores del storage
let arrayAlumnosRegistrados = []; 
let alumnoRegistradoLocal = ``;
const obtenerValoresStorage = () => {
    
    alumnoRegistradoLocal = localStorage.getItem(`lista_alumnos`);
    console.log(alumnoRegistradoLocal);
    arrayAlumnosRegistrados.push(JSON.parse(alumnoRegistradoLocal));
    console.log(arrayAlumnosRegistrados);
    
}



//FN mostrar ficha
function mostrarFicha() {

    let h1 = document.createElement("h1");
    h1.setAttribute(`id`, `h1`);
    h1.innerText = `${alumno.name} estás por convertirte en alumno de Hogwarts.`;
    container.append(h1);
    let ul = document.createElement(`ul`);
    ul.setAttribute(`id`, `ul-ficha`);

    let li1 = document.createElement(`li`);
    li1.setAttribute(`id`, `li1`);
    li1.innerText = `Nombre: ` + alumno.name;
    let li2 = document.createElement(`li`);
    li2.setAttribute(`id`, `li2`);
    li2.innerText = `Casa de Hogwarts: ` + alumno.house;
    let li3 = document.createElement(`li`);
    li3.setAttribute(`id`, `li3`);
    li3.innerText = `Fecha de nacimiento: ` + alumno.dateOfBirth;
    let li4 = document.createElement(`li`);
    li4.setAttribute(`id`, `li4`);
    li4.innerText = `Tu patronus es un: ` + alumno.patronus;

    ul.append(li1, li2, li3, li4);
    container.append(ul);
    botonContarAsistencia();
}

//FN ponerCódigo

let inputClave = ``;
let botonEnviarCodigo = ``;
let botonCancelarEnvio = ``;

function ponerCódigo() {
    //titulo
    let h2 = document.createElement(`h2`);
    h2.setAttribute(`id`, `h2`);
    h2.innerText = `¿En que andén se aborda el tren a Hogwarts?`;
    //input
    inputClave = document.createElement(`input`);
    inputClave.setAttribute(`id`, `inputClave`);
    inputClave.setAttribute(`type`, `text`);
    inputClave.setAttribute(`placeholder`, `Ingresar respuesta`);
    //boton enviar
    botonEnviarCodigo = document.createElement(`button`);
    botonEnviarCodigo.setAttribute(`id`, `botonEnviarCodigo`);
    botonEnviarCodigo.innerText = `Enviar`;
    //boton cancelar
    botonCancelarEnvio = document.createElement(`button`);
    botonCancelarEnvio.setAttribute(`id`, `botonCancelarEnvio`);
    botonCancelarEnvio.innerText = `Cancelar`;
    container.append(h2);
    container.append(inputClave);
    container.append(botonEnviarCodigo);
    container.append(botonCancelarEnvio);

    //Alerta según código
    botonEnviarCodigo.addEventListener(`click`, (e) => {
        e.preventDefault();
        let value = inputClave.value;
        if (value == `En el andén nueve y tres cuartos`) {
            //sweet alert "Contraseña correcta" 
            swal({
                title: "Código correcto",
                text: "¡Felicitaciones, tu código fue verificado con éxito!",
                icon: "success",
                timer: 5000,
                button: true,
            })
            botonFinalizarPrograma();
        } else {
            //sweet alert "Contraseña incorrecta" 
            swal({
                title: "Código incorrecto",
                text: "¡Tenemos un problema, tu código es incorrecto!",
                icon: "error",
                button: true,
            });

        }
        document.getElementById(`botonCancelarEnvio`).style.display = `none`;
        
    })
    //cancelar y volver
    botonCancelarEnvio.addEventListener(`click`, (e) => {
        e.preventDefault();
        document.getElementById(`h2`).style.display = `none`;
        document.getElementById(`inputClave`).style.display = `none`;
        document.getElementById(`botonCancelarEnvio`).style.display = `none`;
        document.getElementById(`botonEnviarCodigo`).style.display = `none`;
        document.getElementById(`boton-finalizar`).style.display = `none`;
        document.getElementById("button-container").style.display = "block";
        document.getElementById("container-text").style.display = "block";
        
    })
}
const botonContarAsistencia = () => {
    let botonIrAContarAsistencia = document.createElement(`button`);
    botonIrAContarAsistencia.innerText = `Responder pregunta`;
    botonIrAContarAsistencia.className = `boton`;
    botonIrAContarAsistencia.setAttribute(`id`, `boton-asistencia`);
    container.append(botonIrAContarAsistencia);
    
    botonIrAContarAsistencia.addEventListener(`click`, (e) => {
        e.preventDefault();
        document.getElementById(`h1`).style.display = `none`;
        document.getElementById(`ul-ficha`).style.display = `none`;
        document.getElementById(`form-registro`).style.display = `none`;
        document.getElementById(`boton-asistencia`).style.display = `none`;
        ponerCódigo();
    })
}
const botonFinalizarPrograma = () => {
    let botonFinalizar = document.createElement(`button`);
    botonFinalizar.setAttribute(`id`, `boton-finalizar`);
    botonFinalizar.className = `boton`;
    botonFinalizar.innerText = `Finalizar`;
    container.append(botonFinalizar);

    botonFinalizar.addEventListener(`click`, () => {
        felicitacionesInscripto();
        crearArticleMain();
        finalizarPrograma();
        document.getElementById(`h2`).style.display = `none`;
        document.getElementById(`inputClave`).style.display = `none`;
        document.getElementById(`botonCancelarEnvio`).style.display = `none`;
        document.getElementById(`botonEnviarCodigo`).style.display = `none`;
        document.getElementById(`boton-finalizar`).style.display = `none`;
    })
}

const felicitacionesInscripto = () => {
    let containerTextoFelicitaciones = document.createElement(`div`);
    let h3 = document.createElement(`h3`);
    h3.innerText = `Felicitaciones, ya sos parte del mundo mágico. Bienvenido a Hogwarts!`
    containerTextoFelicitaciones.append(h3);
    container.append(containerTextoFelicitaciones);
}


let div = document.createElement(`div`);
let articleMain = document.createElement(`article`);
articleMain.setAttribute(`id`, `articulo-main`);

const crearArticleMain = () => {
    let h4 = document.createElement(`h4`);
    let p = document.createElement(`p`);
    h4.innerText = `${alumno.name}`
    p.innerText = `El(a) hechicero(a) ${alumno.name}, pertenece a la casa de ${alumno.house}. Nació el ${alumno.dateOfBirth} y su patronus es un(a) ${alumno.patronus}`
    articleMain.append(h4);
    articleMain.append(p);
    div.append(articleMain);
    container.append(div);
}

//Consumir una API
let divEstudiantesHogwarts = document.createElement(`div`);
divEstudiantesHogwarts.setAttribute(`id`, `div-estudiantesHogwarts`)
let article = ``;

const finalizarPrograma = () => {
    fetch(`http://hp-api.herokuapp.com/api/characters/students`).then( (response) => response.json()).then( (data) => {
        
        const arrayFiltrado = data.filter( (el, i) => i < 9);
        console.log(arrayFiltrado);

        arrayFiltrado.forEach((element) => {
            article = document.createElement(`article`);
            
            let h4 = document.createElement(`h4`);
            h4.innerText = `${element.name}`;

            let p = document.createElement(`p`);
                
                if (element.patronus !== ``){
                    p.innerText = `El(a) hechicero(a) ${element.name}, pertenece a la casa de ${element.house}. Nació el ${element.dateOfBirth} y su patronus es un(a) ${element.patronus}`
                } else {
                    p.innerText = `El(a) hechicero(a) ${element.name}, pertenece a la casa de ${element.house}. Nació el ${element.dateOfBirth} y se desconoce la forma de su patronus.`
                }
                if (element.dateOfBirth == ``){
                    p.innerText = `El(a) hechicero(a) ${element.name}, pertenece a la casa de ${element.house}. Se desconoce con exactitud la fecha de nacimiento, era contemporáneo(a) a Harry. también se desconoce la forma de su patronus.`;
                } 
                article.append(h4);
                article.append(p);
                divEstudiantesHogwarts.append(article); 
                container.append(divEstudiantesHogwarts);       
        });

    });
    
}

