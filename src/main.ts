console.log('Test 125')

/* appendChild */
// Here we add a ´h3´ element in the container
const container = document.querySelector('section.namesSection')

const h3 = document.createElement('h3')

if (container != null) {
    container.appendChild(h3)
}

