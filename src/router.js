import ShopCar from './components/shopCar/index.vue';
import imagePage from './components/requestImage/index.vue';
import scrollTest from './components/scrollTest/index.vue';
import eventTest from './components/eventTest/index.vue';
import componentTest from './components/component/index.vue';
import routerTest from './components/routerTest/index.vue';
import animatorTest from './components/animatorTest/index.vue';
import mixinTest from './components/mixinTest/index.vue';
import aaaTest from './components/requestTest/index.vue';


const routeslist = [
    { path: '/shopCar',name: 'ShopCar', component: ShopCar },
    { path: '/imagePage',name: 'imagePage', component: imagePage },
    { path: '/scrollTest',name: 'scrollTest', component: scrollTest },
    { path: '/eventTest',name: 'eventTest', component: eventTest },
    { path: '/componentTest',name: 'componentTest', component: componentTest },
    { path: '/routerTest/1',name: 'routerTest', component: routerTest },
    { path: '/animatorTest',name: 'animatorTest', component: animatorTest },
    { path: '/mixinTest',name: 'mixinTest', component: mixinTest },
    { path: '/aaaTest',name: 'aaaTest', component: aaaTest },
    
];
export default routeslist;