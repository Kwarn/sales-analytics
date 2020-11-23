import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import LostSalesForm from '../../../../src/containers/lostSales/lostSalesForm/LostSalesForm';

import { Provider } from 'react-redux';

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={reduxStore}>{children}</Provider>
);

describe('<LostSalesForm />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const store = configureStore();
      const wrapper = shallow(
        <ReduxProvider reduxStore={store}>
          <LostSalesForm />
        </ReduxProvider>
      );
      const component = wrapper.dive();

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
