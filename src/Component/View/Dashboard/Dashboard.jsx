import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, PencilIcon, ArchiveIcon } from "@heroicons/react/solid";
const Dashboard = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const email = localStorage.getItem("email");
  const id = localStorage.getItem("id");
  const username = localStorage.getItem("username");
  const navigate = useNavigate();

  const handlePostingArtikelClick = () => {
    // Navigate to the posting artikel page
    navigate("/posting-artikel");
  };

  const handleEditArtikelClick = () => {
    // Navigate to the edit artikel page
    navigate("/blog");
  };

  const handleArsipClick = () => {
    // Navigate to the arsip page
    navigate("/arsip");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    navigate("/Login-admin");
  };

  useEffect(() => {
    if (isLoggedIn !== "true") {
      navigate("/Login-admin");
    }
  }, [isLoggedIn, navigate]);

  if (isLoggedIn !== "true") {
    return null;
  }

  const handleGoToBlog = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
          <div>
            <p className="text-gray-600">
              Welcome, <br></br><span className="font-semibold">{username}</span> (
              {email})
            </p>
            <button
              className="text-gray-600 mt-2 py-2 px-4 rounded bg-gray-300 hover:bg-gray-400 transition duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      {/*menu section */}
      <main className="container mx-auto py-6 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 shadow">
            <h2 className="text-lg font-semibold mb-4">Posting Artikel</h2>
            <button
              className=" bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={handlePostingArtikelClick}
            >
              <PlusIcon className="h-5 w-5 mr-2" />
            </button>
          </div>
          <div className="bg-white p-4 shadow">
            <h2 className="text-lg font-semibold mb-4">Edit Artikel</h2>
            <button
              className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleEditArtikelClick}
            >
              <PencilIcon className="h-5 w-5 mr-2" />
            </button>
          </div>
          <div className="bg-white p-4 shadow">
            <h2 className="text-lg font-semibold mb-4">Arsip</h2>
            <button
              className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
              onClick={handleArsipClick}
            >
              <ArchiveIcon className="h-5 w-5 mr-2" />
            </button>
          </div>
        </div>

        <div className="mt-8">
          <button
            className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            onClick={handleGoToBlog}
          >
            Ke halaman Blog
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
