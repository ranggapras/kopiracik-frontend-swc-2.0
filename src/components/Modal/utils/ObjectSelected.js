const DataSelect = {
  jenis: [{ name: 'Arabica', value: 'arabica'},{ name: 'Robusta', value: 'robusta'}],
  kopi: [{ name: 'Kuat', value: 'kuat'},{ name: 'Sedang', value: 'sedang'},{ name: 'kurang', value: 'kurang'}],
  gula: [{ name: 'Tanpa Gula', value: 'tanpaGula'},{ name: 'Sedang', value: 'sedang'},{ name: 'kurang', value: 'kurang'}],
  es: [{ name: 'Tanpa Es', value: 'tanpaEs'},{ name: 'Sedang', value: 'sedang'},{ name: 'kurang', value: 'kurang'}],
  susu: [{ name: 'Lebih', value: 'lebih'},{ name: 'Sedang', value: 'sedang'},{ name: 'kurang', value: 'kurang'}],
};
const DataMsg = {
  jenis: {
    robusta: '',
    arabica: ''
  },
  kopi: {
    kuat: 'Cita rasa kopi akan lebih terasa, gilingan halus',
    sedang: '',
    kurang: 'Tidak terlalu pahit, gilingan medium,'
  },
  gula: {
    tanpaGula: 'Sugar-free, cocok untuk yang sedang diet',
    kurang: 'Takaran gula akan dikurangi 1/2',
    sedang: '',
  },
  es: {
    tanpaEs: 'Tanpa Es',
    kurang: 'Mengurangi Takaran Es',
    sedang: '',
  },
  susu: {
    lebih: 'Untuk meminimalisir rasa pahit kopi dan menambah rasa manis',
    kurang: '',
    sedang: '',
  }
};

export { DataSelect, DataMsg };
