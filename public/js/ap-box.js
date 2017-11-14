class APBox extends HyperHTMLElement {
    created() {
        this.classList = "dn fixed top-0 left-0 vh-100 w-100 navy bg-white-90 overflow-scroll"
        this.style = "transition: all 1s ease-out;"
        this.render()
    }

    render() {
        return this.html`
        <div id="colorful-box" class="w-80 center">
        <h1 class="dib f1 fw2">Spectra</h1>
        <h2 class="dib f2 fw1">colorful photos from unsplash</h2>
        <div class="aspect-ratio aspect-ratio--16x9 mb4">
            <div id="colorful-key" class="aspect-ratio--object cover"
                 style="background:url(images/colorful/roses.jpeg) center;"></div>
        </div>
        <div id="colorful-thumbs" class="cf">
            <div class="fl w-50 w-third-m w-20-l ph1 mb2 ">
                <div class="aspect-ratio aspect-ratio--16x9">
                    <div class="aspect-ratio--object cover"
                         style="background:url(images/colorful/chalk1.jpeg) center;"></div>
                </div>
            </div>
            <div class="fl w-50 w-third-m w-20-l ph1 mb2 ">
                <div class="aspect-ratio aspect-ratio--16x9">
                    <div class="aspect-ratio--object cover"
                         style="background:url(images/colorful/frames.jpeg) center;"></div>
                </div>
            </div>
            <div class="fl w-50 w-third-m w-20-l ph1 mb2 ">
                <div class="aspect-ratio aspect-ratio--16x9">
                    <div class="aspect-ratio--object cover"
                         style="background:url(images/colorful/surfboards.jpeg) center;"></div>
                </div>
            </div>
            <div class="fl w-50 w-third-m w-20-l ph1 mb2 ">
                <div class="aspect-ratio aspect-ratio--16x9">
                    <div class="aspect-ratio--object cover"
                         style="background:url(images/colorful/tiles.jpeg) center;"></div>
                </div>
            </div>
            <div class="fl w-50 w-third-m w-20-l ph1 mb2 ">
                <div class="aspect-ratio aspect-ratio--16x9">
                    <div class="aspect-ratio--object cover"
                         style="background:url(images/colorful/roses.jpeg) center;"></div>
                </div>
            </div>
        </div>
    </div>`
    }

    onclick(e) {
        e.stopImmediatePropagation()
    }
}

APBox.define('ap-box')
