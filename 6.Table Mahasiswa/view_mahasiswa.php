<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Tabel Mahasiswa</title>
    
     <style>
        /* ====GLOBAL STYLE==== */
        body {
            background-color: #F8F8F8;
        }

        div.container {
            width: 960px;
            padding: 10px 50px 50px;
            background-color: white;
            margin: 20px auto;

            box-shadow: 1px 0px 10px, -1px 0px 10px;
        }

        h1 {
            text-align: center;
            font-family: Cambria, "Times New Roman", serif;
            clear: both;
        }

        /* ======TABLE====== */
        table {
            border-collapse: collapse;
            border-spacing: 0;
            border: 1px black solid;
            width: 100%
        }

        th,
        td {
            padding: 8px 15px;
            border: 1px black solid;
        }

        tr:nth-child(2n+3) {
            background-color: #F2F2F2;
        }
    </style>
   
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
