<template>
  <div class="contracts">
    <v-btn color="primary" @click="refreshContracts">refresh</v-btn>
    <v-list two-line>
      <template v-for="(item, index) in contracts">
        <v-list-item :key="item.id">
          <v-list-item-content>
            <v-list-item-title v-text="item.name" />
            <v-list-item-subtitle v-text="item.target" />
          </v-list-item-content>
          <v-list-item-action>
            <AssignmentDialog :contract="item" />
          </v-list-item-action>
        </v-list-item>
        <v-divider v-if="index < contracts.length - 1" :key="index" />
      </template>
    </v-list>
  </div>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<script>
import AssignmentDialog from "../components/AssignmentDialog.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Contracts",
  components: {
    AssignmentDialog
  },
  computed: {
    ...mapGetters("contracts", ["contracts"])
  },
  methods: {
    ...mapActions("contracts", ["refreshContracts"])
  }
};
</script>
