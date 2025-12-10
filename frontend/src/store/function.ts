export const pendingCase = (state:any) => {
  state.isLoading = true;
  state.error = null;
};

export const rejectedCase = (state:any, action:any) => {
  state.isLoading = false;
  state.error = action.payload;
};