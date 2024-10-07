class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ini bernama ${this.nama}, yang berjenis ${this.jenis} 
        dengan kapasitas ${this.kapasitas} orang, memiliki dimensi panjang ${this.panjang} meter
        dan lebar ${this.lebar} meter.`;
    }

    volumeKapal() {
        return `Volume kapal ini adalah ${this.panjang * this.lebar} meter persegi.`;
    }

    periksaKapasitas(muatan) {
        if (muatan > this.kapasitas) {
            return `Muatan terlalu besar. Kapasitas maksimum adalah ${this.kapasitas}.`;
        } else {
            return `Muatan cukup. Kapal dapat menampung muatan sebesar ${muatan}.`;
        }
    }
}

class KapalPenumpang extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, jumlahPenumpang) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.jumlahPenumpang = jumlahPenumpang;
    }

    infoPenumpang() {
        return `Kapal ini dapat mengangkut ${this.jumlahPenumpang} penumpang.`;
    }

    // polymorphism: Override infoKapal
    infoKapal() {
        return super.infoKapal() + ` Selain itu, 
        kapal ini juga dapat mengangkut ${this.jumlahPenumpang} penumpang.`;
    }
}

// class KapalKargo yang mewarisi dari Kapal
class KapalKargo extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, kapasitasMuatan) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.kapasitasMuatan = kapasitasMuatan;
    }

    infoMuatan() {
        return `Kapal ini dapat mengangkut muatan sebesar ${this.kapasitasMuatan} ton.`;
    }

    // polymorphism: Override infoKapal
    infoKapal() {
        return super.infoKapal() + ` Kapasitas muatan kapal ini adalah ${this.kapasitasMuatan} ton.`;
    }

}

class KapalPesiar extends KapalPenumpang {
    constructor(nama, jenis, kapasitas, panjang, lebar, jumlahPenumpang, fasilitas) {
        super(nama, jenis, kapasitas, panjang, lebar, jumlahPenumpang);
        this.fasilitas = fasilitas;
    }

    infoFasilitas() {
        return `Kapal ini dilengkapi dengan fasilitas: ${this.fasilitas.join(", ")}.`;
    }

    // polymorphism: Override infoKapal
    infoKapal() {
        return super.infoKapal() + ` Fasilitas yang tersedia: ${this.fasilitas.join(", ")}.`;
    }
}

class KapalLaut extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, kecepatan) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.kecepatan = kecepatan;
    }

    infoKecepatan() {
        return `Kapal ini memiliki kecepatan maksimum ${this.kecepatan} knot.`;
    }

    // polymorphism: Override infoKapal
    infoKapal() {
        return super.infoKapal() + ` Kapal ini dapat berlayar dengan kecepatan maksimum
         ${this.kecepatan} knot.`;
    }
}

class KapalPerang extends Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar, jumlahSenjata) {
        super(nama, jenis, kapasitas, panjang, lebar);
        this.jumlahSenjata = jumlahSenjata;
    }

    infoSenjata() {
        return `Kapal ini dilengkapi dengan ${this.jumlahSenjata} senjata.`;
    }

    // polymorphism: Override infoKapal
    infoKapal() {
        return super.infoKapal() + ` Kapal ini dilengkapi dengan ${this.jumlahSenjata} senjata.`;
    }
}

let kapalPenumpang = new KapalPenumpang("Bidiono", "Ferry", 400, 200, 100, 300);
let kapalKargo = new KapalKargo("Jemla", "Cargo", 1000, 300, 150, 20000);
let kapalPesiar = new KapalPesiar("Oasis of the Seas", "Cruise", 2000, 300, 40, 1500,
     ["kolam renang", "restoran", "spa"]);
let kapalLaut = new KapalLaut("Jatra 3", "Ocean", 3000, 269, 28, 24);
let kapalPerang = new KapalPerang("Kesatria", "Destroyer", 300, 250, 50, 10);

console.log(kapalPenumpang.infoKapal());
console.log(kapalPenumpang.infoPenumpang());
console.log(kapalPenumpang.volumeKapal());
console.log(kapalPenumpang.periksaKapasitas(300));

console.log(kapalKargo.infoKapal());
console.log(kapalKargo.infoMuatan());
console.log(kapalKargo.volumeKapal());
console.log(kapalKargo.periksaKapasitas(900));

console.log(kapalPesiar.infoKapal());
console.log(kapalPesiar.infoFasilitas());
console.log(kapalPesiar.volumeKapal());

console.log(kapalLaut.infoKapal());
console.log(kapalLaut.infoKecepatan());

console.log(kapalPerang.infoKapal());
console.log(kapalPerang.infoSenjata());
console.log(kapalPerang.volumeKapal());