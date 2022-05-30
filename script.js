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
});
button2.addEventListener(`click`, (e) => {
    e.preventDefault();
    document.getElementById("button-container").style.display = "none";
    document.getElementById("container-text").style.display = "none";
    
    ponerCódigo();
});

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
    input2.setAttribute(`placeholder`, "Apellido");
    input3.setAttribute(`placeholder`, "Nacionalidad");
    input4.setAttribute(`placeholder`, "Fecha de nacimiento");
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

//FN obtenerValoresInputsYEnviarlosAlArray

//obtengo los inputs
let inputs = document.getElementsByClassName(`input`);
//creo el array de objetos Alumnos
let planillaAlumnos = [];
let alumno = ``;
let alumnosEnJSON = ``;

function obtenerValoresInputsEnviarlosAlArrayYStorage() {
    form.addEventListener(`submit`, (e) => {
        e.preventDefault();

        class Alumnos {
            constructor(nombre, apellido, nacionalidad, fechaDeNacimiento) {
                this.nombre = nombre;
                this.apellido = apellido;
                this.nacionalidad = nacionalidad;
                this.fechaDeNacimiento = fechaDeNacimiento;
            }

        }

        alumno = new Alumnos(inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
        planillaAlumnos.push(alumno);
        //console.log(planillaAlumnos);
        alumnosEnJSON = localStorage.setItem(`alumnos_registrados`, JSON.stringify(planillaAlumnos));
        //mostramos la ficha del alumno registrado
        mostrarFicha();
    })
}

//FN mostrar ficha
function mostrarFicha() {

    let h1 = document.createElement("h1");
    h1.innerText = `Hola ` + alumno.nombre + ` esta es tu ficha`;
    container.append(h1);
    let ul = document.createElement(`ul`);

    let li1 = document.createElement(`li`);
    li1.innerText = `Nombre:` + alumno.nombre;
    let li2 = document.createElement(`li`);
    li2.innerText = `Apellido:` + alumno.apellido;
    let li3 = document.createElement(`li`);
    li3.innerText = `Fecha de nacimiento:` + alumno.fechaDeNacimiento;
    let li4 = document.createElement(`li`);
    li4.innerText = `Nacionalidad:` + alumno.nacionalidad;

    ul.append(li1, li2, li3, li4);
    container.append(ul);
}

//FN ponerCódigo

let inputClave = ``;
let botonEnviarCodigo = ``;
let botonCancelarEnvio = ``;

function ponerCódigo() {
    //titulo
    let h2 = document.createElement(`h2`);
    h2.setAttribute(`id`, `h2`);
    h2.innerText = `Ingrese el codigo de verificación para contar su asistencia`;
    //input
    inputClave = document.createElement(`input`);
    inputClave.setAttribute(`id`, `inputClave`);
    inputClave.setAttribute(`placeholder`, `Ingresar código`);
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
        if (value == 546862) {
            //sweet alert "Contraseña correcta" 
            swal({
                title: "Código correcto",
                text: "¡Felicitaciones, tu código fue verificado con éxito!",
                icon: "success",
                timer: 5000,
                button: true,
            });
        } else {
            //sweet alert "Contraseña incorrecta" 
            swal({
                title: "Código incorrecto",
                text: "¡Tenemos un problema, tu código es incorrecto!",
                icon: "error",
                button: true,
            });

        }
    })
    //cancelar y volver
    botonCancelarEnvio.addEventListener(`click`, (e) => {
        e.preventDefault();
        document.getElementById(`h2`).style.display = `none`;
        document.getElementById(`inputClave`).style.display = `none`;
        document.getElementById(`botonCancelarEnvio`).style.display = `none`;
        document.getElementById(`botonEnviarCodigo`).style.display = `none`;
        document.getElementById("button-container").style.display = "block";
        document.getElementById("container-text").style.display = "block";
        
    })
}