import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function TodoDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const todo = useSelector(state => state.todo.todo.find(todo => todo.id === id));

    if (!todo) {
        return <div>Todo not found</div>;
    }
    function handleGoBack() {
        navigate(-1);
    }

    return (
        <div className='container mx-auto mt-10'>


            <Card sx={{ minWidth: 275, maxWidth: 350 }}>
                <CardContent>
                    <Typography variant="h4" component="div">
                        {todo.title}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {todo.description}
                    </Typography>
                    <div className='mt-5 '>

                        <Button size="small" onClick={handleGoBack}>Previous</Button>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}