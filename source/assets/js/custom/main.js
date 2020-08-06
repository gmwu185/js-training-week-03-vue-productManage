console.log('main.js all scope');

new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: "1596693088100",
        unit: "裝置藝術",
        category: "景點活動",
        title: "台中新盛綠川水岸廊道賞燈第二期 (2018)",
        origin_price: 1500,
        content: "彩色燈圈最為精彩熱鬧又浪漫，可於水岸邊盡情拍照",
        price: 1200,
        enabled: true,
        imageUrl: "https://raw.githubusercontent.com/gmwu185/js-training-week-02-jsajax/gh-pages/assets/img/%E5%8F%B0%E4%B8%AD%E6%96%B0%E7%9B%9B%E7%B6%A0%E5%B7%9D%E6%B0%B4%E5%B2%B8%E5%BB%8A%E9%81%93%E8%B3%9E%E7%87%88_2.jpg",
      },
      {
        id: "1596693088101",
        unit: "裝置藝術",
        category: "景點活動",
        title: "台中新盛綠川水岸廊道賞燈第一期",
        origin_price: 1800,
        content: "新盛綠川水岸廊道",
        price: 1500,
        enabled: false,
        imageUrl: "https://raw.githubusercontent.com/gmwu185/js-training-week-02-jsajax/gh-pages/assets/img/%E5%8F%B0%E4%B8%AD%E6%96%B0%E7%9B%9B%E7%B6%A0%E5%B7%9D%E6%B0%B4%E5%B2%B8%E5%BB%8A%E9%81%93%E8%B3%9E%E7%87%88_1.jpg",
      },
    ],
    tempProduct: {
      // imageUrl: 'https://raw.githubusercontent.com/gmwu185/js-training-week-02-jsajax/gh-pages/assets/img/%E5%8F%B0%E4%B8%AD%E6%96%B0%E7%9B%9B%E7%B6%A0%E5%B7%9D%E6%B0%B4%E5%B2%B8%E5%BB%8A%E9%81%93%E8%B3%9E%E7%87%88_1.jpg',
      // id: "",
      // unit: "",
      // category: "",
      // title: "",
      // origin_price: Number,
      // content: "",
      // price: Number,
      // enabled: false,
    },
  },
  methods: {
    deleteProduct() {
      console.log('deleteProduct()');
      let delConfirm = confirm("請確任是否刪除此筆產品資料 ?");
      if (delConfirm == true) {
        const index = this.products.findIndex(item => item.id === this.tempProduct.id);
        if (index !== -1) {
          this.products.splice(index, 1);
        }
      } else {
        return
      }
    },
    upDataProduct() {

      // 查輸入內容是否為空
      if (Object.keys(this.tempProduct).length <= 0) {
        alert('所有輸入內容不得留空');
        return
      }

      /**
       * 比對 id 是否為同一筆
       * this.tempProduct.id 如果是新建不會有 ID undefined 會為 -1
       */
      const index = this.products.findIndex( item => item.id === this.tempProduct.id);

      

      if (index !== -1) {
        console.log('透過 findIndex() 取得 index 是第', index, '筆 item');

        /** 
         ** 轉換成新物件
         * 因 this.products 做透過事件資料更新，不會呈現畫面。
         * 因 Vue tempProduct 取得後，透過 Deep Copy (深層複製) 轉換成新物件。
         * - https://larry850806.github.io/2016/09/20/shallow-vs-deep-copy/
        */
        // 新物件寫法一：使用 Object.assign({}, oldObj) 
        let newTempProduct = Object.assign({},this.tempProduct);
        // 新物件寫法二：使用 JSON.parse(JSON.stringify( oldObj )) 
        // let newTempProduct = JSON.parse(JSON.stringify(this.tempProduct));


        /** 
         ** findIndex() 取得索引值
         * 透過 findIndex() 比對是同一筆，index 取得索引值。
         ** $set() 操作陣列資料並更新
         * $set() 方法操作 products 的陣列資料，將新的 newTempProduct 插入或更新。
         * vm.$set(object, key, value)
         * 參考來源：https://pjchender.blogspot.com/2017/05/vue-vue-reactivity.html
        */
        this.$set(this.products, index, newTempProduct);
        
      } else {
        console.log('透過 index 取得 是第', index, ' 為 -1 是全新的資料');
        
        // 使用時間戳記做為為 tempProduct ID 
        this.tempProduct.id = Date.now();

        // 將新資料轉新物件
        this.products.splice(this.products.length, 0, Object.assign({}, this.tempProduct));
        // this.products.splice(this.products.length, 0, JSON.parse(JSON.stringify(this.tempProduct)));
      }

      // 執行後清空輸入欄位與關閉 modal
      this.tempProduct = {};
      this.controlProductModal(false);
    },
    openMmodal(actionStatus, item = {}) {
      console.log('openMmodal() -> actionStatus', actionStatus);
      this.tempProduct = JSON.parse(JSON.stringify(item));
      switch (actionStatus) {
        case 'new':
          $('#productModalTitle').html('新增產品');
          this.controlProductModal(true, actionStatus);
          break;
        case 'edit':
          $('#productModalTitle').html('編輯產品');
          this.controlProductModal(true, actionStatus);
          break;
        case 'del':
          this.deleteProduct();
          break;
        default:
          break;
      };
    },
    controlProductModal(isShwo, ModalStatus) {
      // console.log('ModalStatus', ModalStatus);
      isShwo ?
        $('#productModal').modal('show') :
        $('#productModal').modal('hide');
    },
  },
});



