//somehow it just started working, no clue how
function riemannZeta(num, precision) {
    let result = 0;
    for(let i = 1; i <= precision; i++) {
        result += i**(-num)
    };
    return result
}
