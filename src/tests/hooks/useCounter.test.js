import { renderHook, act } from '@testing-library/react-hooks'
import { useCounter } from '../../hooks/useCounter'

describe('Test in useCounter', () => {
    test('should return default values', () => {
        
        const {result} = renderHook( () => useCounter())

        expect(result.current.counter).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')

    })

    test('should return 100 in the counter', () => {
        
        const {result} = renderHook( () => useCounter(100))

        expect(result.current.counter).toBe(100)

    })
    
    test('should by increment the counter in 1', () => {
        
        const {result} = renderHook( () => useCounter(100))
        const {increment} = result.current

        act(() => {increment()})
        expect(result.current.counter).toBe(101)

    })
    test('should by decrement the counter in 1', () => {
        
        const {result} = renderHook( () => useCounter(100))
        const {decrement} = result.current

        act(() => {decrement()})
        expect(result.current.counter).toBe(99)

    })

    test('should by reset values', () => {
        
        const {result} = renderHook( () => useCounter())
        const {reset} = result.current

        act(() => {reset()})
        expect(result.current.counter).toBe(10)

    })
})
