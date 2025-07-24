import React from 'react';

const QuoteSection = () => {
  return (
    <section className="bg-sbie-dark-green py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <blockquote className="relative">
          <p className="text-3xl md:text-4xl font-serif font-bold text-white leading-relaxed">
            "A única diferença entre o medo e a coragem é a <span className="text-glow bg-clip-text text-transparent bg-gradient-to-r from-sbie-copper to-yellow-300">ação</span>!"
          </p>
          <footer className="mt-6">
            <p className="text-lg font-semibold text-white/90 tracking-wider">— RODRIGO FONSECA</p>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
