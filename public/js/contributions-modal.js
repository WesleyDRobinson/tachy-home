class PaymentType extends HyperHTMLElement {
    static get observedAttributes() {
        return ['name'];
    }

    created() {
        const payments = {
            "name": {
                name: "name",
                description: "",
                walletAddress: "",
                qrCode: "",
                link: ""
            },
            "bitcoin": {
                name: "bitcoin",
                description: "QR and address",
                qrCode: "images/assets/BTC_QR.png",
                walletAddress: "13GJTQKn2cZ4y2bhQoaJ39VYqSbp74WKwS",
            },
            "ethereum": {
                name: "ethereum",
                description: "QR and address",
                qrCode: "images/assets/ETH_QR.png",
                walletAddress: "0x02a4A724145129eB600aBA33e6660Ff40d9aBDc9",
            },
            "paypal": {
                name: "paypal",
                description: "Link to Paypal",
                qrCode: "images/assets/paypal_img.png",
                link: "https://www.paypal.me/4wesley/20"
            }
        }
        this.payment = payments[this.name]

        this.render()
    }

    render() {
        return this.html`
        <article class="pa3 pa4-ns ma3 br3 bg-white ba b--black-10 shadow-2 flex flex-column items-center"
        onclick=${this}>
            <h1>${this.payment.name}</h1>
            <img class="db h4 w4 ba b--black-05" src=${this.payment.qrCode}>
            <p class="f6 fw4 dark-gray">${this.payment.walletAddress}</p>
            <a class="link dim dark-green" href=${this.payment.link}>${this.payment.description}</a>
        </article>
        `
    }

    onclick(e) {
        e.stopImmediatePropagation()
    }
}

PaymentType.define('payment-type')


class ContributionsModal extends HyperHTMLElement {

    created() {this.render()}

    render() {
        return this.html`
<section id="contributions-modal" 
        class="fixed z-999 left-0 top-0 w-100 vh-100 dark-gray bg-white-90 overflow-scroll"
        onclick=${this}>
    <h3 class="pa3 pa5-ns orange tc">
        Please consider becoming a patron of Wesley
    </h3>
    <div class="flex flex-wrap justify-around items-center content-center-ns">
        <payment-type name="bitcoin"></payment-type>
        <payment-type name="paypal"></payment-type>
        <payment-type name="ethereum"></payment-type>
    </div>
</section>`
    }

    onclick() {
        this.remove()
        ga('send', 'event', 'Contribution modal', 'closed')
    }
}

ContributionsModal.define('contributions-modal')
