const About = () => {
  return (
    <div className="min-h-screen px-8 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-6">
        About Us
      </h1>

      <p className="text-lg text-center text-gray-600 leading-relaxed mb-10">
        Welcome to our Placement Preparation Platform, a one-stop destination
        for students aspiring to excel in campus placements and job interviews.
        Our mission is to provide high-quality learning resources, practice
        materials, and career guidance that help students build confidence and
        achieve their professional goals.
      </p>

      <div className=" grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">🎯 Our Mission</h2>
          <p>
            To empower students with the knowledge, skills, and confidence
            required to succeed in placement exams and interviews.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">📚 What We Offer</h2>
          <p>
            Aptitude preparation, reasoning practice, verbal ability training,
            technical interview resources, mock tests, and career guidance.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">🚀 Our Vision</h2>
          <p>
            To become a trusted platform that bridges the gap between academic
            learning and industry expectations.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-3">💡 Why Choose Us?</h2>
          <p>
            Structured learning paths, topic-wise practice, interview-focused
            preparation, and a student-friendly learning experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;