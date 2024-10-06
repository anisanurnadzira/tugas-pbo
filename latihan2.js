class Kapal {
    constructor(nama, jenis, kapasitas, panjang, lebar) {
        this.nama = nama;
        this.jenis = jenis;
        this.kapasitas = kapasitas;
        this.panjang = panjang;
        this.lebar = lebar;
    }

    infoKapal() {
        return `Kapal ini bernama ${this.nama}, yang berjenis ${this.jenis} dengan kapasitas ${this.kapasitas} orang, memiliki dimensi panjang ${this.panjang} meter dan lebar ${this.lebar} meter.`;
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
}

let kapalPenumpang = new KapalPenumpang("Bidiono", "Ferry", 400, 200, 100, 300);
let kapalKargo = new KapalKargo("Jemla", "Cargo", 1000, 300, 150, 20000);

console.log(kapalPenumpang.infoKapal());
console.log(kapalPenumpang.infoPenumpang());
console.log(kapalPenumpang.volumeKapal());
console.log(kapalPenumpang.periksaKapasitas(400));

console.log(kapalKargo.infoKapal());
console.log(kapalKargo.infoMuatan());
console.log(kapalKargo.volumeKapal());
console.log(kapalKargo.periksaKapasitas(900));