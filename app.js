let variables = {
    showBtn: null,
    main: document.body,
    productos: [{
            id: 1,
            title: "silla",
            price: 15,
            stock: 90,
            img: 'https://falabella.scene7.com/is/image/Falabella/gsc_112858218_441863_1?wid=1500&hei=1500&qlt=70'
        },
        {
            id: 2,
            title: "cuaderno",
            price: 2,
            stock: 90,
            img: 'https://th.bing.com/th/id/R.e187f82679c9e63c30f4c46f02df150f?rik=3o1bxPEjgVIR6g&pid=ImgRaw&r=0'
        },
        {
            id: 3,
            title: "lapicero",
            price: 1,
            stock: 1000,
            img: 'https://falabella.scene7.com/is/image/Falabella/gsc_113931119_825984_1?wid=1500&hei=1500&qlt=70'
        },
        {
            id: 4,
            title: "tijera",
            price: 5,
            stock: 1500,
            img: 'https://sodimac.scene7.com/is/image/SodimacCL/1900749_01?wid=480&hei=480&qlt=70'
        },
        {
            id: 5,
            title: "escritorio",
            price: 100,
            stock: 50,
            img: 'https://falabella.scene7.com/is/image/Falabella/gsc_113933211_818038_1?wid=480&hei=480&qlt=70'
        },
        {
            id: 6,
            title: "monitor",
            price: 250,
            stock: 15,
            img: ' https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20660826_1-hYBY7Wpd-medium.jpg'
        },
        {
            id: 7,
            title: "pc gamer",
            price: 1000,
            stock: 20,
            img: ' https://sipoonline.cl/wp-content/uploads/2020/11/Gabinete-Gamer-Redragon-Tailgate-Ventana-Lateral-Vidrio-Templado-ATX-Micro-ATX-3.jpg'
        },
        {
            id: 8,
            title: "teclado",
            price: 50,
            stock: 100,
            img: 'https://falabella.scene7.com/is/image/Falabella/6869648_1?wid=800&hei=800&qlt=70'
        },
        {
            id: 9,
            title: "mouse",
            price: 10,
            stock: 90,
            img: 'https://falabella.scene7.com/is/image/Falabella/gsc_112860161_442919_1?wid=1500&hei=1500&qlt=70'
        },
        {
            id: 10,
            title: "parlantes",
            price: 20,
            stock: 900,
            img: 'https://falabella.scene7.com/is/image/Falabella/15842502_1?wid=1500&hei=1500&qlt=70'
        },
    ],
    isOk: true,
    loading: false,
    spinner: document.createElement('div'),
    delay: 2000
};
const metodos = {
    init: function() {
        this.render()
            // variables.showBtn.classList.add("showBtn");
        variables.showBtn.addEventListener("click", this.mostrarProduct, false);
    },
    render: function() {
        variables.container = document.createElement("section");
        // CREAMOS EL BOTON DE SHOW
        variables.container.classList.add("mainProduct");
        variables.showBtn = document.createElement("button")
        variables.showBtn.classList.add("showBtn");
        variables.showBtn.id = 'showBtn'
        variables.showBtn.textContent = "Show"
        variables.showBtn.setAttribute('type', 'button')
        variables.main.appendChild(variables.showBtn)
            // CREANDO SPINNER
        variables.spinner.innerHTML = `<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`
        variables.spinner.id = 'spinner'
    },
    mostrarProduct: () => {
        variables.isOk = true
        variables.loading = true
        variables.loading && variables.main.appendChild(variables.container.appendChild(variables.spinner))
        setTimeout(() => {
            variables.loading = false;
            !variables.loading && variables.main.removeChild(variables.spinner)

        }, variables.delay)
        metodos.customFetch(variables.delay, variables.productos).then((producto) => {


            for (let produc = 0; produc < producto.length; produc++) {
                variables.article = document.createElement("article");
                variables.article.classList.add("article");
                // variables.article.setAttribute("style", `background-image: url(${producto[produc].img})`)
                variables.article.setAttribute("data", `${producto[produc].id}`)
                    // CREANDO LA IMG DEL PRODUCTO
                variables.img = document.createElement("img")
                variables.img.setAttribute("class", 'img')

                variables.img.setAttribute("src", producto[produc].img)
                    //CREANDO EL TITULO
                variables.titleProduc = document.createElement("aside")
                variables.titleProduc.textContent = producto[produc].title
                variables.titleProduc.setAttribute("class", 'aside title')

                // CREANDO EL PRECIOS EL PRODUCT
                variables.priceProduc = document.createElement("aside")
                variables.priceProduc.setAttribute('class', 'aside price')
                variables.priceProduc.textContent = 'price: ' + producto[produc].price
                    // CREANDO STOC
                variables.quantityProduc = document.createElement("aside")
                variables.quantityProduc.setAttribute('class', 'aside stock')
                variables.quantityProduc.textContent = 'stock: ' + producto[produc].stock
                    // AGREGANDO AL CONTAINER
                variables.article.appendChild(variables.img)
                variables.article.appendChild(variables.titleProduc)
                variables.article.appendChild(variables.priceProduc)
                variables.article.appendChild(variables.quantityProduc)



                variables.container.appendChild(variables.article);
            }

            variables.main.appendChild(variables.container);
        });
    },
    customFetch: (time, task) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (variables.isOk) {
                    resolve(task);
                } else {
                    reject("Error");
                }
            }, time);
        });
    },
};
metodos.init();