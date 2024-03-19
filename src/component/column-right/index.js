
export const ColumnRight = ({ radiusValue, onChange }) => {

    return (
        <div className='grid lg:col-auto md:col-span-2'>
            <div className='flex flex-col justify-center items-center bg-slate-300 gap-3 p-5 w-full md shadow-md rounded-md'>
                <label htmlFor='borderRadius' className='font-bold'>Border Radius:</label>
                <input
                    className='h-8 rounded-md text-center'
                    type='number'
                    id='borderRadius'
                    placeholder='30 px'
                    value={radiusValue}
                    onChange={(e) => onChange(e)}
                />
            </div>
        </div>
    )
}
