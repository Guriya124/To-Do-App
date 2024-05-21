// TO-Do list
import { useSelector } from "react-redux"

import ListCard from "./Listcard"
import Header from "./Header"
export default function ToDoList() {
    const todo = useSelector(state => state.todo.todo)
    const currentUser = useSelector(state => state.user.currentUser)
    let matchingTodos = []
    if (currentUser) {
        matchingTodos = todo.filter(item => item.userId === currentUser.userName);
    }
    return (
        <>
            <div>
                <Header />
                <div className="grid grid-cols-4 mt-4 gap-4">
                    {matchingTodos.map((item, index) => {
                        return (
                            <ListCard key={index}
                                title={item.title}
                                description={item.description}

                            />
                        )
                    })}
                </div>

            </div>


        </>
    )
}
