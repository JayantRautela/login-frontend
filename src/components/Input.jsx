
const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div>
      <input 
        type={type} 
        placeholder={placeholder} 
        className="border-2 border-slate-400 rounded-2xl outline-none py-2 px-4 text-xl shadow-lg my-2 w-80"
        required
        value={value}
        onChange={onChange}
    />
    </div>
  )
}

export default Input
