class GraphicsCardFactory {

    public buildGraphicsCard(): GraphicsCard {
        const graphicsCard = new GraphicsCard();
        const processor = new Processor();
        graphicsCard.processor = processor;
        return graphicsCard;
    }

    private createProcessor(): Processor {
        return new Processor();
    }

}

class Processor {
    constructor(type?) {
        console.info(`new processor: ${type} created.`)
    }
}

class GraphicsCard {
    public processor: Processor;
}
