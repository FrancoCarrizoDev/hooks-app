import React from 'react';
import {shallow} from 'enzyme'
import { HookApp } from '../HookApp'

describe('Testint in HookApp component', () => {
    test('should show Hello wordl', () => {
        const wrapper = shallow(<HookApp/>)

        expect(wrapper).toMatchSnapshot();
    })
    
})
