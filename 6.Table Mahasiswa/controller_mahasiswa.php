//Controller adalah bagian MVC yang berisi alur logika program dan juga sebagai penghubung
//antara model dengan view.

<?php
include 'model_mahasiswa.php';
$isiTabelMahasiswa = getTableMahasiswa();
include 'view_mahasiswa.php';
