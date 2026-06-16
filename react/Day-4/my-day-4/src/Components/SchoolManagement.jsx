

const SchoolManagement = ({schools}) => {
  return (
    <div>
      <h1 className="font-bold flex justify-center text-3xl">Task-1</h1>
    <div>
      <h1 className="flex justify-center font-semibold mt-2 text-2xl">School Management</h1>
    {schools.map((e,i)=>(
      <div key={i} className="grid grid-cols-1 md:grid-cols-2 px-2 bg-white shadow-lg rounded-lg p-5 border hover:shadow-xl transition mt-2" >
        <p ><span className="text-lg font-bold text-blue-600 mb-4">{e.schoolName}</span></p>
        <p>{e.city}</p>
        <p>{e.principal.name}</p>
        <p>{e.students}</p>
        <p>{e.teachers}</p>
      </div>
    ))}
    </div>

    <h1 className="text-3xl font-bold text-center my-6">
  Task-2
</h1>

<div>
  <h2 className="text-xl font-semibold text-center mb-6">
    School Courses Dashboard
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
    {schools.map((school) => (
      <div
        key={school.id}
        className="bg-white shadow-lg rounded-lg p-5 border hover:shadow-xl transition"
      >
        <h3 className="text-lg font-bold text-blue-600 mb-4">
          {school.schoolName}
        </h3>

        <p className="font-semibold mb-2">Courses Offered</p>

        <div className="flex flex-wrap gap-2">
          {school.courses.map((course, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

    <div className="flex justify-center text-2xl mt-2">
      <h1 className="font-bold">Task-3</h1>
      <div>
        
      </div>
    </div>
    
    </div>

  )
}

export default SchoolManagement