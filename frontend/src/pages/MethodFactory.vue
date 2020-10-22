<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <form @submit.prevent="onSubmit">
        <div class="row">
          <div class="col-md-1">
            <base-select
              v-model="preselect_value"
              :items="items"
              :input_id="'itemsList'"
              @input="value => { preselect_value = value }"
            ></base-select>
          </div>
          <div class="col-md-2">
            <base-input type="text" v-model="strText">
            </base-input>
          </div>
          <div class="col-md-1">
            <base-select
              v-model="preselect_value"
              :items="prepositionList"
              :input_id="'prepositionList'"
              @input="value => { preselect_value = value }"
            ></base-select>
          </div>
          <div class="col-md-2">
            <base-input type="text" v-model="strPreText">
            </base-input>
          </div>
          <div class="col-md-1">
            <button type="submit" class="btn btn-primary">Make</button>
          </div>
          <div class="col-md-1">
            <p>=</p>
          </div>
          <div class="col-md-3">
            <base-input v-model="resultText">
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
          "Select",
          "Insert",
          "Update",
          "Delete",
        ],
        prepositionList : [
          "By",
          "For",
          "Of",
          "From",
          "To",
        ],
        preselect_value : "",
        strText : "",
        strPreText : "",
        resultText : ""
      }
    },
    methods: {
      onSubmit(){
        this.$http.get('/api/method/name', {
          params: {
            option : this.preselect_value,
            text : this.strText
          }
        }).then((response) => {
          this.resultText = response.data;
        })
      }
    }
  }

</script>
<style lang="scss">

</style>
