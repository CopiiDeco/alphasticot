export default class CallbackManager {
    constructor() {
        this.currentId = 0;
        this.callbackPool = {};
    }
    add(clb) {
        var id = this.currentId;
        this.callbackPool[id] = clb;
        this.currentId++;
        return id;
    }
    get(id) {
        if (this.callbackPool.hasOwnProperty(id)) {
            var clb = this.callbackPool[id];
            delete this.callbackPool[id];
            return clb;
        }
        return null;
    }
}
