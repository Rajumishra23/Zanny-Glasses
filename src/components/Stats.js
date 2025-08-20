const StatsSection = () => {
  return (
   <section className="bg-black text-white py-10 px-4 md:px-16 relative overflow-hidden">
      {/* Gradient Glow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-700/20 via-yellow-500/10 to-transparent blur-2xl opacity-40" />
      </div>


      {/* Stats Content */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {/* Stat Item */}
        <div>
          <h3 className="text-4xl font-bold text-white">20K+</h3>
          <p className="text-sm text-gray-300 mt-2">Satisfied Clients</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">40K+</h3>
          <p className="text-sm text-gray-300 mt-2">Products Sold</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">10+</h3>
          <p className="text-sm text-gray-300 mt-2">Years Experience</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-white">50+</h3>
          <p className="text-sm text-gray-300 mt-2">Awards Winning</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;