<template>
    <main id="main">
        <h2 id="title">简单购物车</h2>
        <div v-if="dataList.length > 0">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>商品名称</th>
                        <th>商品单价</th>
                        <th>商品数量</th>
                        <th>商品合计</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item, index in dataList" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td><button @click="countMinus(index)">-</button>{{ item.count }}<button
                                @click="countAdd(index)">+</button></td>
                        <td>{{ item.count * item.price }}</td>
                        <td><button @click="itemRemove(index)">删除</button></td>
                    </tr>
                </tbody>
            </table>
            <div>总价：¥{{ totalPrice }}</div>
        </div>
        <div v-else>购物车为空</div>
        <br><br>
        <div v-html="message"></div>
    </main>
</template>
<script>
     var data_list = [
                {
                    id: 1,
                    name: "小米12",
                    price: 3999,
                    count: 2
                },
                {
                    id: 2,
                    name: "oppo",
                    price: 4999,
                    count: 1
                },
                {
                    id: 3,
                    name: "HUAWEI mate 40",
                    price: 5399,
                    count: 1
                },
                {
                    id: 4,
                    name: "iPhone 12",
                    price: 6999,
                    count: 1
                },
            ];
export default {
    name: "shopCar",
    components: {},
    // props: {
    //     list: {
    //         type: Array,
    //         default: () => [
    //             {
    //                 id: 1,
    //                 name: "小米12",
    //                 price: 3999,
    //                 count: 2
    //             },
    //             {
    //                 id: 2,
    //                 name: "oppo",
    //                 price: 4999,
    //                 count: 1
    //             },
    //             {
    //                 id: 3,
    //                 name: "HUAWEI mate 40",
    //                 price: 5399,
    //                 count: 1
    //             },
    //             {
    //                 id: 4,
    //                 name: "iPhone 12",
    //                 price: 6999,
    //                 count: 1
    //             },
    //         ]
    //     }
    // },
    data() {
        return {
            dataList: data_list,
            message:"<h1>这就很牛逼了</h1>"
        }
    },
    methods: {
        itemRemove(index) {
            this.dataList.splice(index, 1);
        },
        countMinus(index) {
            if (this.dataList[index].count > 1) {
                this.dataList[index].count--;
            }
        },
        countAdd(index) {
            this.dataList[index].count++;
        }
    },
    computed: {
        totalPrice() {
            let total = 0;
            this.dataList.forEach(element => {
                total += element.count * element.price
            });

            return total;
        }
    }
}
</script>
<style>
#abc {
    color: blue;
}

#main {
    position: fixed;
    overflow-y:scroll;
    overflow-x:hidden;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;

}

#title {
    color: black;
    text-align: center;
}

table {
    border: 1px solid #e9e9e9;
}

th,
td {
    padding: 8px 16px;
    border: 1px solid #e9e9e9;
}

th {
    background-color: #f7f7f7;
    color: #5c6b77;
    font-weight: bolder;
    white-space: nowrap;
}
button{
    margin: 0px 5px;
}
</style>