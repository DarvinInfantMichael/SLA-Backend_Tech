import "../App.css";

const CreationMethods = () => {
  return (
    <div className="container">
      <h1 className="title bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 font-bold text-center">Array Creation Methods</h1>

      <div className="big-card">

        <div className="small-card">
          <h3>Array Literal</h3>

          <p>The simplest and most commonly used way to create an array.
Stores multiple values inside square brackets.</p>

          <pre className="code">
{`const arr = [1, 2, 3];

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [1, 2, 3]
          </div>
        </div>

        <div className="small-card">
          <h3>Array Constructor</h3>

          <p>Creates an array using the Array constructor.
Can create an empty array or an array with initial values.</p>

          <pre className="code">
{`const arr = new Array(1, 2, 3);

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [1, 2, 3]
          </div>
        </div>

        <div className="small-card">
          <h3>Array.from()</h3>

          <p>Creates a new array from the provided arguments.
Useful when creating arrays from individual values.</p>

          <pre className="code">
{`const arr = Array.from("HELLO");

console.log(arr);`}
          </pre>

          <div className="output">
            Output: ['H','E','L','L','O']
          </div>
        </div>

        <div className="small-card">
          <h3>Array.of()</h3>

          <p>Creates an array from iterable or array-like objects.
Commonly used to convert strings or NodeLists into arrays.</p>

          <pre className="code">
{`const arr = Array.of(5);

console.log(arr);`}
          </pre>

          <div className="output">
            Output: [5]
          </div>
        </div>

      </div>
    </div>
  );
};

export default CreationMethods;