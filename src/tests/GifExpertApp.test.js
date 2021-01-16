import { shallow } from "enzyme"
import {GifExpertApp} from '../GifExpertApp';

describe('Pruebas en <GifExpertApp/>', () => {
    test('Debe de hacer match con el snapshot', () => {
        const wrapper = shallow(<GifExpertApp />)
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe de mostrar una lista de catgegorias', () => {
        const categories = ['Mr Robot', 'Silicon Valley'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);

    })
})
