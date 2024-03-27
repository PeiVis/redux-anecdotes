import { useSelector, useDispatch } from 'react-redux'
import PropTypes  from 'prop-types'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { changeNotification } from '../reducers/notificationReducer'

const Anecdote = ({anecdote, vote}) => {
    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes} 
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
        </div>
    )
}

Anecdote.propTypes = {
    anecdote: PropTypes.object, 
    vote: PropTypes.func
}


const Anecdotes = () => {
    const dispatch = useDispatch()  
    const anecdotes = useSelector(state => state.anecdotes)
    const filter = useSelector(state => state.filter)

    const filteredAnecdotes = anecdotes.filter(anecdote=>anecdote.content.includes(filter));
  
    const vote = (anecdote) => {
        dispatch(voteAnecdote(anecdote))
        dispatch(changeNotification('You voted "' +anecdote.content + '"', 5))
    }

    const sortAnecdotes = (anecdotes) => {
        return anecdotes.sort((a, b) => b.votes - a.votes);
    }
  
    return (
        <div>
            {sortAnecdotes(filteredAnecdotes).map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={anecdote} vote={vote} ></Anecdote>
            )}
        </div>
    )
}


  
export default Anecdotes