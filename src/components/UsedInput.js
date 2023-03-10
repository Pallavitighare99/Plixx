export const Message = ({label,placeholder,register,name})=>{
    return (
        <div className='text-sm w-full'>
        <label className='text-border font-semibold'>{label}</label>
        <textarea
            className='w-full h-20 mt-2 p-6 bg-main border border-border rounded'
            placeholder={placeholder}
            {...register}
            name={name}
        />
        </div>
    )   
}
export const Select = ({label,options, register, name})=>{
    return (
        <div className='text-sm w-full'>
        <label className='text-border font-semibold'>{label}</label>
        <select
            className='w-full mt-2 px-6 py-4 text-text bg-main border border-border rounded'
            {...register}
            name={name}
        >
            {options.map((opt, ind)=>(
                <option key={ind} value={opt.value}>{opt.title}</option>
            ))}
        </select>
        </div>
    )   
}
export const Input = ({label,placeholder,type,bg, register, name, value, onChange})=>{
    return (
        <div className='text-sm w-full'>
        <label className='text-border font-semibold'>{label}</label>
        <input
            {...register}
            value={value}
            onChange={onChange}
            name = {name}
            className={`w-full text-sm mt-2 p-5 border border-border rounded text-white${
                bg ? ' bg-main' : 'bg-dry'
            }`}
            placeholder={placeholder}
            type={type}
            

        />
        </div>
    )   
}