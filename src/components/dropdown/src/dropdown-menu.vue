<template>
    <transition name="x-slide-up">
        <ul class="x-dropdown-menu" v-show="showPopper">
            <slot></slot>
        </ul>
    </transition>
</template>

<script>
import Popper from 'xcui/src/utils/vue-popper';

export default {
    name: 'x-dropdown-menu',
    componentName: 'x-dropdown-menu',
    mixins: [Popper],
    created() {
        this.$on('updatePopper', () => {
            this.showPopper && this.updatePopper();
        })
        this.$on('visible', val => {
            this.showPopper = val;
        })
    },
    mounted() {
        this.$parent.popperElm = this.popperElm = this.$el;
        this.referenceElem = this.$parent.$el;
    }
}
</script>

