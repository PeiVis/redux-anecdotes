import { createSlice } from '@reduxjs/toolkit'
import AnecdoteService from '../services/Anecdotes'

const initialState = []

const anecdoteSlice = createSlice({  
    name: 'anecdotes',  
    initialState,  
    reducers: {   
        /*
        createAnecdote(state, action) {    
            state.push( action.payload )

        },  */
        /*
        voteAnecdote(state, action) {   
            const id = action.payload
            const anecdoteToVote = state.find(n => n.id === id)
            console.log(anecdoteToVote);
            const changedAnecdote = {
                ...anecdoteToVote,
                votes: anecdoteToVote.votes + 1
            }
            console.log(changedAnecdote);
            console.log(JSON.parse(JSON.stringify(state)))
            return state.map(anecdote =>
                anecdote.id !== id ? anecdote : changedAnecdote
            )
        }, */
        appendAnecdote(state, action) 
        {    
            state.push(action.payload)  
        },
        setAnecdotes(state, action) { 
            return action.payload   
        },
        setUpdatedAnecdote(state, action) {
            const id = action.payload.id
            const changedAnecdote = action.payload
            const newState = state.map(anecdote =>
                anecdote.id !== id ? anecdote : changedAnecdote
            )
            return newState
        }
    }
})

export const { /*createAnecdote,*/  /*voteAnecdote,*/ appendAnecdote, setAnecdotes, setUpdatedAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {  
    return async dispatch => {  
        const anecdotes = await AnecdoteService.getAll()   
        dispatch(setAnecdotes(anecdotes)) 
    }}

export const createAnecdote = content => {  
    return async dispatch => {
        const newAnecdote = await AnecdoteService.createNew(content)  
        dispatch(appendAnecdote(newAnecdote)) 
    }
}

export const voteAnecdote = (content) => {  
    return async dispatch => {
        const updatedAnecdote = await AnecdoteService.vote(content)
        dispatch(setUpdatedAnecdote(updatedAnecdote))
    }
}

export default anecdoteSlice.reducer