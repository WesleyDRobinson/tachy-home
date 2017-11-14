class MainNav extends HyperHTMLElement {
    created() {
        this.render()
    }

    render() {
        return this.html`
<nav class="cf vh-100 w-100 tc ttu f3" onclick=${this} onkeydown=${this}>
    <a href="/learning-box" class="link near-white dim dt fl w-100 w-50-l h-50 gradientHex">
        <div class="dtc v-mid">
            <img class="h4" src="images/assets/power.png" alt="power icon">
        </div>
    </a>
    <a href="/ap-box" class="link near-white dim dt fl w-100 w-50-ns h-50 bg-light-blue cover"
       style="background:url(images/assets/art-photography.jpeg)">
        <p class="dtc v-mid fw5">art & photography</p>
    </a>
    <a href="/music-box" class="link near-white dim dt fl w-100 w-50-ns h-50 bg-light-yellow cover"
       style="background:url(images/assets/music.jpeg);">
        <p class="dtc v-mid fw5">music</p>
    </a>
    <a href="/coding-box" class="link near-white dim dt fl w-100 w-50-l h-50 bg-light-green cover"
       style="background:url(images/assets/coding.jpeg);">
        <p class="dtc v-mid courier f2 fw7">code</p>
    </a>
</nav>`
    }

    onclick(e) {
        this.firstElementChild.classList.add('animated', 'pulse')
        setTimeout(() => this.firstElementChild.classList.remove('animated', 'pulse'),
            400)
    }

    onkeydown(e) {
        e.key === 13 ? this.onclick() : 0
    }
}

MainNav.define('main-nav')
