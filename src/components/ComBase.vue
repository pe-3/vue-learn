<template>
    <!-- 对于绝大多数attr来说，从外部提供给组件的值会替换掉组件内部设置好的值，除了 class 和 style -->
    <!-- 不同于其他 attr， 这两个外部属性做的是合并内部和外部的值 -->
    <div
        class="com-base"
        type="text"
    >
        {{ val }}
        <el-button @click="add"></el-button>
        <el-input/>
    </div>    
</template>

<script>

export default { 
    name:'ComBase',
    // data必须是一个函数，因为如果是对象的话，那么每个实例的data都指向同一个对象
    // 那么当这个组件被复用之后，所有实例都共享一个数据对象，这个对象就是定义组件时的字面量对象
    // 而函数式的则每次调用都会返回新的对象，因此复用之后，组件互不影响
    // 就是data函数必须保证每次调用返回的对象都和上一次不同，就不会影响复用效果
    data() {
        return {
            val: 0
        }
    },
    props: {
        prop1: {
            type: Number
            // prop的类型可以是 Number、Boolean、String 等
            // 也可以是 Object、Array 等
            // prop如果是引用类型，必须用工厂函数设置默认值
            // prop的type也可以是构造函数，来判断这个prop实例是否出自这个构造函数
        },
        prop2: {
            type: Boolean
        },
        id: {
            type: Number
        },
        name: {
            type: String
        }
    },
    methods: {
        add() {
            this.val += 1;
        }
    },
    created() {
        console.log(this.prop1);
        console.log(this.prop2);
        console.log(this.id);
        console.log(this.name);
        // ddd 是没有声明的 prop，也就是非prop attribute 
        // 这样未经声明的 prop attribute 会自动添加到 组件的根元素上
        console.log(this.ddd);
    },
    inheritAttrs: false
    // 设置这个属性为 false，根元素便不会继承 attr
    // 但是这个属性不会影响 style 和 class 的绑定
}
// 这个 attr 继承的特性允许在使用组件的时候更像是使用原始的HTML元素，而不必担心那个元素是真正的根元素

// prop 可以从父级流向子级，这是单向数据流关键
// 这样有利于推测数据，让代码变得容易理解
</script>