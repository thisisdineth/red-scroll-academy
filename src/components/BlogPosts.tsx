
export const BlogPosts = () => {
  const posts = [
    {
      title: "Mastering Calculus: A Comprehensive Guide",
      excerpt: "Learn the fundamentals of calculus with our step-by-step approach...",
      category: "Mathematics",
      date: "April 20, 2025",
      image: "/placeholder.svg",
    },
    {
      title: "Understanding Chemical Reactions",
      excerpt: "Explore the basics of chemical reactions and their real-world applications...",
      category: "Science",
      date: "April 18, 2025",
      image: "/placeholder.svg",
    },
    {
      title: "Effective Study Techniques",
      excerpt: "Discover proven methods to enhance your learning and retention...",
      category: "Study Tips",
      date: "April 15, 2025",
      image: "/placeholder.svg",
    },
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.title} className="bg-white rounded-lg overflow-hidden shadow-lg animate-fade-in">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-primary text-sm font-medium mb-2">{post.category}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="text-sm text-gray-500">{post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
