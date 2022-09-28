<template>
    <div id="main">
        <div v-on:click="show = !show">
            点我啊
        </div>
        <transition name="fade">
            <div v-show="show" class="abc">显示还是隐藏</div>
        </transition>
        <transition>
            <div v-show="show" class="abc">显示还是隐藏</div>
        </transition>

        <transition name="slide-fade">
            <p v-if="show">菜鸟教程</p>
        </transition>
    </div>

</template>

<script>
export default {
    name: "animatorTest",
    data() {
        return {
            show: true
        }
    }
}
</script>

<style>
#main {
    position: fixed;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active, 2.1.8 版本以下 */
    {
    opacity: 0
}

/* 如果你使用一个没有名字的 <transition>，则 v- 是这些类名的默认前缀。如果你使用了 <transition name="my-transition">，那么 v-enter 会替换为 my-transition-enter。 */
.v-enter-active,
.v-leave-active {
    transition: opacity 1s
}
.v-enter,
.v-leave-to{
    opacity: 0
}


/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 3s cubic-bezier(1, 0.1, 0.1, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active 用于 2.1.8 以下版本 */ {
  transform: translate(100px,100px);
  opacity: 0;
}

.abc{
    background-color: brown;
}
</style>