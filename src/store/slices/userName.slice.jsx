import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: "user",
    initialState: 0,
    reducers: {
        userName: (state, action)=>{
          const name = action.payload
          return name
        }
    }
})

export const { userName } = userNameSlice.actions;

export default userNameSlice.reducer;