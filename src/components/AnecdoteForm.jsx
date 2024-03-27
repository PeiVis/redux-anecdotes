import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { changeNotification } from "../reducers/notificationReducer"

const NewAnecdote = () => {
    const dispatch = useDispatch()  
  
    const create = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(changeNotification('Anecdote "' + content + '" added', 5))
        
    }
  
    return (
        <div>       
            <h2>create new</h2>
            <form onSubmit={create}>
                <div>
                    <input name="anecdote" />
                </div>
                <button type="submit">create</button>
            </form>
        </div>
    )
    
}


  
export default NewAnecdote