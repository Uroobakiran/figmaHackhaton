import Image from "next/image";

const Blogs = () => {
  const blogData = [
    { image: "/img/blog1.png", title: "Going all-in with millennial design", date: "17 Oct 2022", readTime: "5 min" },
    { image: "/img/blog2.png", title: "Going all-in with millennial design", date: "17 Oct 2022", readTime: "5 min" },
    { image: "/img/blog3.png", title: "Going all-in with millennial design", date: "17 Oct 2022", readTime: "5 min" },
  ];

  return (
    <div className="bg-white px-4 sm:px-6 md:px-8 py-16 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Blogs</h2>
      <p className="text-gray-600 mb-8">
        Find a bright ideal to suit your taste with our great selection
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              height={393}
              width={393}
              className="w-full h-auto object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-bold text-lg">{blog.title}</h3>
              <p className="text-gray-500 text-sm mt-2">
                {blog.readTime} • {blog.date}
              </p>
              <button className="mt-auto text-blue-500 hover:underline">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 text-blue-500 hover:underline">View All Posts</button>
    </div>
  );
};

export default Blogs;
