<template>
  <div class="text-gray text-14 mb-0">
    <input
      v-if="status"
      v-model="string"
      type="text"
      class="text-white bg-secondary border border-warning border-radius form-control form-control-sm"
      size="sm"
      placeholder="Silahkan input team kamu"
    />
    <div
      v-else
      class="text-white bg-secondary border border-warning border-radius form-control form-control-sm"
    >
      {{string}}
      <button class="pointer" @click.prevent="clear()">Remove</button>
    </div>
    <ul class="list-group options" v-if="isShow && list.length > 0">
      <li class="list-group-item" v-for="l in list" @click="select(l)" :key="l.id">
        <slot :list="l">{{l.title}}</slot>
      </li>
    </ul>
  </div>
</template>

<script>
import VueSweetalert2 from 'vue-sweetalert2'
import Vue from 'vue'
import axios from 'axios'

Vue.use(VueSweetalert2)

export default {
  model: {
    prop: 'value',
    event: 'select'
  },
  props: {
    reqUrl: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      string: null,
      list: [],
      isShow: false,
      status: true,
      timeout: null
    }
  },
  methods: {
    // selectItem (selectedList) {
    //   console.log('FORMMMM')
    //   console.log(selectedList)
    //   this.$emit('select', selectedList)
    // },
    // clearItem () {
    //   this.$emit('clear')
    // },
    select (selected) {
      this.clear()
      this.status = false
      this.string = selected.title
      this.$emit('select', selected)
    },
    clear () {
      this.string = ''
      this.list = []
      this.isShow = false
      this.status = true
      this.$emit('select', null)
    }
  },
  watch: {
    string () {
      if (this.status && (this.string !== '' || this.string !== null)) {
        if (this.timeout) {
          clearTimeout(this.timeout)
        }
        this.timeout = setTimeout(() => {
          // search team
          axios
            .get(process.env.API_URL + this.reqUrl + '&search=' + this.string)
            .then(response => {
              this.isShow = true
              this.list = response.data.data
            })
        }, 1500)
      } else {
        this.isShow = false
        this.list = []
      }
    }
  }
}
</script>
<style scoped>
.d-flex {
  display: flex;
  flex-wrap: wrap;
}
.d-flex-item {
  width: 300px;
  padding: 10px;
  border: 1px solid #eaeaea;
  margin: 0 20px 20px 0;
}
.form-autocomplete {
  padding: 10px;
  background: #eaeaea;
}

ul {
  width: 200px;
  padding-left: 0;
}
ul > li {
  cursor: pointer;
  list-style: none;
  padding: 5px;
  margin-bottom: 5px;
  border: 1px solid white;
  background: #dedede;
}
ul > li:hover {
  background: #313131;
  color: white;
}
ul > li.disabled,
ul > li.disabled:hover {
  background: #eaeaea;
  color: #a7a7a7;
  cursor: inherit;
}
ul > li.disabled .flag-icon {
  opacity: 0.5;
}
.list-group {
  position: absolute;
  z-index: 2;
}
.list-group-item {
  background: #000;
  color: white;
  margin-bottom: 5px;
  border-radius: 10px;
}
.list-group-item--avatar {
  align-items: center;
}
.list-group-item--avatar img {
  width: 50px;
  height: 50px;
  border-radius: 100%;
}
.list-group-item--title {
  flex-direction: column;
  margin-left: 15px;
}
.list-group-item--title p {
  margin-bottom: 0;
}
</style>
