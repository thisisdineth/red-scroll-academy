
import { Hero } from "@/components/Hero";
import { Founders } from "@/components/Founders";
import { Features } from "@/components/Features";
import { BlogPosts } from "@/components/BlogPosts";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Founders />
      <Features />
      <BlogPosts />
      <Footer />
    </div>
  );
};

export default Index;
