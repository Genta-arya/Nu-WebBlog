import { useState, useRef } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// const API_BASE_URL = "http://192.168.1.6:3001";
import logo from "../../../Asset/Header.png";
const API_BASE_URL = "https://api-blog-nu-8w8s.vercel.app";

const PostingArtikel = () => {
  const [title, setTitle] = useState("");
  const [isi, setIsi] = useState("");
  const [category, setCategory] = useState("");
  const [gambar, setThumbnail] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
  ];

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnail(file); // Simpan file gambar langsung ke state thumbnail
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mengambil teks dari konten HTML di ReactQuill menggunakan DOM API
    const plainTextIsi = document.createElement("div");
    plainTextIsi.innerHTML = isi;
    const isiPlainText = plainTextIsi.textContent;

    // Buat objek data dari state form
    const data = new FormData();
    data.append("title", title);
    data.append("isi", isiPlainText);
    data.append("category", category);
    data.append("author", localStorage.getItem("username"));
    data.append("image", gambar); // Menambahkan gambar ke FormData

    try {
      // Make the POST request using fetch
      const response = await fetch(`${API_BASE_URL}/posting`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        // Handle error response
        throw new Error("Network response was not ok");
      }

      // Reset fields setelah data berhasil disimpan
      setTitle("");
      setIsi("");
      setCategory("");
      setThumbnail(null);
      console.log("Data berhasil disimpan");

      // Show the countdown pop-up and navigate after 3 seconds
      setCountdown(3);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      console.log("Terjadi kesalahan saat menyimpan data.");
    }
  };

  // Referensi untuk akses editor Quill
  const quillRef = useRef();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <img
          src={logo}
          alt="Logo"
          className="w-64 h-auto object-contain mx-auto mb-5"
        />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="author"
              className="block text-gray-700 font-semibold mb-1"
            >
              Author:
            </label>
            <input
              type="text"
              id="author"
              value={localStorage.getItem("username")}
              disabled
              className="w-full border border-gray-300 px-4 py-2 rounded bg-gray-200"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-gray-700 font-semibold mb-1"
            >
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-semibold mb-1"
            >
              Category:
            </label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="thumbnail"
              className="block text-gray-700 font-semibold mb-1"
            >
              Thumbnail:
            </label>
            {gambar && (
              <img
                src={URL.createObjectURL(gambar)} // Tampilkan gambar yang dipilih menggunakan URL.createObjectURL
                alt="Thumbnail"
                className="w-24 h-24 mb-2 object-cover rounded"
              />
            )}
            <input
              type="file"
              id="thumbnail"
              onChange={handleThumbnailChange}
              accept="image/*"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="isi"
              className="block text-gray-700 font-semibold mb-1"
            >
              Isi:
            </label>
            <ReactQuill
              value={isi}
              onChange={setIsi}
              modules={quillModules}
              formats={quillFormats}
              ref={quillRef}
              className="w-full max-w-4xl h-80 border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none mt-12"
          >
            Posting
          </button>
        </form>
      </div>
      {countdown > 0 && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-black">
          <div className="bg-white p-4 rounded shadow-md">
            <p>Posting Berhasil, akan kembali ke halaman dashboard</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostingArtikel;
