import { shallow } from "enzyme"
import { TodoList } from "../../../components/08-useReducer/TodoList"
import { demoTodos } from "../../fixtures/demoTodos"


describe('Test in TodoList Component', () => {
    
    const handleDeleteTask = jest.fn()
    const handleToggle = jest.fn()


    const wrapper = shallow(
        <TodoList
            todos={demoTodos}
            handleDeleteTask={handleDeleteTask}
            handleToggle={handleToggle}
        />
    )

    test('should show correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('should be have two TodoListItem', () => {
        
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)

        expect(wrapper.find('TodoListItem').at(0).prop('handleDeleteTask')).toEqual(expect.any(Function))
    })
    
    
})
