import React, { useState } from "react";
import Navbar from "../Blog/Navbars";
import Footer from "../Blog/Footer";
import { Link } from "react-router-dom";
import gambar from "../../../Asset/gmbr1.jpg";
import gambar1 from "../../../Asset/gambar2.jpg";

const Sejarah = () => {
  const [modalImage, setModalImage] = useState(null);

  const images = [gambar, gambar1];

  const openModal = (index) => {
    setModalImage(images[index]);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold mb-5">Sejarah NU Ketapang</h1>
        </div>
        <div className="border p-5 text-justify">
          <p>
            Perjalanan periodisasi kepengurusan NU Ketapang dari masa ke masa
            sejak awal berdirinya, kapan dan siapa tokoh pendirinya, juga siapa
            saja orang-orang yang terlibat kala itu, hingga kini belum ada
            catatan sejarah yang pasti. Sebab sampai sekarang belum ada
            ditemukan berupa dokumen atau saksi sejarah yang bisa dimintai
            keterangan untuk memastikan lahirnya NU di Ketapang.
          </p>
          <br />
          <p>
            Kepengurusan NU di Ketapang mulai tercatat sejak masa kepengurusan
            H. Syarkawi. Sungguh pun begitu nama-nama yang masuk dalam struktur
            PCNU Ketapang tidak terdokumentasi dengan baik. Artinya tidak
            satupun arsip yang bisa menunjukkan siapa mereka yang masuk didalam
            struktur kepengurusan kala itu. Pun demikian pada periode
            selanjutnya, sampai dengan masa kepengurusan baru dengan terpilihnya
            Kyai Moh. Faisol Maksum (sekarang Rais Syuriyah) sebagai Ketua
            Tanfidziah pada Konfercab ke-8, juga sama, tidak ada arsip satupun.
          </p>
          <div className="flex flex-col items-center m-12 border p-2 ">
            <img
              src={gambar}
              alt="Sejarah NU Ketapang"
              className="m-5 cursor-pointer"
              onClick={() => openModal(0)}
            />
            <div className="border p-2">
              <p className="text-center mt-4 text-sm text-gray-600 ">
                Daftar angka hasil pemilih DPRD tahun 1958 dan 1963 lima partai
                dari tujuh kota/kabupaten di Kalimantan Barat
              </p>
              <p className="text-center mt-2 text-sm text-gray-600 ">
                Sumber Gambar: Agus Kurniawan dari buku Regime change and ethnic
                politic in Indonesia
              </p>
            </div>
          </div>
          <p>
            Jika dirunut, sejak kapan dan tahun berapa perkiraan mulai
            terbentuknya NU Ketapang, barangkali bisa dibaca melalui perhitungan
            konferensi NU Ketapang yang terakhir. Diketahui, bahwa saat ini
            Konferensi Cabang (Konfercab) NU Ketapang sudah memasuki ke-12 pada
            tahun 2019. Jika dalam satu periode terselenggaranya konfercab NU
            secara rutin dalam jangka lima tahun, berarti NU berdiri di bumi
            Kayong ini adalah 60 tahun yang lalu, yaitu 15 tahun setelah
            Indonesia merdeka, tepatnya pada tahun 1960. Penetapan tahun
            berdirinya NU Ketapang pada tahun 1960 di atas hanya berdasar asumsi
            atau perkiraan. Oleh karena perkiraan itu bisa salah atau juga
            benar, tergantung rentang waktu Konfercab dilaksanakan, apakah
            kurang dari lima tahun atau lebih dari lima tahun. Jika demikian
            yang terjadi, maka bisa jadi NU Ketapang lahir setelah tahun 1960
            atau sebelumnya.
          </p>
          <br></br>
          <p>
            Pada tahun 1963 NU sudah ada di Ketapang. Hal itu diketahui dari
            data adanya keterlibatan NU Ketapang di kancah politik praktis yang
            bernama Partai NU. Berdasarkan buku Regime Change and Ethnic Politic
            In Indonesia, Dayak Politics of West Kalimantan ditulis Taufik
            Tanasaldy (sumber gambar data Penulis peroleh dari Sejarahwan
            Ketapang Agus Kurniawan, beliau Ketua LTN PCNU Ketapang). Bahwa NU
            Ketapang pada tahun pemilu 1963 sudah ada keterwakilannya di
            legislatif sebanyak dua orang. Hanya tidak ada penyebutan nama,
            siapa mereka anggota dewan yang terpilih.
          </p>
          <div className="flex flex-col items-center m-12 border p-2 ">
            <img
              src={gambar1}
              alt="Sejarah NU Ketapang"
              className="m-5 cursor-pointer"
              onClick={() => openModal(0)}
            />
            <div className="border p-2">
              <p className="text-center mt-4 text-sm text-gray-600 ">
                Pada tahun 1958 Kabupaten Ketapang pernah memiliki Bupati dari
                NU. Dia bernama Hercan Yamani. Satu-satunya Bupati yang diusung
                Partai NU dari tujuh kota/kabupaten di Kalimantan Barat hanya
                Ketapang
              </p>
              <p className="text-center mt-2 text-sm text-gray-600 ">
                Sumber Gambar: Agus Kurniawan dari buku Regime change and ethnic
                politic in Indonesia
              </p>
            </div>
          </div>
          <p>
            Dalam catatan buku yang sama, pada tahun 1958 Kabupaten Ketapang
            pernah memiliki Bupati dari NU. Dia bernama Hercan Yamani,
            satu-satunya Bupati yang dipilih dari Partai NU, dari tujuh
            Kabupaten di Kalimantan Barat hanya di Ketapang. Data ini menunjukan
            bahwa basis NU pada tahun 1958 di Kabupaten Ketapang sudah mengakar
            dan memasyarakat. Hanya saja pertanyaannya, apakah organisasi
            PCNU-nya sudah terbentuk atau belum. Pertanyaan inilah yang belum
            terjawab sampai sekarang.
          </p>
          <br></br>
          <p>
            Dari sisi amaliyah diyakini NU hadir di bumi Kayong ini sebelum
            Indonesia merdeka, bahkan jauh sebelum itu NU sudah memasyarakat.
            Para pendahulu penyebar Islam di Ketapang, atau ulama-ulama Ketapang
            yang menuntut ilmu agama di Jawa dan tempat lain, diyakini mereka
            adalah penganut faham aqidah Ahlussunah wal Jama'ah. Pembuktian itu
            bisa disaksikan, bahwa sampai saat ini amaliyah yang diamalkan
            secara turun temurun terutama oleh masyarakat lokal di daerah ini
            adalah termasuk amaliyah-amaliyah yang selama ini dibid'ahkan oleh
            mereka yang pemahaman keagamanya menganggap dirinya paling benar.
          </p>
          <br></br>
          <p>
            Penulis: M. Syafi'ie Huddin<br></br> Wakil Ketua Tanfidziyah NU
            Ketapang / Redaktur Suara NU Ketapang
          </p>
        </div>
        {modalImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center"
            onClick={closeModal}
          >
            <img
              src={modalImage}
              alt="Sejarah NU Ketapang"
              className="max-w-3/4 max-h-3/4"
            />
          </div>
        )}
      
      </div>
      <Footer />
    </div>
  );
};

export default Sejarah;
