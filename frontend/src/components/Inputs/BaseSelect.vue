<template>
    <select
          v-model="this.value"
          class="custom-select"
          v-bind:id="input_id"
          v-on:input="updateValue($event.target.value)"
    >
        <option v-for="(item, index) in items" :value="index">{{ item }}</option>
    </select>
</template>

<script>
    export default {
        name: "base-select",
        data() {
            return {
                //
            };
        },
        props: ['value', 'items', 'input_id'],
        methods: {
            updateValue: function (value) {
                this.$emit('input', value);
            }
        }

    }
</script>