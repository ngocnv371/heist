<template>
  <div class="text-center">
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on">
          mdi-chevron-right
        </v-icon>
      </template>
      <v-card>
        <v-card-title class="headline">{{ contract.name }}</v-card-title>
        <v-card-text>
          <v-list one-line dense>
            <v-subheader>Target</v-subheader>
            <v-list-item>
              <v-list-item-content v-text="contract.target" />
            </v-list-item>
            <v-subheader>Required Skills</v-subheader>
            <v-list-item v-for="item in skills" :key="item.skill">
              <v-list-item-content>
                {{ item.skill }} {{ item.level }}
              </v-list-item-content>
            </v-list-item>
            <v-subheader>Available Rogues</v-subheader>
            <v-list-item-group
              v-model="selectedRogue"
              active-class="primary--text"
            >
              <v-list-item v-for="item in rogues" :key="item.id">
                <v-list-item-content>
                  {{ item.name }}
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
            <v-list-item v-if="!rogues.length">
              <v-list-item-content>
                You know no rogue who could handle this job.
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
import { mapGetters } from "vuex";
import { formatSkills } from "@/core/generator";

export default {
  name: "AssignmentDialog",
  props: {
    contract: Object
  },
  components: {},
  computed: {
    ...mapGetters("rogues", ["getRoguesForContract"]),
    rogues() {
      return this.getRoguesForContract(this.contract);
    },
    skills() {
      return formatSkills(this.contract.skills);
    }
  },
  data() {
    return {
      dialog: false,
      selectedRogue: 0
    };
  }
};
</script>
