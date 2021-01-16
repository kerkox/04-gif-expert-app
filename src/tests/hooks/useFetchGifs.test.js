import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
    test('debe de retornar el estado inical', () => {
        const { data: images, loading } = useFetchGifs('Mr Robot');

    })
    
})
