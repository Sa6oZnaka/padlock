export class Padlock {

    constructor(cipher) {
        this.cipher = cipher;
    }

    decrypt() {
        return this.getFirstDigits(this.sort(this.getSymbolCount()));
    }

    getSymbolCount(){
        let symbolCount = new Map();
        for (let i = 0; i < this.cipher.length; i++) {
            let symbol = this.cipher[i];
            if (symbolCount.has(symbol))
                symbolCount.set(symbol, symbolCount.get(symbol) + 1);
            else
                symbolCount.set(symbol, 1);
        }
        return symbolCount;
    }

    sort(map) {
        return new Map([...map].sort((a, b) => (a[1] < b[1] && 1) || (a[1] === b[1] ? 0 : -1)));
    }

    getFirstDigits(map, n = 4){
        if(map.size < n)
            return new Error("Incorrect input! Make sure you have entered at least " + n + " symbols!");

        let code = "";
        for (let i = 0; i < n; i++) {
            code += map.keys().next().value;
            map.delete(map.keys().next().value);
        }
        return code;
    }
}