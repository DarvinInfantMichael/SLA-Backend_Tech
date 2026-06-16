const SchoolCard = ({ school }) => {
  return (
    <div className="border rounded-lg shadow-md p-5 bg-white">

      <h2 className="text-xl font-bold text-blue-600">
        {school.schoolName}
      </h2>

      <p className="mt-2">
        <span className="font-semibold">Principal:</span>{" "}
        {school.principal.name}
      </p>

      <p>
        <span className="font-semibold">City:</span>{" "}
        {school.city}
      </p>

      <div className="mt-4">
        <h3 className="font-semibold mb-2">Sports Available</h3>

        <div className="flex flex-wrap gap-2">
          {school.sports.map((sport, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
            >
              {sport}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SchoolCard;