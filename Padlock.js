export class Padlock {

    constructor(cipher) {
        this.cipher = cipher;
        this.symbols = new Map();
    }

    decrypt() {

        // GET SYMBOL COUNT

        for (let i = 0; i < this.cipher.length; i++) {

            if (this.symbols.has(this.cipher[i]))
                this.symbols.set(this.cipher[i], this.getCount(this.cipher[i]) + 1);
            else
                this.symbols.set(this.cipher[i], 1);

        }
        console.log(this.symbols);

        let mapAsc = new Map([...this.symbols.entries()].sort());
        console.log(mapAsc);

        // SORT

        let b =  new Map([...this.symbols].sort((a, b) => (a[1] < b[1] && 1) || (a[1] === b[1] ? 0 : -1)))
        console.log(b);

        // GET FIRST 4

        let code = "";
        for(let i = 0; i < 4; i ++) {
            code += b.keys().next().value;
            b.delete(b.keys().next().value);
        }
        console.log(code);


    }

    getCount(symbol) {
        return this.symbols.get(symbol);
    }


}