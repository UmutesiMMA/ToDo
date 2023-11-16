export default function Activity({ detail, index, handleDelete }) {
  return (
    <div className="flex gap-4 border border-red-100 p-8 text-2xl font-serif relative">
      <div className="flex gap-2">
        <input type="radio" name="" id="done" className="" />
        <label htmlFor="done">{detail}</label>
      </div>
      <button className="absolute right-6" onClick={()=>handleDelete(index)}>
        drt
      </button>
    </div>
  );
}
