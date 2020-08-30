import React from 'react';
import {shallow} from 'enzyme';
import App from './app';
import Enz from './enz';

describe('App Component', () =>{

    it('renders <Enz /> component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Enz).length).toBe(1);
    });   
    
})
