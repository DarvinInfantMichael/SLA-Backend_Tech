import "../App.css";

const CopyMethods = () => {
  return (
    <div className="container">
      <h1 className="title bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 font-bold text-center">Array Copy Methods</h1>

      <div className="big-card">

        {/* slice() */}
        <div className="small-card">
          <h3>slice()</h3>

          <p>
            Returns a shallow copy of a portion of an array.
Does not modify the original array.
          </p>

          <pre className="code">
{`const arr = [10, 20, 30, 40, 50];

const copy = arr.slice(1, 4);

console.log(copy);`}
          </pre>

          <div className="output">
            Output: [20, 30, 40]
          </div>
        </div>

        {/* concat() */}
        <div className="small-card">
          <h3>concat()</h3>

          <p>
            Creates a copy of an existing array.
Useful for merging or cloning arrays.
          </p>

          <pre className="code">
{`const arr1 = [1, 2];
const arr2 = [3, 4];

const result = arr1.concat(arr2);

console.log(result);`}
          </pre>

          <div className="output">
            Output: [1, 2, 3, 4]
          </div>
        </div>

        {/* Spread Operator */}
        <div className="small-card">
          <h3>Spread Operator (...)</h3>

          <p>
            Creates a shallow copy of an array using spread syntax.
          </p>

          <pre className="code">
{`const arr = [1, 2, 3];

const copy = [...arr];

console.log(copy);`}
          </pre>

          <div className="output">
            Output: [1, 2, 3]
          </div>
        </div>

      </div>
    </div>
  );
};

export default CopyMethods;