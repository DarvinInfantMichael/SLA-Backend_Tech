const SchoolStates = ({ schools }) => {

  const totalSchools = schools.length;

  let totalStudents = 0;
  let totalTeachers = 0;

  for (const school of schools) {
    totalStudents += school.students;
    totalTeachers += school.teachers;
  }

  return (
    <>
    <div className="border rounded-lg shadow-md p-5 bg-white mt-2">
      <h2 className="mt-2"><span className=" font-semibold">Total Schools: {totalSchools}</span></h2>
      <h2 className="mt-2"><span className="font-semibold">Total Teachers: {totalTeachers}</span></h2>
      <h2 className="mt-2"><span className="font-semibold">Total Students: {totalStudents}</span></h2>
      </div>
    </>
  );
};

export default SchoolStates;