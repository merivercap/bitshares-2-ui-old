class BaseStore {

    _export(...methods) {
        let publicMethods = {};
        methods.forEach((method) => {
            this[method] = this[method].bind(this);
            publicMethods[method] = this[method];
        });
        this.exportPublicMethods(publicMethods);
    }
}

export default BaseStore;