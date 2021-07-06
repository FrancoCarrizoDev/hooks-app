import { shallow } from "enzyme"
import { ReactExampleRef } from "../../../components/04-useRef/ReactExampleRef"


describe('Test in RealExample', () => {
    
    const wrapper = shallow(<ReactExampleRef/>)

    test('should show this component', () => {
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
    })

    test('should show this component MultipleCustomHooks', () => {
        
        wrapper.find('button').simulate('click')
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
    })
    
})
