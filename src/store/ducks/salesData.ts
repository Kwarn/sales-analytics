import { SalesData } from '../../models/salesData';
import * as utility from '../../shared/Utility';

export const ADD_SALES_DATA = 'salesAnalytics/salesData/add_sales_data';

const initialState = {};

interface Action {
  type: string;
  payload: object;
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_SALES_DATA:
      console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const addSalesData = (salesData: SalesData) => {
  return {
    type: ADD_SALES_DATA,
    payload: utility.assignRandomId(salesData),
  };
};
