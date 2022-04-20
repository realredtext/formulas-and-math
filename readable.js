function commasToReadable(num, returnNumber) {
    if(returnNumber == true) {
        let readableNum = num.replace(",", "");
        let unStringedNum = parseInt(readableNum);
        return unStringedNum
    } else {
        let commaFreeNum = num.replace(",", "");
        return commaFreeNum
    }
}
