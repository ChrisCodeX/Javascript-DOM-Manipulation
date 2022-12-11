console.log('Test 125')

/* appendChild */

// Here we save the container using query selector
const container = document.querySelector('section.namesSection')

// Here we create the h3 element
const h3 = document.createElement('h3')

// Here we add a ´h3´ element in the container
if (container != null) {
    container.appendChild(h3)
}

/* createTextNode */
//
const texto = document.createTextNode('Texto agregado')

if (container != null) {
    container.appendChild(texto)
}