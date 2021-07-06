import { shallow } from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';
import React from 'react';

describe('Tests in TodoAdd', () => {

    const handleAddTodo = jest.fn()

    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo}/>)
    
    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
    test('shouldt call handleAddTodo ', () => {

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({
            preventDefault(){}
        })

        expect(handleAddTodo).toHaveBeenCalledTimes(0)
        
    })

    test('show be call the handleAddTodo function', () => {

        const value =  'Aprender React'
        wrapper.find('input').simulate('change', {
            target: {
                value: value,
                name: 'description'
            }
        })

        const formSubmit = wrapper.find('form').prop('onSubmit')

        formSubmit({
            preventDefault(){}
        })

        expect(handleAddTodo).toHaveBeenCalledTimes(1)
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
        expect(handleAddTodo).toHaveBeenCalledWith({
            desc: value,
            done:false,
            id: expect.any(Number)
        })
        

        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
})
