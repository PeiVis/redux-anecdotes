import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer  from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
// import AnecdoteService from './services/Anecdotes'

const store = configureStore({  
    reducer: {  
        anecdotes: anecdoteReducer, 
        filter: filterReducer, 
        notification: notificationReducer 
    }
})


// store.dispatch(initializeAnecdotes())


export default store