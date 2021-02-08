export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = async () => {
        const res = await this.getResource('characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    }

    getCharacter = async (id) => {
        const character = await this.getResource(`characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouses = async () => {
        const res = await this.getResource('houses');
        return res.map(this._transformHouses)
    }

    getHouse = async (id) => {
        return await this.getResource(`houses/${id}`)
    }

    getAllBooks = async () => {
        const res = await this.getResource('books');
        return res.map(this._transformBook);
    }

    getBook = async (id) => {
        return await this.getResource(`books/${id}`)
    }

    _transformCharacter(char) {
        return {
                name: char.name || 'N/A',
                gender: char.gender || 'N/A',
                born: char.born || 'N/A',
                died: char.died || 'N/A',
                culture: char.culture || 'N/A',
                url: char.url,
                id: char.url.match(/(\d+)$/)[0]
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages || 'N/A',
            publisher: book.publisher || 'N/A',
            releases: book.releases || 'N/A',
            url: book.url,
            id: book.url.match(/(\d+)$/)[0]

        }
    }

    _transformHouses(house) {
        return {
            name: house.name,
            region: house.region || 'N/A',
            currentLord: house.currentLord || 'N/A',
            url: house.url,
            id: house.url.match(/(\d+)$/)[0]
        }
    }
}
