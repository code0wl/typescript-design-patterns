export class Processor {
    constructor(type?) {
        console.info(`new processor: ${type} created.`)
    }
}

export class GraphicsCard {
    public processor: Processor;
}
