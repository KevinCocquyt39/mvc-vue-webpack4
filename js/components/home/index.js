import Vue from "vue";
import FirstComponent from "../FirstComponent.vue";

var vm = new Vue({
    el: "#nt-page-home",
    components: {
        FirstComponent
    }
});

vm.$refs.myFirstComponent.list = [
    { id: 1, name: "Acme" },
    { id: 2, name: "Corp" }
];