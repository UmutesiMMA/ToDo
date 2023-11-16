export default function Activity({ detail, index, handleDelete }) {
  return (
    <div className="flex gap-4 border border-red-100 rounded-3xl p-4 text-2xl font-serif relative bg-[#75975e] bg-opacity-54">
      <div className="flex gap-2">
        <input type="radio" name="" id="done" className="w-4" />
        <label htmlFor="done">{detail}</label>
      </div>
      <button className="absolute right-6" onClick={()=>handleDelete(index)}>
        drt
      </button>
    </div>
  );
}
