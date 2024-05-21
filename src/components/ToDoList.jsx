// TO-Do list
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';
import { todoDelete } from '../app/todo/todoSlice'
import ListCard from "./Listcard"
import Header from "./Header"



export default function ToDoList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.todo)
    const currentUser = useSelector(state => state.user.currentUser)
    let matchingTodos = []
    if (currentUser) {
        matchingTodos = todo.filter(item => item.userId === currentUser.userName);
    }

    function handleDelete(id) {
        dispatch(todoDelete(id))  
    }

    function handleReadMore(id) {
        navigate(`/tododetail/${id}`);
    }
    return (
        <>
            <div>
                <Header />
                <div className="grid grid-cols-4 mt-4 gap-4">
                    {matchingTodos.map((item, index) => {
                        let shortDescription = item.description.length > 70
                            ? item.description.substring(0, 70) + "..."
                            : item.description;

                        return (
                            <ListCard
                                key={index}
                                title={item.title}
                                description={shortDescription}
                                onReadMore={() => handleReadMore(item.id)}
                                onUpdate={() => handleUpdate(item.id)}
                                onDelete={() => handleDelete(item.id)}
                            />
                        )
                    })}
                </div>

            </div>


        </>
    )
}
