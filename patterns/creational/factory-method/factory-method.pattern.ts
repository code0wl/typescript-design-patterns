import { Processor, GraphicsCard } from './components.class';

class GraphicsCardFactory {

    // through decoupling of the class creation
    // you may change the subclass implementation with a different configuration
    public buildGraphicsCard(): GraphicsCard {
        const graphicsCard = new GraphicsCard();
        const processor = new Processor();
        graphicsCard.processor = processor;
        return graphicsCard;
    }

    private createProcessor(): Processor {
        return new Processor('some processor');
    }

}
