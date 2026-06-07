import { Link } from "react-router-dom";
function App() {
  return (
    <div className="min-h-screen animated-bg">
      <div className="min-h-screen animated-bg relative overflow-hidden">
  <div className="bubble bubble1"></div>
  <div className="bubble bubble2"></div>
  <div className="bubble bubble3"></div>

  <header className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2g p-4 font-bold">Placement Path</header>
  <section className="max-w-4xl mx-auto px-6 py-12">
  <h2 className="text-4xl font-bold text-center mb-6">
    About Us
  </h2>

  <p className="text-lg text-center text-black-600 leading-relaxed">
    Our Placement Preparation Platform is designed to help students build a strong foundation
    and excel in campus placements. We provide comprehensive learning resources, aptitude and
    reasoning practice, technical interview preparation, mock tests, and career guidance to
    support every stage of the placement journey.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
    <div className="p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-2">📚 Learning Resources</h3>
      <p>
        Learn concepts from basic to advanced levels with structured study materials.
      </p>
      <Link
  to="/learning-resource"
  className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
>
  View More →
</Link>

    </div>

    <div className="p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-2">📝 Practice Questions</h3>
      <p>
        Improve problem-solving skills through topic-wise practice questions and exercises.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-2">🎯 Mock Tests</h3>
      <p>
        Evaluate your performance with placement-oriented mock tests and assessments.
      </p>
    </div>

    <div className="p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-2">💼 Interview Guidance</h3>
      <p>
        Prepare for technical and HR interviews with tips, questions, and expert guidance.
      </p>
    </div>
  </div>
</section>
</div>

<p className="text-lg text-gray-700 flex flex-wrap items-center gap-3">
  📚 Structured Learning Resources &nbsp;|&nbsp;
  📝 Practice Questions &nbsp;|&nbsp;
  🎯 Mock Tests &nbsp;|&nbsp;
  💼 Interview Guidance
</p>

<p className="mt-4 text-gray-600">
  Helping students prepare effectively for campus placements and job opportunities.
</p>
</div>
  )
}

export default App