import { todoReducer } from '../../../components/08-useReducer/todoReducer'
import { demoTodos } from '../../fixtures/demoTodos'


describe('Test in todoReducer', () => {

    test('should return default state', () => {

        const state = todoReducer(demoTodos, {})
        expect(state).toEqual(demoTodos)

    })

    test('should add one TODO', () => {

        const newTodo = { 
            id: 3, 
            desc: 'Aprender Jira', 
            done: false 
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        const newState = todoReducer(demoTodos, action )
        expect( newState.length).toBe(3)
        expect( newState).toEqual([...demoTodos, newTodo])
    })

    test('should delete an TODO', () => {
        const action = {
            type: 'delete',
            payload: 1
        }

        const newState = todoReducer(demoTodos, action)
        expect(newState.length).toEqual(1)
    })

    test('should do toggle of TODO', () => {
        
        const action = {
            type: 'toggle',
            payload: 1
        }

        const newState = todoReducer(demoTodos, action)
        expect(newState[0].done).toBe(true)
    })
    
    



})
