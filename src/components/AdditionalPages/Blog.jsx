import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

 
const blogPosts = [
  {
    id: 1,
    title: "Top 10 In-Demand Tech Skills to Learn in 2026",
    excerpt:
      "Discover the most sought-after skills in the job market this year, from AI and cloud computing to cybersecurity and full-stack development.",
    author: "Sarah Rahman",
    date: "January 02, 2026",
    readTime: "8 min read",
    category: "Career",
    image: "https://i.ibb.co.com/vyz7G8K/images.jpg",
  },
  {
    id: 2,
    title: "How to Build Your First React Project from Scratch",
    excerpt:
      "A complete step-by-step guide for beginners to create a modern web app using React, Tailwind CSS, and best practices.",
    author: "Arif Hossain",
    date: "December 28, 2025",
    readTime: "12 min read",
    category: "Development",
    image: "https://i.ibb.co.com/YBnWqTSZ/download.jpg",
  },
  {
    id: 3,
    title: "The Future of Online Learning: Trends to Watch",
    excerpt:
      "Explore emerging trends in e-learning, including AI-powered personalization, micro-credentials, and immersive technologies.",
    author: "E-Learn Team",
    date: "December 20, 2025",
    readTime: "6 min read",
    category: "Education",
    image: "https://i.ibb.co.com/WNJNfKPh/download-1.jpg",
  },
  {
    id: 4,
    title: "Mastering UI/UX Design Principles in 2026",
    excerpt:
      "Learn the core principles of modern user interface and experience design that every designer and developer should know.",
    author: "Nisha Ahmed",
    date: "December 15, 2025",
    readTime: "10 min read",
    category: "Design",
    image: "https://i.ibb.co.com/Lz7GZ6Ng/download-2.jpg",
  },
];

const Blog = () => {
  return (
    <section className="w-full py-20">
      <div className="w-11/12 max-w-6xl mx-auto">
        <div className="relative mb-16 text-center">
          <div className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
          <div className="relative inline-block bg-white px-10 py-4 rounded-full border border-purple-200 shadow-md z-10">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="text-2xl text-black md:text-3xl font-bold tracking-wide"
            >
              Our Latest <span className="text-purple-600">Insights</span>
            </motion.h2>
          </div>
        </div>

        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl max-w-4xl mx-auto leading-relaxed"
          >
            Stay updated with the latest trends in technology, education, and
            career development. Our blog features expert insights, tutorials,
            and tips to help you succeed in your learning journey.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group   rounded-3xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
               
              <div className="h-56 bg-gradient-to-br from-purple-400 to-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-purple-700 font-semibold text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-lg mb-6 line-clamp-3">{post.excerpt}</p>

                
                <div className="flex items-center justify-between text-sm mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" strokeWidth={1.8} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" strokeWidth={1.8} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" strokeWidth={1.8} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                
                <button className="flex items-center gap-3 font-semibold text-purple-600 group-hover:gap-5 transition-all duration-300">
                  Read More
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

   
        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
