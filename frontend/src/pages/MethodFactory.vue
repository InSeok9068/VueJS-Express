<template>
  <div class="content">
    <div class="container-fluid">
      <card>
        <base-dropdown title="Dropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something</a>
          <a class="dropdown-item" href="#">Separated link</a>
        </base-dropdown>
        <base-input type="text"
                  label="Company"
                  :disabled="false"
                  placeholder="Light dashboard"
                  >
        </base-input>
      </card>
    </div>
  </div>
</template>
<script>

  export default {
    components: {
    },
    data () {
    },
    methods: {
    }
  }

</script>
<style lang="scss">

</style>
