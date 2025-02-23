export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Learn about our mission and the team behind our success.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg text-gray-500">
                We strive to create innovative solutions that make a difference in people's lives. Our commitment to excellence and customer satisfaction drives everything we do.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our Values</h3>
              <p className="mt-4 text-lg text-gray-500">
                Innovation, integrity, and customer focus are at the heart of our organization. We believe in creating lasting relationships with our clients and partners.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <img
            className="rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
            alt="Team meeting"
          />
        </div>
      </div>
    </div>
  );
}