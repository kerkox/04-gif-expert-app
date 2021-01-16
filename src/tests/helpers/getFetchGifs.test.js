import { getFetchGifs } from "../../helpers/getFetchGifs"


describe('Prueba con getFetchGifs', () => {
    test('debe de traer 10 elementos', async () => {
        const gifs = await getFetchGifs('Mr Robot');
        expect(gifs.length).toBe(10)
    })

    test('debe de traer 0 elementos enviando una categoria vacia \'\'', async () => {
        const gifs = await getFetchGifs('');
        expect(gifs.length).toBe(0)
    })
    
})
