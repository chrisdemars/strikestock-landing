const FounderSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            Meet Our Founders
          </h2>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://avatar.iran.liara.run/public/44"
                  alt="Founder"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-brand-accent"
                />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Steve Lacy
                </h3>
                <p className="text-brand-accent font-semibold mb-4 text-lg">
                  CEO & Founder
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore eveniet expedita quos quod ipsa ab, animi rerum molestias soluta?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero fugit quo ipsum voluptatibus aut.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Lorem, ipsum dolor.
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Lorem, ipsum dolor.
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Loren, ipsum dolor.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src="https://avatar.iran.liara.run/public/44"
                  alt="Founder"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-brand-accent"
                />
              </div>

              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  John Doe
                </h3>
                <p className="text-brand-accent font-semibold mb-4 text-lg">
                  CEO & Founder
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolore eveniet expedita quos quod ipsa ab, animi rerum molestias soluta?
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vero fugit quo ipsum voluptatibus aut.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Lorem, ipsum dolor.
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Lorem, ipsum dolor.
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    Loren, ipsum dolor.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;