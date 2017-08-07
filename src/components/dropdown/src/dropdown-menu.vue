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
    props: {
        align: {
            type: String,
            default: 'bottom-end',
            validator(value) {
                return ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end'].indexOf(value) >= 0;
            }
        }
    },
    created() {
        this.$on('updatePopper', () => {
            this.showPopper && this.updatePopper();
        });
        this.$on('visible', val => {
            this.showPopper = val;
        });
        this.$on('item-click', val => {
            this.$emit('click', val);
        })
    },
    mounted() {
        this.$parent.popperElm = this.popperElm = this.$el;
        this.referenceElm = this.$parent.$el;
        this.currentPlacement = this.align;
    }
}
</script>

