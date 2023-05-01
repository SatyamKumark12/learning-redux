import React from 'react';
import { useSelector  , useDispatch} from 'react-redux';
import  bookPurchase  from './BookAction';



interface AppState {
    NumberofBooks: number;
  }

const BookContainer = () => {

   const noOfBooks =  useSelector((state: AppState) => state.NumberofBooks)
   const dispatch = useDispatch()
  return (
    <>
    <div className='text-3xl'>Book Container</div>

    <h2 className='text3xl'>No of Books : {noOfBooks}</h2>

    <button className='text-3xl rounded-md bg-blue-500' onClick={() => dispatch(bookPurchase())}>BuyBook</button>


    </>
  )
}

export default BookContainer;