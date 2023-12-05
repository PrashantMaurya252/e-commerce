const initialState = {
    departments: [],
    products: [],
    filter: null
  };
  

export default(state=initialState,action)=>{
    switch(action.type){
        case "SET_FILTER":{
            return{
                ...state,
                filter:action.filter,
            }
        }
        case "CLEAR_FILTER":{
            return{
                ...state,
                filter:null
            }
        }

        case "INITIALIZE_CATALOG":{
          return{
            ...state,
            departments:action.departments,
            products:action.products,
          }
        }
        default:{
            return state;
        }
    }
}