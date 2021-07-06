import { mount, shallow } from "enzyme"
import { demoTodos } from "../../fixtures/demoTodos"
import {TodoApp} from '../../../components/08-useReducer/TodoApp'
import { act } from "@testing-library/react"

describe('should in TodoAppComponent', () => {

    const wrapper = shallow(<TodoApp/>)

    Storage.prototype.setItem = jest.fn(() => {})

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('should add an TODO', () => {
        const wrapper = mount(<TodoApp/>)

        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1])
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)')
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    })

    test('should delete an TODO', () => {
        
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0])
        wrapper.find('TodoList').prop('handleDeleteTask')(demoTodos[0].id)

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (0)')
    })
    
    
    
    
})
