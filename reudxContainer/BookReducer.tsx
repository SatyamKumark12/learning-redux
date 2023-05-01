// import { buyBook } from "./BookTypes";

// interface BuyBookAction {
//     type: typeof buyBook;
//     payload: {
//       numBooks: number;
//     };
//   }

// const initialState = {
//     NumberofBooks : 20
// }



// const BookReducer = (state = initialState, action: BuyBookAction) => {
//     switch (action.type) {
//       case buyBook:
//         return {
//           ...state,
//           NumberOfBooks: state.NumberOfBooks - action.payload.numBooks
//         };
//       default:
//         return state;
//     }
//   };



// export default BookReducer;


import { buyBook } from "./BookTypes";

interface BuyBookAction {
  type: typeof buyBook;

}

const initialState = {
  NumberofBooks: 20
}

const BookReducer = (state = initialState, action: BuyBookAction) => {
  switch (action.type) {
    case buyBook:
      return {
        ...state,
        NumberofBooks: state.NumberofBooks - 1
      };
    default:
      return state;
  }
};

export default BookReducer;
