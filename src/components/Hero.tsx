
import { Calculator, BookOpen, Flask, Atom } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8f9fa_100%)] opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="flex gap-4 text-primary animate-fade-in">
            <Calculator className="w-8 h-8" />
            <BookOpen className="w-8 h-8" />
            <Flask className="w-8 h-8" />
            <Atom className="w-8 h-8" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 animate-fade-in">
            Welcome to <span className="text-primary">Apilageai</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl animate-fade-in delay-100">
            Your premier destination for mathematics, science, and comprehensive study materials. 
            Unlock your potential with our expertly curated educational resources.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors animate-fade-in delay-200">
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
};
