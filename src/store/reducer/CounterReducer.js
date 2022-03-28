const initialState = 0 ;

export default function CounterReducer(state = initialState, action ) {
   switch (action.type){
      case "INCREMENT": {
         return (state + action.payload
         )};
      case "DECREMENT": return (state - action.payload);
      case "RESET": return (state = 0);
      default: return state;
   }
}


