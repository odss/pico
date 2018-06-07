import ComponentRegister from './register';
import Workspace from './workspace';
import { registerAllComponents } from './components';

export class Activator {

    private workspace: Workspace;

    async start(ctx){
        let register = new ComponentRegister();
        registerAllComponents(register);

        this.workspace = new Workspace(register);
        await this.workspace.startup(document.body);
    }
    stop(){
        this.workspace.dispose();
    }
}