import Child from "../components/Child"
const Parent = ({name,course}) => {
  return (
    <div>Parent
        <Child name={name} course={course}/>
    </div>

  )
}

export default Parent