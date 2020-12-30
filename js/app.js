// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');
let presupuesto;



//Eventos

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


//Classes

class Presupuesto {

    constructor(presupuesto) {

        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];

        console.log(this.gastos);
    }

}

class UI {

    insertarPresupuesto(cantidad) {
        const {
            presupuesto,
            restante
        } = cantidad;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo) {

        //crear el div

        const divMesanje = document.createElement('div');

        divMesanje.classList.add('text-center', 'alert');


        if (tipo === 'error') {
            divMesanje.classList.add('alert-danger'); //Classe de bootstramp
        } else {
            divMesanje.classList.add('alert-success');
        }


        //agregar mensaje error

        divMesanje.textContent = mensaje;

        //insertar en HTML

        document.querySelector('.primario').insertBefore(divMesanje, formulario);


        //quitar del HTML

        setTimeout(() => {

            divMesanje.remove();

        }, 2000);


    }

}

//Instancias

const ui = new UI();





//Funciones

function preguntarPresupuesto() {

    presupuestoUsuario = 500;

    // const presupuestoUsuario = Number(prompt('¿Cuál es tu presupuesto?'));

    // if (presupuestoUsuario == "" || presupuestoUsuario == null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {

    //     alert('Por favor, introduzca un presupuesto real en valor numérico')
    //     window.location.reload();
    // }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);

    console.log(presupuesto);
}


//Añadir gastos

function agregarGasto(e) {

    e.preventDefault();


    //Leer datos del formulario

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    //Validacion

    if (nombre === '' || cantidad === '') {

        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    } else if (cantidad <= 0 || isNaN(cantidad)) {

        ui.imprimirAlerta('Cantidad no válida', 'error');

        return;


    }

    const gasto = {
        nombre,
        cantidad,
        id: Date.now()
    };

    presupuesto.nuevoGasto(gasto);

    ui.imprimirAlerta('Gasto agregado Correctamente');
    formulario.reset();

}