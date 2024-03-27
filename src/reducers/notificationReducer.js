import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({  
    name: 'notification',  
    initialState,  
    reducers: {   
        setNotification(state, action) {    
            return action.payload 
        },
        removeNotification() {   
            return ''
        } 
    }
})

export const { setNotification, removeNotification } = notificationSlice.actions

export const changeNotification = (content, time) =>{
    return dispatch => {
        dispatch(setNotification(content))
        setTimeout(() => {
            dispatch(removeNotification())
        }, time * 1000)
    }
}

export default notificationSlice.reducer