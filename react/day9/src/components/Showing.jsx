

const Showing = ({datas,handleEdit,handleDelete}) => {
  return (
    <div>
      {datas.map((e,i)=>(
        <div key={i+1}>
        <h3>{e.userName}</h3>
        <h3>{e.userAge}</h3>
        <h3>{e.userCity}</h3>

        <button onClick={() => handleEdit(i)}>
  Edit
</button>

<button onClick={() => handleDelete(i)}>
  Delete
</button>
      </div>
      ))}
    </div>
  )
}

export default Showing