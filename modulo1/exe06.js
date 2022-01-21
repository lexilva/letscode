
let n = 100
for (let i = 1; i <= n; i++){
    let cont = 0
    for(let j = 1; j <= i; j++){
        if (i % j == 0){
            cont++
        }
    }
    if (cont == 2){
        console.log(i)
    }
}
