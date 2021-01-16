import { shallow } from "enzyme"
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    const category = 'Mr Robot';

    test('Debe de hacer match con el snapshot', () => {
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
    })

    test('debe de mostrar itesm cuando se cargan imagenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cosa/img1.jpg',
            title: 'pruebas'
        },
        {
            id: 'ABC123',
            url: 'https://localhost/cosa/img1.jpg',
            title: 'pruebas 2'
        },
        ]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        const wrapper = shallow(<GifGrid category={category} />)
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })


})
