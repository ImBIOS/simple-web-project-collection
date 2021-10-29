const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];

const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

const desk = document.querySelector(".deskripsi h3");
const kotak = document.querySelectorAll(".kotak h3");

// Ubah tanggalnya disini
const date = new Date(2021, 10, 31, 23, 59, 59);

const tanggal = date.getDate();
const bln = bulan[date.getMonth()];
const tahun = date.getFullYear();
const hri = hari[date.getDay()];

desk.textContent = `Hacktoberfest akan berakhir pada ${hri}, ${tanggal} ${bln} ${tahun}`;

const deadline = date.getTime();

function time() {
  let t = deadline - new Date().getTime();

  let satuHari = 24 * 60 * 60 * 1000;
  let satuJam = 60 * 60 * 1000;
  let satuMenit = 60 * 1000;
  let satuDetik = 1000;

  let day = Math.floor(t / satuHari);
  let hour = Math.floor((t % satuHari) / satuJam);
  let minute = Math.floor((t % satuJam) / satuMenit);
  let second = Math.floor((t % satuMenit) / satuDetik);

  function format(jam) {
    if (jam < 10) {
      jam = `0${jam}`;
    }
    return jam;
  }

  const values = [day, hour, minute, second];

  kotak.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    kotak.forEach((item) => {
      item.innerHTML = "00";
    });
    desk.textContent = "Hacktoberfest telah berakhir!";
  }
}

const countdown = setInterval(time, 1000);

time();