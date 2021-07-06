import { mount } from 'enzyme';
import React from 'react';
import {HomeScreen} from '../../../components/09-useContext/HomeScreen'
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Test in HomeScreenComponent', () => {

    const user = {
        name: 'Franco',
        email: 'fran@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen/>
        </UserContext.Provider>
    )

    test('should show correctly', () => {


        expect(wrapper).toMatchSnapshot();
    })
    
    
})
