import { ActionKeys, ActionTypes } from '../actions.types';
import Person from '../models/Person';
import Transaction from '../models/Transaction';

// const alex: Person = {
//   id: 'alex',
//   name: 'Alex',
// };
// const cindy: Person = {
//   id: 'cindy',
//   name: 'Cindy',
// };
// const people = [
//   alex,
//   cindy,
// ];
const people: Person[] = [];

// const transactions: Transaction[] = [
//   {
//     id: 1,
//     description: 'Test 1',
//     amount: 1,
//     personId: 'alexId',
//     date: new Date(),
//     settled: false
//   },
//   {
//     id: 2,
//     description: 'Test 2',
//     amount: 2,
//     personId: 'cindyId',
//     date: new Date(),
//     settled: false
//   }
// ];
const transactions: Transaction[] = [];

export interface LedgerAreaState {
  submittingTx: boolean;
  fetchingPeople: boolean;
  fetchingTxs: boolean;
  people: Person[];
  transactions: Transaction[];
}

const initialState: LedgerAreaState = {
  transactions,
  people,
  submittingTx: false,
  fetchingPeople: false,
  fetchingTxs: false
};

const ledgerArea = (
  state: LedgerAreaState = initialState,
  action: ActionTypes
): LedgerAreaState => {
  switch (action.type) {
    case ActionKeys.FETCHING_TXS:
      return {
        ...state,
        fetchingTxs: true
      };
    case ActionKeys.FETCHED_TXS:
      return {
        ...state,
        fetchingTxs: false,
        transactions: action.payload.transactions
      };
    case ActionKeys.SUBMITTING_TX:
      return {
        ...state,
        submittingTx: true
      };
    case ActionKeys.PROCESSED_TX:
      return {
        ...state,
        submittingTx: false
      };
    case ActionKeys.FETCHING_PEOPLE:
      return {
        ...state,
        fetchingPeople: true
      };
    case ActionKeys.FETCHED_PEOPLE:
      return {
        ...state,
        fetchingPeople: false,
        people: action.payload.people
      };
    default:
      return state;
  }
};

export default ledgerArea;
