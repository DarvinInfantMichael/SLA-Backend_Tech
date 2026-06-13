

const EmployeeCard = () => {
  return (
    <div className=" flex justify-center  bg-gradient-to-r from-pink-500 to-white p-7">
        
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-center w-70 h-fit rounded-4xl space-y-4">
            <h1 className=" font-bold">Employee Details</h1>
            <p className="mt-2"><span>Student Name :</span> Darvin</p>
            <p><span>Course :</span> Fullstack</p>
            <p><span>City :</span> KK Nagar</p>
            <p><span>Institute :</span> SLA</p>
        </div>
        
    </div>
  )
}

export default EmployeeCard