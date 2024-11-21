import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes")) :
    []
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    createMyPaste: (state, action) => {
      const paste = action.payload;
      if (state.pastes.find(p => p.title === paste.title)) {
        toast.error("A paste with same title already exists!", {
          position: "top-right"
        })
      }
      state.pastes.push(paste);
      localStorage.setItem("pastes",JSON.stringify(state.pastes));
      toast.success("Paste Created Successfully!", {
        position: 'top-right',
      });
    },
    UpdateMyPaste: (state, action) => {
      const paste = action.payload;
      const index=state.pastes.findIndex((item)=>item._id===paste._id);
      if (index>=0) {
        state.pastes[index]=paste;
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Updated Successfully!", {
          position: 'top-right',
        });
      }
      

  },
  reset: (state, action) => {
    state.pastes = [];
    localStorage.setItem("pastes", JSON.stringify(state.pastes));
    toast.success("Reset Successfully!", {
      position: 'top-right',
    });
  },
  deletePaste: (state, action) => {
    const pasteId = action.payload;
    const index=state.pastes.findIndex((item)=>item._id===pasteId);
      if (index>=0) {
        state.pastes.splice(index,1);
        localStorage.setItem("pastes",JSON.stringify(state.pastes));
        toast.success("Paste Deleted!", {
          position: 'top-right',
        });
      }
  },
},
})


export const { createMyPaste, UpdateMyPaste, reset, deletePaste } = pasteSlice.actions

export default pasteSlice.reducer