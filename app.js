/* =====================================
MENÚ DE NAVEGACIÓN
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("menuNavegacion");

    if(menu){

        menu.addEventListener("change", function(){

            if(!this.value) return;

            const destino =
            document.getElementById(this.value);

            if(destino){

                destino.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    }

});


/* =====================================
DATOS EDITABLES
===================================== */

const vitroles = [
{sabor:"Jamaica",precio:25},
{sabor:"Horchata",precio:25},
{sabor:"Tamarindo",precio:25},
{sabor:"Piña",precio:30},
{sabor:"Mango",precio:30},
{sabor:"Limón",precio:25},
{sabor:"Guanábana",precio:35},
{sabor:"Melón",precio:30},
{sabor:"Sandía",precio:30},
{sabor:"Fresa",precio:35}
];

const embotelladas = [
{sabor:"Jamaica",precio:20},
{sabor:"Horchata",precio:20},
{sabor:"Limón",precio:20},
{sabor:"Mango",precio:25},
{sabor:"Piña",precio:25},
{sabor:"Maracuyá",precio:30},
{sabor:"Pepino con Limón",precio:25},
{sabor:"Naranja",precio:20},
{sabor:"Guayaba",precio:25},
{sabor:"Toronja",precio:25}
];

const vitocromico = [
{sabor:"Blue Raspberry",precio:35},
{sabor:"Frutos Rojos",precio:35},
{sabor:"Kiwi",precio:35},
{sabor:"Piña Colada",precio:40},
{sabor:"Mora Azul",precio:35},
{sabor:"Durazno",precio:35},
{sabor:"Uva",precio:35},
{sabor:"Coco",precio:40},
{sabor:"Ponche Tropical",precio:40},
{sabor:"Manzana Verde",precio:35}
];

/* =====================================
GALERÍA
===================================== */

const galeria = [

{
titulo:"Agua de Jamaica",
imagen:"imagenes/jamaica.jpg"
},

{
titulo:"Agua de Horchata",
imagen:"imagenes/horchata.jpg"
},

{
titulo:"Agua de Mango",
imagen:"imagenes/mango.jpg"
},

{
titulo:"Vitrol Tradicional",
imagen:"imagenes/vitrol.jpg"
},

{
titulo:"Vitocrómico",
imagen:"imagenes/vitocromico.jpg"
},

{
titulo:"Sucursal La Crema",
imagen:"imagenes/local.jpg"
}

];


/* =====================================
CARGAR PRODUCTOS
===================================== */

function cargarSabores(datos,id){

    const contenedor =
    document.getElementById(id);

    if(!contenedor) return;

    contenedor.innerHTML="";

    datos.forEach(item => {

        const div =
        document.createElement("div");

        div.classList.add("sabor");

        div.innerHTML = `
            <span>${item.sabor}</span>
            <span class="precio">
                $${item.precio}
            </span>
        `;

        contenedor.appendChild(div);

    });

}


/* =====================================
CARGAR GALERÍA
===================================== */

function cargarGaleria(){

    const contenedor =
    document.getElementById(
        "galeria-dinamica"
    );

    if(!contenedor) return;

    contenedor.innerHTML="";

    galeria.forEach(item => {

        const tarjeta =
        document.createElement("div");

        tarjeta.classList.add(
            "foto-card"
        );

        tarjeta.innerHTML = `
            ${item.imagen}

            <div class="foto-info">
                <h3>${item.titulo}</h3>
            </div>
        `;

        contenedor.appendChild(
            tarjeta
        );

    });

}


/* =====================================
INICIALIZAR
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        cargarSabores(
            vitroles,
            "lista-vitroles"
        );

        cargarSabores(
            embotelladas,
            "lista-embotelladas"
        );

        cargarSabores(
            vitocromico,
            "lista-vitocromico"
        );

        cargarGaleria();

    }
);