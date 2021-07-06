import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"
import { demoTodos } from "../../fixtures/demoTodos"


describe('Test in TodoListItem', () => {

    const handleDeleteTask = jest.fn()
    const handleToggle = jest.fn()
    
    const wrapper = shallow(<TodoListItem todo={demoTodos[0]} index={0} handleDeleteTask={handleDeleteTask} handleToggle={handleToggle}/>)

    test('should show correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should call the function delete', () => {
        wrapper.find('button').simulate('click')
        expect(handleDeleteTask).toHaveBeenCalledWith(demoTodos[0].id)
    })

    test('should call the function toogable', () => {
        wrapper.find('p').simulate('click')
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
    })
    
    test('should show the text correctly', () => {
        const p = wrapper.find('p')
        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
    })

    test('should to have completeClass if todo.done is true', () => {

        const todo = demoTodos[0]
        todo.done = true        
        const wrapper = shallow(<TodoListItem todo={demoTodos[0]} />)

        expect(wrapper.find('p').hasClass('complete')).toBe(true)
    })
    
    
        
})
