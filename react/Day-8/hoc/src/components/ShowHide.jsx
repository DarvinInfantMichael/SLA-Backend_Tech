// import withButtonAction from "./withButtonAction";

// const ShowHide = ({ state, setState }) => {
//   return (
//     <div className="p-5">
//       <button
//         className="bg-blue-500 text-white px-4 py-2 rounded"
//         onClick={() => setState(!state)}
//       >
//         {state ? "Hide" : "Show"}
//       </button>

//       {state && (
//         <h2 className="mt-4 text-xl font-bold">
//           Hello React HOC
//         </h2>
//       )}
//     </div>
//   );
// };

// export default withButtonAction(ShowHide, false);

// import withButtonAction from "./withButtonAction";

// const ChangeColor = ({ state, setState }) => {
//   return (
//     <div
//       className="p-5 rounded mt-5"
//       style={{
//         backgroundColor: state ? "lightgreen" : "lightcoral",
//       }}
//     >
//       <button
//         className="bg-black text-white px-4 py-2 rounded"
//         onClick={() => setState(!state)}
//       >
//         Change Color
//       </button>

//       <h2 className="mt-4">
//         Background changes independently.
//       </h2>
//     </div>
//   );
// };

// export default withButtonAction(ChangeColor, false);