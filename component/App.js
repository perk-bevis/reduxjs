import html from "../Core.js"
import { connect } from "../store.js"

const connector = connect()
function App({ cars }){
    
    return html`
    <ul>
        ${cars.map(car =>`<li>${car}</li>`)}
    </ul>

    <button onclick ="dispatch('ADD', 'Porsche')"> Add car </button>
    `
}

export default connector(App)