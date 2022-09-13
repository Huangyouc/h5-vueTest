import ShopCar from './components/shopCar/index.vue';
import imagePage from './components/requestImage/index.vue';
import scrollTest from './components/scrollTest/index.vue';
import eventTest from './components/eventTest/index.vue';
const routeslist = [
    { path: '/shopCar',name: 'ShopCar', component: ShopCar },
    { path: '/imagePage',name: 'imagePage', component: imagePage },
    { path: '/scrollTest',name: 'scrollTest', component: scrollTest },
    { path: '/eventTest',name: 'eventTest', component: eventTest },
];
export default routeslist;