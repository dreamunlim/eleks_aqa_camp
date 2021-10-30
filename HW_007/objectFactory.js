class ObjectFactory {
    #objectFactory;

    constructor() {
        this.#objectFactory = new Map();
    }

    registerObject(id, type) {
        // if type already exists
        if(this.#objectFactory.has(id)) {
            return;
        }

        this.#objectFactory.set(id, type);
    }

    createObject(id) {
        // if type does not exist
        if(! this.#objectFactory.has(id)) {
            throw `Object "${id}" not in factory`;
        }

        return this.#objectFactory.get(id);
    }
}

export default new ObjectFactory();