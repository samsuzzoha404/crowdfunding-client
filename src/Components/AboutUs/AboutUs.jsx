const AboutUs = () => {
    return (
      <section className="relative py-16">
        <div className="absolute pointer-events-none"></div>
        <div className="relative mx-auto text-center space-y-8">
          {/* Title */}
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            About <span className="">Crowdcube</span>
          </h2>
          {/* Subtitle */}
          <p className="text-lg lg:text-xl dark:text-gray-400">
            Empowering visionaries to bring their dreams to life. At Crowdcube, we bridge the gap between ideas and resources, creating a vibrant community of creators and supporters.
          </p>
  
          {/* Content Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">🚀 Our Mission</h3>
              <p className="dark:text-gray-400">
                To empower creators, startups, and dreamers by providing them a platform to turn their ideas into reality through the power of collective contributions.
              </p>
            </div>
  
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">🌍 Our Vision</h3>
              <p className="dark:text-gray-400">
                A world where innovation and creativity thrive, fueled by a community-driven approach to funding and collaboration.
              </p>
            </div>
  
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-semibold mb-4">🤝 Our Values</h3>
              <p className="dark:text-gray-400">
                Integrity, transparency, inclusivity, and a commitment to building lasting relationships between creators and supporters.
              </p>
            </div>
          </div>
  
          {/* Call to Action */}
          <div>
            <a
              href="/campaigns"
              className="btn btn-outline text-gray-700 dark:text-white"
            >
              Explore Campaigns
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  