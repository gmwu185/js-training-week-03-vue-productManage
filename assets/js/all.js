"use strict";$(function(){}),new Vue({el:"#app",data:{products:[{id:"1596693088100",unit:"裝置藝術",category:"景點活動",title:"台中新盛綠川水岸廊道賞燈第二期 (2018)",origin_price:1500,content:"彩色燈圈最為精彩熱鬧又浪漫，可於水岸邊盡情拍照",price:1200,enabled:!0,imageUrl:"https://raw.githubusercontent.com/gmwu185/js-training-week-02-jsajax/gh-pages/assets/img/%E5%8F%B0%E4%B8%AD%E6%96%B0%E7%9B%9B%E7%B6%A0%E5%B7%9D%E6%B0%B4%E5%B2%B8%E5%BB%8A%E9%81%93%E8%B3%9E%E7%87%88_2.jpg"},{id:"1596693088101",unit:"裝置藝術",category:"景點活動",title:"台中新盛綠川水岸廊道賞燈第一期",origin_price:1800,content:"新盛綠川水岸廊道",price:1500,enabled:!1,imageUrl:"https://raw.githubusercontent.com/gmwu185/js-training-week-02-jsajax/gh-pages/assets/img/%E5%8F%B0%E4%B8%AD%E6%96%B0%E7%9B%9B%E7%B6%A0%E5%B7%9D%E6%B0%B4%E5%B2%B8%E5%BB%8A%E9%81%93%E8%B3%9E%E7%87%88_1.jpg"}],tempProduct:{}},methods:{deleteProduct:function(){var t,e=this;1!=confirm("請確任是否刪除此筆產品資料 ?")||-1!==(t=this.products.findIndex(function(t){return t.id===e.tempProduct.id}))&&this.products.splice(t,1)},upDataProduct:function(){var t,e,i=this;Object.keys(this.tempProduct).length<=0?alert("所有輸入內容不得留空"):(-1!==(t=this.products.findIndex(function(t){return t.id===i.tempProduct.id}))?(e=Object.assign({},this.tempProduct),this.$set(this.products,t,e)):(this.tempProduct.id=Date.now(),this.products.splice(this.products.length,0,Object.assign({},this.tempProduct))),this.tempProduct={},this.controlProductModal(!1))},openMmodal:function(t,e){var i=1<arguments.length&&void 0!==e?e:{};switch(this.tempProduct=JSON.parse(JSON.stringify(i)),t){case"new":$("#productModalTitle").html("新增產品"),this.controlProductModal(!0,t);break;case"edit":$("#productModalTitle").html("編輯產品"),this.controlProductModal(!0,t);break;case"del":this.deleteProduct()}},controlProductModal:function(t){t?$("#productModal").modal("show"):$("#productModal").modal("hide")}}});