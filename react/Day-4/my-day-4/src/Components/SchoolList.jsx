import SchoolCard from "./SchoolCard";

const SchoolList = ({ schools }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {schools.map((school) => (
        <SchoolCard
          key={school.id}
          school={school}
        />
      ))}
    </div>
  );
};

export default SchoolList;