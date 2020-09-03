<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <base-select
          v-model="preselect_value"
          :items="items"
          :input_id="'my_selectbox'"
          @input="value => { preselect_value = value }"
        ></base-select>
        <base-input type="text"
                  :disabled="false"
                  >
        </base-input>
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
