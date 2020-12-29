// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');
let presupuesto;



//Eventos

eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
}


//Classes

class Presupuesto {

    constructor(presupuesto) {

        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
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

}

//Instancias

const ui = new UI();





//Funciones

function preguntarPresupuesto() {

    const presupuestoUsuario = Number(prompt('¿Cuál es tu presupuesto?'));

    if (presupuestoUsuario == "" || presupuestoUsuario == null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {

        alert('Por favor, introduzca un presupuesto real en valor numérico')
        window.location.reload();
    }

    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);

    console.log(presupuesto);
}