import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Nairobi",
    },
    {
      id: 2,
      title: "Kisumu",
    },
    {
      id: 3,
      title: "Mombasa",
    },
    {
      id: 4,
      title: "Embu",
    },
    {
      id: 5,
      title: "Nyeri",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
