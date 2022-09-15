import store from "$/store.js";

export default [{
    data() {
        return {
            preloaded: false,
            created: false,
            updating: false,
            rendering: false,
            destroyed: false
        };
    },
    mounted() {
        store.components.push(this);
    },
    beforeUnmount() {
        if (store.Phaser && !this.destroyed)
            this.destroy(store.Phaser);

        store.components = store.components.filter(object => object!=this); 
    },
    methods: {
        preload() {
            this.preloaded = true;
        },
        create() {
            this.created = true;
        },
        update() {
            this.updating = true;
        },
        render() {
            this.rendering = true;
        },
        destroy() {
            this.destroyed = true;
        }
    }
}];