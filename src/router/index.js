import Contacts from "@/views/Contacts.vue";
import Homepage from "@/views/Homepage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "",
      component: Homepage,
    },
    {
      path: "/contacts",
      component: Contacts,
    },
  ],
});

export default router;
