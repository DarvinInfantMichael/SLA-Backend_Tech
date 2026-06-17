import GrandChild from "../components/GrandChild"
const Child = ({name,course}) => {
  return (
    <div>Child
        <GrandChild name={name} course={course}/>
    </div>
  )
}

export default Child