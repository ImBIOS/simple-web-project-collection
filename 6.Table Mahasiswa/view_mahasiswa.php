<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Tabel Mahasiswa</title>
    
   
</head>

<body>
    <div class="container">
        <h1>Data Mahasiswa</h1>
        <table border="1">
            <tr>
                <th>NIM</th>
                <th>Nama</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Fakultas</th>
                <th>Jurusan</th>
                <th>IPK</th>
            </tr>
            <?php
foreach ($isiTabelMahasiswa as $data ) {
 // konversi date MySQL (yyyy-mm-dd) menjadi dd-mm-yyyy
 $tanggal_php = strtotime($data["tanggal_lahir"]);
 $tanggal = date("d - m - Y", $tanggal_php);

 echo "<tr>";
 echo "<td>$data[nim]</td>";
 echo "<td>$data[nama]</td>";
 echo "<td>$data[tempat_lahir]</td>";
 echo "<td>$tanggal</td>";
 echo "<td>$data[fakultas]</td>";
 echo "<td>$data[jurusan]</td>";
 echo "<td>$data[ipk]</td>";
 echo "</tr>";
 }
 ?>


        </table>
    </div>
</body>

</html>
