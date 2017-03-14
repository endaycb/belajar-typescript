class produk{
    private _kode: String;
    private _nama: String;
    private _harga: Number;

    get kode(): String{
        return this._kode;
    }

    set kode(_kode: String){
        this._kode = _kode;
    }

    get nama(): String{
        return this._nama;
    }

    set nama(_nama: String){
        this._nama = _nama;
    }

    get harga(): Number{
        return this._harga;
    }

    set harga(_harga: Number){
        this._harga = _harga;
    }
    
}

var p = new produk();
p.kode = "001";
p.nama = "bakwan";
p.harga = 1000;

console.log("kode :"+p.kode);
console.log("nama :"+p.nama);
console.log("harga :"+p.harga);