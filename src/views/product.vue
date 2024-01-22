<template>
  <div class="container">
    <div class="row py-3">
      <div class="col-md-6">
        <h2>產品列表</h2>
        <table class="table table-hover mt-4">
          <thead>
            <tr>
              <th width="150">產品名稱</th>
              <th width="120">原價</th>
              <th width="120">售價</th>
              <th width="150">是否啟用</th>
              <th width="120">查看細節</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" :key="product.id">
              <td width="150">{{ product.title }}</td>
              <td width="120">
                {{ product['origin_price'] }}
              </td>
              <td width="120">
                {{ product.price }}
              </td>
              <td width="150">
                <span class="text-success" v-if="product['is_enabled']">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td width="120">
                <button type="button" class="btn btn-primary" @click="showCard(product)">
                  查看細節
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          目前有 <span>{{ products.length }}</span> 項產品
        </p>
      </div>
      <div class="col-md-6">
        <h2>單一產品細節</h2>
        <template v-if="showProduct.title">
          <div class="card mb-3">
            <img :src="showProduct.imageUrl" class="card-img-top primary-image" alt="主圖" />
            <div class="card-body">
              <h5 class="card-title">
                {{ showProduct.title }}
                <span class="badge bg-primary ms-2">{{ showProduct.category }}</span>
              </h5>
              <p class="card-text">商品描述：{{ showProduct.description }}</p>
              <p class="card-text">商品內容：{{ showProduct.content }}</p>
              <div class="d-flex">
                <p class="card-text me-2">{{ showProduct.price }}</p>
                <p class="card-text text-secondary">
                  <del>{{ showProduct['origin_price'] }}</del>
                </p>
                元 / {{ showProduct.unit }}
              </div>
            </div>
          </div>
          <template>
            <img src="" alt="" class="images m-2" />
          </template>
        </template>
        <p class="text-secondary" v-else>請選擇一個商品查看</p>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_API, VITE_PATH } = import.meta.env

export default {
  data() {
    return {
      products: [],
      showProduct: {}
    }
  },
  methods: {
    checkAdmin() {
      this.axios
        .post(`${VITE_API}/api/user/check`)
        .then((res) => {
          this.getData()
        })
        .catch((err) => {
          alert(err.data.message)
          this.$router.push('/')
        })
    },
    getData() {
      this.axios
        .get(`${VITE_API}/api/${VITE_PATH}/admin/products`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          alert(err.data.message)
        })
    },
    showCard(product) {
      this.showProduct = product
    }
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.axios.defaults.headers.common['Authorization'] = token

    this.checkAdmin()
  }
}
</script>

<style>
img {
  object-fit: contain;
  max-width: 100%;
}

.primary-image {
  height: 300px;
}

.images {
  height: 150px;
}
</style>
