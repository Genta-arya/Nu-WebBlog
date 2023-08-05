import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const LatestArticles = () => {
  const [latestArticles, setLatestArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_BASE_URL = "https://api-blog-nu-8w8s.vercel.app/";
  const url = "https://api-blog-nu-8uwk.vercel.app/";

  useEffect(() => {
    fetch("https://api-blog-nu-8w8s-1y9mpvq8b-genta-arya.vercel.app/posting/")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const sortedArticles = data.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          const latestThreeArticles = sortedArticles.slice(0, 3);
          setLatestArticles(latestThreeArticles);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-5">Artikel Terbaru</h1>
      </div>
      <div className="h-96 overflow-y-auto">
        {isLoading ? (
          <div>Loading...</div>
        ) : latestArticles.length > 0 ? (
          <div>
            {latestArticles.map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-lg p-8 rounded-lg mb-4 hover:scale-90 pb-5"
              >
                {article.image ? (
                  <img
                    src={`${url}/${article.image}`}
                    alt="Article Image"
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Placeholder Image"
                    className="w-full h-48 object-cover"
                  />
                )}
                <Link
                  to={`/detail/${article.id}`}
                  className="text-xl font-bold mb-2 hover:text-green-500"
                >
                  <h2 className="text-xl font-bold mt-2">{article.title}</h2>
                </Link>
                <p className="text-gray-500 mb-2">{formatDate(article.date)}</p>
                <p className="text-gray-600 mb-2">{article.author}</p>
                <p className="text-gray-800">
                  {article.isi.substring(0, 100)}.....
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>No articles found.</div>
        )}
      </div>
    </div>
  );
};

export default LatestArticles;
