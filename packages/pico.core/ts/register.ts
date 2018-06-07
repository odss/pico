import { IComponentInfo, IComponentFactory, IComponentRegister } from './interfaces';
import { DefaultComponent } from './components';

export default class ComponentRegister implements IComponentRegister{

    private _components: Map<string, IComponentFactory> = new Map();

    register(factory: IComponentFactory){
        this._components.set(factory.info.name, factory);
    }
    unregister(name){
        this._components.delete(name);
    }
    get(name){
        if(!name){
            throw new TypeError(`Empty component component name`);
        }
        if(this._components.has(name)){
            const factory = this._components.get(name);
            return factory.component;
        }
        return DefaultComponent;
    }
    getInfo(name): IComponentInfo {
        return this._components.get(name).info;
    }
    getAllInfo(): IComponentInfo[] {
        return Array.from(this._components.values()).map(item => item.info);
    }
}
