import { Button } from '@shopify/polaris';

export const ColumnLeft = () => {
    return (
        <div className='bg-slate-300 p-5 justify-center items-center flex rounded-md shadow-md w-full'>
            <Button size='large' variant='primary'>
                Botón Polaris
            </Button>
        </div>
    )
}