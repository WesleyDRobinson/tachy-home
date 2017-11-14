class MusicBox extends HyperHTMLElement {
    static get observerdAtributes() {
        return ['name']
    }

    created() {
        this.classList = "dn fixed top-0 vh-100 w-100 navy bg-near-white overflow-scroll"
        this.style = "transition: all 1s ease-out;"
        this.render()
    }

    render() {
        return this.html`
    <div class="dt w-100 h-100 bg-gold">
        <p class="dtc v-mid tc ttu">more musical info coming soon</p>
    </div>`
    }

    onclick(e) {}
}

MusicBox.define('music-box')
