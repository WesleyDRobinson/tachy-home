class CloseBoxesButton extends HyperHTMLElement {
    created() {
        this.className = 'dn fixed z-999 bottom-1 left-1 dim animated rollIn'
        this.render()
    }

    render() {
        return this.html`
<a class="f3 pv2 ph3 br-100 ba near-black bg-near-white link" 
href="/">X</a>`
    }
}

CloseBoxesButton.define('close-boxes-button')