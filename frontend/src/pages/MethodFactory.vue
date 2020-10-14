<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <form>
        <div class="row">
          <div class="col-md-3">
            <base-select
              v-model="preselect_value"
              :items="items"
              :input_id="'my_selectbox'"
              @input="value => { preselect_value = value }"
            ></base-select>
          </div>
          <div class="col-md-3">
            <base-input type="text">
            </base-input>
          </div>
        </div>
        </form>
      </card>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {
        items : [
          "1번",
          "2번",
          "3번"
        ],
        preselect_value : "테스트"
      }
    },
    methods: {
    }
  }

</script>
<style lang="scss">

</style>
