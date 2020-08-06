console.log('main.js all scope');

new Vue({
  el: '#app',
  data: {
    products: [
      {
        id: "hgT67Z2q7vQN1YLkldPydbZUjAgWqxUeUMqCUAfqtgFlH44V7InEBi95ivYSZlqR",
        unit: "裝置藝術",
        category: "景點活動",
        title: "台中新盛綠川水岸廊道賞燈第二期 (2018)",
        origin_price: 1500,
        content: "彩色燈圈最為精彩熱鬧又浪漫，可於水岸邊盡情拍照",
        price: 1200,
        enabled: true,
        imageUrl: [ 
          "https://raw.githubusercontent.com/gmwu185/js-training-week-02-jsajax/gh-pages/assets/img/%E5%8F%B0%E4%B8%AD%E6%96%B0%E7%9B%9B%E7%B6%A0%E5%B7%9D%E6%B0%B4%E5%B2%B8%E5%BB%8A%E9%81%93%E8%B3%9E%E7%87%88_2.jpg" 
        ],
      },
      {
        id: "AdGGWFIXLHixTg8lGnm3ntKODTtqrYjbee2PWPOD9hQLr6Uay146ckV83taTOEtj",
        unit: "裝置藝術",
        category: "景點活動",
        title: "台中新盛綠川水岸廊道賞燈第一期",
        origin_price: 1800,
        content: "新盛綠川水岸廊道",
        price: 1500,
        enabled: false,
        imageUrl: [ 
          "https://raw.githubusercontent.com/gmwu185/js-training-week-02-jsajax/gh-pages/assets/img/%E5%8F%B0%E4%B8%AD%E6%96%B0%E7%9B%9B%E7%B6%A0%E5%B7%9D%E6%B0%B4%E5%B2%B8%E5%BB%8A%E9%81%93%E8%B3%9E%E7%87%88_1.jpg" 
        ],
      },
    ],
    tempProduct: {},
  },
  methods: {
    openMmodal(actionStatus) {
      console.log('openMmodal() -> actionStatus', actionStatus);
      this.controlProductModal(true);
    },
    controlProductModal(isShwo) {
      isShwo ?
        $('#productModal').modal('show') :
        $('#productModal').modal('hide');
    }
  },
});



