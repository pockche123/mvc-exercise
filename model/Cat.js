
const catData = require('../data')

class Cat {


    constructor(data) {
        this.id = data.id
        this.name = data.name
        this.description = data.description
        this.habitat = data.description
    }

    static getAll() {
        const cats = catData.map(cat => new Cat(cat));
        return cats;
    }

    static findById(catId) {
        try {
            const data = catData.find(c => c.id === catId)
            const cat = new Cat(data)
            return cat
        } catch (error) {
            throw new Error('This cat doesn\'t exist');
        }
    }

    static create(data) {
        try {
            let nextId = catData.length > 0 ? catData.reduce((c1, c2) => c1.id > c2.id ? c1 : c2).id + 1 : 1
            const newCat = new Cat({ id: nextId, name: data.name, type: data.type, description: data.description, habitat: data.habitat })
            catData.push(newCat)
        } catch (error) {
            throw new Error(error.message)
        }
    }

    update(data) {
        try {
            const updatedCat = catData.find(cat => cat.id === this.id)
            if (!updatedCat) {
                throw new Error('cat not found')
            }

            if (data.name) {
                updatedCat.name = data.name;
            }

            if (data.description) {
                updatedCat.description = data.description;
            }

            if (data.habitat) {
                updatedCat.habitat = data.habitat;
            }
            return new Cat(updatedCat)

        } catch (error) {
            throw new Error(error.message)
        }
    }

    delete() {
        const data = catData.find(cat => cat.id === this.id)

        if (data) {
            const catIndex = catData.indexOf(data)
            catData.splice(catIndex, 1)
        } else {
            throw new Error('Cat not found')
        }
    }
}

module.exports = Cat