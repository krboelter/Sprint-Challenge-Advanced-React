import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import App from './App';

afterEach(rtl.cleanup)

test('ensures axios returns data when called', () => {
  var mock = new MockAdapter(axios);
  const data = { response: true };
  // const wrapper = rtl.render(<App />)
  // const peopleList = wrapper.getByTestId("peopleList")  

  mock.onGet('http://localhost5000/api/players').reply(200, data);

  axios.get('http://localhost5000/api/players')
    .then(res => {
      console.log(res)
    })
  
    // expect(peopleList).toContain(/name:/i)  
})
