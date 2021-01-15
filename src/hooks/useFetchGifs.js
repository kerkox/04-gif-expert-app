import { useEffect, useState } from "react"
import { getFetchGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading:  true
    })

    useEffect( () => {
        getFetchGifs(category)
        .then( imgs => {
            setTimeout(() => {

                setState({
                    data: imgs,
                    loading: false
                })
            }, 3000)
        })
    }, [category]);


    return state;
}