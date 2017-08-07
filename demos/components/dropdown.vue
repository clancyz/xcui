<template lang="md">

# Dropdown 下拉菜单

向下弹出的列表。

当页面上操作命令过多时，可使用此组件收纳操作元素。从下拉菜单中选择并执行命令。

## 基础使用

::: demo 最简单的下拉菜单，通过`type`设置颜色，通过`disabled`设置禁用状态，通过`divided`设置分栏。默认显示形式为链接。

```html

<tpl>
    <x-dropdown type="primary">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
            <x-dropdown-item disabled>鱼香肉丝</x-dropdown-item>
            <x-dropdown-item divided>过桥米线</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>

```

:::


## 其他形式的触发元素

::: demo 通过设置`mode`可改变默认的触发元素，默认为`link`, 可选值为`button`和`split-button`。也可以通过`custom`这个具名slot来自定义触发元素，如果使用了这个slot, `mode`选项将失效。

```html

<tpl>
    <x-dropdown type="primary" mode="button">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown type="info" mode="split-button">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown type="info" mode="split-button">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>


```

:::


## 弹出位置

::: demo 支持6个弹出位置。默认为`bottom-end`。

```html

<tpl>
    <x-dropdown type="primary">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
    <x-dropdown type="primary">
        下拉菜单
        <x-dropdown-menu slot="dropdown">
            <x-dropdown-item>北京烤鸭</x-dropdown-item>
            <x-dropdown-item>夫妻肺片</x-dropdown-item>
        </x-dropdown-menu>
    </x-dropdown>
</tpl>

```

:::


</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        handleClick(itemKey) {
            debugger;
        }
    }
}
</script>
