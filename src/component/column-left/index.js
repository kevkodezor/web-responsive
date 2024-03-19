import { Button, Card } from '@shopify/polaris';

export const ColumnLeft = () => {
    return (
        <div className='bg-slate-300 p-5 justify-center items-center flex rounded-md shadow-md w-full'>
            <Card>
                <Button size='large' variant='primary'>
                    Botón Polaris
                </Button>
            </Card>
        </div>
    )
}