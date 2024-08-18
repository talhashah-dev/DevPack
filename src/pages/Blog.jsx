import { ThinkPadImg3, AccessoriesImg, DevNeedsImg } from "../assets/export";

const blogPosts = [
  {
    id: 1,
    title: "The Essential Tools Every Developer Needs",
    summary:
      "Explore the must-have tools that every developer should have in their toolkit. From laptops to software, find out what's essential.",
    image: DevNeedsImg,
    author: "John Doe",
    date: "August 18, 2024",
    link: "#",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Laptop for Development",
    summary:
      "A guide to selecting the best laptop for your development needs, considering performance, portability, and budget.",
    image: ThinkPadImg3,
    author: "Fatima",
    date: "August 10, 2024",
    link: "#",
  },
  {
    id: 3,
    title: "Top Accessories to Boost Your Productivity",
    summary:
      "Discover the accessories that can help you stay productive and comfortable while coding, whether at home or on the go.",
    image: AccessoriesImg,
    author: "Ali",
    date: "August 05, 2024",
    link: "#",
  },
];

const BlogPage = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">
            DevPack Blog
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Stay updated with the latest tips, reviews, and insights for
            developers.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-gray-600">{post.summary}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                  <a
                    href={post.link}
                    className="text-indigo-600 hover:text-indigo-900 font-medium"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
