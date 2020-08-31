<template>
  <div class="content">
    <div class="container-fluid">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">월 단위 주간 보고서</h4>
            </template>
            <l-table class="table-hover table-striped"
                     :columns="table1.columns"
                     :data="table1.data">
            </l-table>
          </card>
        </div>
        <button @click="excelDownload">테스트</button>
    </div>
  </div>
</template>
<script>
  import Card   from '../components/Cards/Card.vue'
  import LTable from '../components/Table.vue'

  const tableColumns = ['Month', 'Download']
  const tableData = [
    {
      month: 1,
      download: "테스트"
    },
  ]

  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },        
        type: ['', 'info', 'success', 'warning', 'danger'],
        notifications: {
          topCenter: false
        }
      }
    },
    methods: {
      excelDownload(){
        this.$http.post('/api/excelDownload', {title: "vue.js는 조으다."})
        .then((response) => {
          alert("테스트")
        })
      },
      notifyVue (verticalAlign, horizontalAlign) {
        const color = Math.floor((Math.random() * 4) + 1)
        this.$notifications.notify(
          {
            message: `<span>Welcome to <b>Light Bootstrap Dashboard</b> - a beautiful freebie for every web developer.</span>`,
            icon: 'nc-icon nc-app',
            horizontalAlign: horizontalAlign,
            verticalAlign: verticalAlign,
            type: this.type[color]
          })
      }
    }
  }

</script>
<style lang="scss">

</style>
