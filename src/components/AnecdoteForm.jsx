import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, removeNotification } from "../reducers/notificationReducer"
const NewAnecdote = () => {
    const dispatch = useDispatch()  
  
    const create = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification('Anecdote "' + content + '" added'))
        setTimeout(() => {
            dispatch(removeNotification())
        }, 5000)
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