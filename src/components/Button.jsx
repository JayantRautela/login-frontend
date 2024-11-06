
const Button = ({ value, onClick }) => {
  return (
    <div className="w-full mx-auto text-center my-5">
      <button 
        onClick={onClick}
        className="border-2 outline-none py-3 px-6 bg-blue-500 hover:bg-blue-800 text-2xl rounded-2xl"
    >
      {value}
    </button>
    </div>
  )
}

export default Button
