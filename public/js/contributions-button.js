class ContributionsButton extends HyperHTMLElement {

    created() {this.render()}

    render() {
        return this.html`
    <a id="contributions-button"
    class="fixed right-1 bottom-1 f6 link pointer br-pill ph3 pv2 gold bg-dark-gray animated bounceInRight"
    onclick=${this}>Contribution Opportunities</a>`
    }

    onclick() {
        const body = document.querySelector('body')
        const modal = document.createElement('contributions-modal')
        body.appendChild(modal)

        ga('send', 'event', 'Contribution modal', 'opened')
    }
}

ContributionsButton.define('contributions-button')
