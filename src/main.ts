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
if (container != null) {
    container.append('texto 2', document.createElement('div'))
}
