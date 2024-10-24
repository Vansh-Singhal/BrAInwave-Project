import React from 'react';
import Header from '../components/Header/Header';
import BlogPageHeader from '../components/BlogPageHeader/BlogPageHeader';
import BlogPosts from '../components/BlogPosts/BlogPosts';
import Categories from '../components/BlogCategory/Categories';
import PopularPosts from '../components/PopularBlog/PopularPosts';
import Footer from '../components/Footer/Footer';

const BlogPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-100 to-white">
      <BlogPageHeader/>
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-8">
          <BlogPosts />
        </section>
        <aside className="space-y-8">
          <Categories />
          <PopularPosts />
        </aside>
      </main>
    </div>
  );
};

export default BlogPage;
