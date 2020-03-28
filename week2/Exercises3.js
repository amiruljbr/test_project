var nama='Bakti';//Input Nama
var peran='Tabib';//Input Peran

if (nama == false){ //Mengecek bahwa nama harus diisi
  console.log("Nama harus diisi!");
} else if (peran == false) { //mengecek bahwa peran harus diisi
  console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (peran == 'Ksatria'){ //Output untuk peran Ksatria
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran == 'Tabib'){ //Output untuk peran Tabib
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if (peran == 'Penyihir'){ //output untuk peran Penyihir
  console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
  console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
} else { //Output jika selain peran Ksatria, Tabib, Penyihir
  console.log(`Silahkan pilih peran yang lain, ${nama}. Kamu dapat memilih peran:`);
  console.log('1. Ksatria');
  console.log('2. Tabib');
  console.log('3. Penyihir');
}