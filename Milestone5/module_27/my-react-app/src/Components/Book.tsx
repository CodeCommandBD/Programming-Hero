interface bookstype{
  name : string
}

const book = ({name}: bookstype) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}

export default book