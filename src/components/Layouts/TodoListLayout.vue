<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :width="250"
      elevation="3"
       :rail="rail"
        @click="rail = false"
      class="bg-navigationDrawerColor"
    >

    <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

      <!-- <v-list>
        <v-list-item link class="mt-17" >
          <template v-slot:prepend>
            <v-icon icon="mdi-view-dashboard-outline" class="me-0"></v-icon>
          </template>

          <v-list-item-title class="ms-0">Dashboard</v-list-item-title>
        </v-list-item>


        
          <v-list-item link >
            <template v-slot:prepend>
              <v-icon
                icon="mdi-file-chart-outline"
                class="me-0"
              ></v-icon>
            </template>

            <v-list-item-title class="ms-0">New Records</v-list-item-title>
          </v-list-item>
          <v-list-item link >
            <template v-slot:prepend>
              <v-icon
                icon="mdi-file-chart-outline"
                class="me-0"
              ></v-icon>
            </template>

            <v-list-item-title class="ms-0">One Time Patients</v-list-item-title>
          </v-list-item>
         
          <v-list-item link >
            <template v-slot:prepend>
              <v-icon
                icon="mdi-file-chart-outline"
                class="me-0"
              ></v-icon>
            </template>

            <v-list-item-title class="ms-0">Inconclusive Record</v-list-item-title>
          </v-list-item>
          
      </v-list> -->

     
    </v-navigation-drawer>
    <v-app-bar>
      <template v-slot:prepend>
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          @click.stop="mini = !mini"
        ></v-app-bar-nav-icon>
      </template>
      <v-toolbar-title class="font-weight-bold">{{ page }}</v-toolbar-title>
      <v-spacer></v-spacer>
     
    </v-app-bar>
    <v-main class="custom-main" bg-color="background">
      <slot />
    </v-main>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();


const drawer = ref(null);
const rail = ref(true);
const mini = ref(true);

defineProps({
  page: {
    type: String,
    default: "Dashboard",
  },
});


</script>
<style scoped>
.custom-main {
  --v-layout-left: 0px !important;
}
.mt-17 {
  margin-top: 6rem;
}
</style>