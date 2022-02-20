import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/'

const KEY = '25704101-e9a4b1030f151f3422020504c'

async function fetchImages(query, page, perPage) {
    const response = await axios.get(`?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`)

    return response
    
}

export { fetchImages }