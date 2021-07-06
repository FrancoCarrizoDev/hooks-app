import { renderHook, act } from '@testing-library/react-hooks'
import { useForm } from "../../hooks/useForm"


describe('Test in useForm', () => {
    const initialForm = {
        name: 'fran',
        email: 'franq@gmail.com'
    }

    test('should be return an form default value', () => {

        const {result} = renderHook( () => useForm(initialForm))

        const [value, handleInputChange, reset] = result.current

        expect(value).toEqual(initialForm)
        expect(typeof handleInputChange).toEqual('function')
        expect(typeof reset).toEqual('function')
    })

    test('should be change the value to form (only name)', () => {
        const {result} = renderHook( () => useForm(initialForm))

        const [ , handleInputChange] = result.current

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            })
        })

        const [ values ] = result.current
        expect(values).toEqual({...initialForm, name: 'Melissa'})
    })

    test('should restablish the form with Reset Function', () => {
        const {result} = renderHook( () => useForm(initialForm))

        const [ , handleInputChange, reset] = result.current

        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            })

            reset()
        })

        const [ values ] = result.current
        expect(values).toEqual(initialForm)

    })
    
    
    
})
