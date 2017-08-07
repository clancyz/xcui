<script>
    import Emitter from 'xcui/src/utils/mixins/emitter';
    import Clickoutside from 'xcui/src/utils/clickoutside';
    import XButton from 'xcui/src/components/button';
    import XButtonGroup from 'xcui/src/components/button-group';

    export default {
        name: 'x-dropdown',
        componentName: 'x-dropdown',
        components: {
            XButton,
            XButtonGroup
        },
        directives: {Clickoutside},
        mixins: [Emitter],
        props: {
            type: String,
            trigger: {
                type: String,
                default: 'hover'
            },
            size: String,
            mode: {
                type: String,
                default: 'link'
            },
            hideOnClick: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                visible: false
            }
        },
        watch: {
            visible(val) {
                // todo
            }
        },
        methods: {
            handleClick() {

            },
            hideDropdown() {
                this.visible = false;
            }
        },
        mounted() {

        },
        render(h) {
            // mode: button / link / split-button
            // slot: dropdown / (default)text / custom
            // priority: custom => mode set & default text
            let { mode, type, size, handleClick, hideDropdown } = this;
            let triggerElm;
            if (this.$slots.custom) {
                triggerElm = this.$slots.custom;
            }
            else if (['button', 'link', 'split-button'].indexOf(mode) >= 0) {
                switch(mode) {
                    case 'link':
                        triggerElm = (
                            <span class="x-dropdown-link" ref="trigger">
                                { this.$slots.default }
                            </span>
                        );
                        break;
                    case 'button':
                        triggerElm = (
                           <x-button type={type} size={size}>
                               {this.$slots.default}
                           </x-button>
                        )
                        break;
                    case 'split-button':
                        triggerElm = (
                            <x-button-group>
                                <x-button type={type} size={size} nativeOnClick={handleClick}>
                                    {this.$slots.default}
                                </x-button>
                                <x-button ref="trigger" type={type} size={size} icon="arrow-down-b">
                                </x-button>
                            </x-button-group>
                        );
                        break;
                    default:
                        break;
                }
            }
            return (
                <div class="x-dropdown" v-clickoutside={hideDropdown}>
                    {triggerElm}
                    {this.$slots.dropdown}
                </div>
            );
        }
    };
</script>
