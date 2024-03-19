
export const ColumnCenter = ({ radius }) => {
    return (
        <div className='flex flex-col justify-center items-center bg-white p-5 rounded-md shadow-lg gap-5 w-full'>
            <h2 className='text-3xl'>Lorem ipsum dolor sit amet</h2>
            <p>Consectetur adipiscing elit, sed do eiusmod tempor
            <br />
                incididunt ut labore et dolore magna aliqua.
            </p>
            <button
                className={`
                    p-2 m-2 bg-green-500 rounded-[${radius}px] w-32 font-semibold
                `}>
                Est laborum
            </button>
            <a
                className='hover:underline text-blue-500'
                href='https://github.com/kevkodezor/web-responsive'
                target='_blank'
            >
                GitHub Project
            </a>
        </div>
    )
}
