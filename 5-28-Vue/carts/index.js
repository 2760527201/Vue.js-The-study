var app = new Vue({
    el: '#app',
    data: {
        list: [
            { id: 1, name: 'ihone7', price: 6188, count: 1, status: false },
            { id: 2, name: 'ipad pro', price: 5888, count: 1, status: false },
            { id: 3, name: 'mac pro', price: 21488, count: 1, status: false }
        ],
        allCheck: false
    },
    computed: {
         totalPrice() {
            let total = 0;
            this.list.forEach(item => {
                if (item.status == true) {
                    total += item.price * item.count;
                }
            });
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',')
        },
        countNum() {
            let countNum = 0;
            this.list.forEach(item => {
                if (item.status == true) {
                    countNum += item.count;
                }
            });
            return countNum;
        }
    },
    methods: {
        reduce(index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        add(index) {
            this.list[index].count++;
        },
        del(index) {
            this.list.splice(index, 1)
        },
        change() {
            this.allCheck = !this.allCheck;
            this.list.forEach(item => {
                item.status = this.allCheck
            })
        },
        itemChange(index) {
            this.list[index].status = !this.list[index].status;
            let num = 0;
            this.list.forEach(item => {
                if (item.status == true) {
                    num++;
                }
            });
            if (num == this.list.length) {
                this.allCheck = true;
            } else {
                this.allCheck = false;
            }
        }
    },
});