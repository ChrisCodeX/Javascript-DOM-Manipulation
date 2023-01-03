console.log('Test 125')

/* appendChild */
// Siempre añade el nodo al final

// Here we save the container using query selector
const container = document.querySelector('section.namesSection')

// Here we create the h3 element
const h3 = document.createElement('h3')

// Here we add a ´h3´ element in the container
if (container != null) {
    container.appendChild(h3)
}

/* createTextNode */
// Here we create a text node
const texto = document.createTextNode('Texto agregado')

// Here we add the text node in container node
if (h3 != null) {
    h3.appendChild(texto)
}

/* append */
// Nos permite agregar varios elementos a la vez
// En este caso agregamos un texto y un div
if (container != null) {
    container.append('texto 2', document.createElement('div'))
}

/* insertBefore */
// Inserta un elementos justo antes de un elemento de referencia que es un hijo directo del 
// padre
const titulo = document.createElement('h1')

const referencia = document.querySelector('.namesSection h3')

if (container != null) {
    container.insertBefore(titulo, referencia)
}

/* insert insertAdjacentElement*/
const referencia2 = document.querySelector('.adressContainer');
