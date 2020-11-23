import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  addSalesData,
  ADD_SALES_DATA,
} from '../../../src/store/ducks/salesData';

interface DummyStore {
  [name: string]: {
    [name: string]: {
      applicantName: string;
      flatNumber: string;
      location: string;
      notes: string;
      reason: string;
      viewingDate: string;
    };
  };
}

const dummyStore = {
  salesData: {
    _a467qwns0: {
      applicantName: 'test',
      flatNumber: '115',
      location: 'lewisham',
      notes: 'teeessttt',
      reason: 'travelLinks',
      viewingDate: '2020-10-10',
    },
  },
};

configure({ adapter: new Adapter() });
