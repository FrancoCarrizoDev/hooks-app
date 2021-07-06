import React from 'react';
import {shallow} from 'enzyme'
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch')

describe('Test in MultimpleCustomHooks components', () => {



    test('should show correctly', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks/>)

        expect(wrapper).toMatchSnapshot();
    })

    test('should show the info', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Fran',
                quote: 'Hello word!'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks/>)

        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hello word!')
        expect(wrapper.find('footer').text().trim()).toBe('Fran')
        
    })
    
})
