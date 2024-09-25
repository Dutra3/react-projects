interface Especification {
    make: string;
    model: string;
    graphicsCard: string;
    memory: string;
    process: string;
    storage: string;
    [extra: string]: string | number | boolean;
}