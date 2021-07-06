import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import {useFetch} from '../../hooks/useFetch'

describe('Test in useFetch', () => {
    test('should be return a fetch data default', () => {
        const {result} = renderHook(() => useFetch(`https://breakingbadapi.com/api/quotes/1`))
    
        const {data, loading, error} = result.current

        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)
    })

    test('should have a info required, loading false, error false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch(`https://breakingbadapi.com/api/quotes/1`))
        await waitForNextUpdate({timeout:5000});

        const {data, loading, error} = result.current

        expect(data.length).toBe(1)
        expect(loading).toBe(false)
        expect(error).toBe(null)
        
    })

    test('should have a info required, loading false, error false', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetch(`https://reqres.in/apid/users?page=2`))
        await waitForNextUpdate({timeout:5000});

        const {data, loading, error} = result.current

        expect(data).toBe(null)
        expect(loading).toBe(false)
        expect(error).toBe('No se pudo cargar la info!')
        
    })
    
    
})
