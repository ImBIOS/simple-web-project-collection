<?php
 // buat koneksi dengan database mysql
 function buatKoneksi(){
 $dbhost = "localhost";
 $dbuser = "root";
 $dbpass = "";
 $dbname = "kampusku";
 return mysqli_connect($dbhost,$dbuser,$dbpass,$dbname);
}

 // ambil tabel mahasiswa
 function getTableMahasiswa() {
 $link = buatKoneksi();
 $query = "SELECT * FROM mahasiswa";
 $result = mysqli_query($link, $query);
 // ambil semua isi tabel ke dalam bentuk array 2 Dimensi
  $hasil = mysqli_fetch_all($result, MYSQLI_ASSOC);
  return $hasil;
}
