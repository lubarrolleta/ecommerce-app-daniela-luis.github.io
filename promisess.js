const isOk = false;
const Pa = new Promise((resolve, reject) => {
    if (isOk) {

        resolve('resuelve')
    } else {
        resolve('resuelve false')
    }

})


Pa.catch((err) => console.error(err))
    // Pa.then((data) => console.log(data)).catch((err) => console.error(err))