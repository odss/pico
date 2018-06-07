export interface IComponent {

}

export interface IComponentInfo {
    name: string;
    category: string;
    icon?: string;
}

export interface IComponentFactory {
    info: IComponentInfo;
    create(options: any): IComponent;
}

export interface IComponentRegister {
    register(factory: IComponentFactory): void;
    unregister(name: string): void;
    create(name: string, options: any): void;
    getInfo(name: string): IComponentInfo;
    getAllInfo(): IComponentInfo[];
}