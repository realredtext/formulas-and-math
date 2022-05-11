function tempConversion(mode, temp) {
    mode = mode.toLowerCase();
    if(mode === "f_to_c") {
        return (temp - 32) * (5/9)
    }

    else if(mode === "c_to_f") {
        return (temp * (9/5)) + 32
    } else {
        console.error("Mode does not match f_to_c or c_to_f")
    }
}
