import "../App.css";

const ConvertMethods = () => {
  return (
    <div className="container">
      <h1 className="title bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 font-bold text-center">Array Convert Methods</h1>

      <div className="big-card">

        {/* join() */}
        <div className="small-card">
          <h3>join()</h3>

          <p>
            Converts array elements into a single string.
Elements are separated by a specified delimiter.
          </p>

          <pre className="code">
{`const arr = ["HTML", "CSS", "JavaScript"];

const result = arr.join(" - ");

console.log(result);`}
          </pre>

          <div className="output">
            Output: HTML - CSS - JavaScript
          </div>
        </div>

        {/* toString() */}
        <div className="small-card">
          <h3>toString()</h3>

          <p>
            Converts the entire array into a comma-separated string.
Does not modify the original array.
          </p>

          <pre className="code">
{`const arr = ["HTML", "CSS", "JavaScript"];

const result = arr.toString();

console.log(result);`}
          </pre>

          <div className="output">
            Output: HTML,CSS,JavaScript
          </div>
        </div>

      </div>
    </div>
  );
};

export default ConvertMethods;