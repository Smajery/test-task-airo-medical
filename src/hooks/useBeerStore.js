import {create} from 'zustand';
import axios from 'axios';

const useBeerStore = create((set) => ({
    beers: [],
    beer: {},

    fetchAllBeers: async (page) => {
        const {data} = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}`);
        set(() => ({beers: data}));
    },
    fetchOneBeer: async (id) => {
        const {data} = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
        set(() => ({beer: data[0]}));
    },
}));

export default useBeerStore;