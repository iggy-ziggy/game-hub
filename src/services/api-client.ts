import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '1fcc83a5a702446f8fe060714588f455'
    }
})