const Instagram = () => {
  return (
    <div
      className="bg-[url('/img/instagramBanner.png')] bg-cover bg-center py-16 text-center text-black"
    >
      <div className="px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Instagram</h2>
        <p className="text-lg md:text-xl font-medium mb-8">
          Follow our store on Instagram
        </p>
        <button className="px-8 py-3 bg-[#FAF4F4] text-black rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Instagram;
