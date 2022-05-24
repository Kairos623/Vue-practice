import { createRouter, createWebHistory } from 'vue-router'
import ActiveUsers from "@/pages/ActiveUsers"
import UsersAll from "@/pages/UsersAll"
import BlackLIst from "@/pages/BlackLIst";


const routes = [
  {
    path: '/ActiveUsers',
    name: 'ActiveUsers',
    component: ActiveUsers
  },
  {
    path: '/UsersAll',
    name: 'UsersAll',
    component: UsersAll
  },
  {
    path: '/BlackList',
    name: 'BlackList',
    component: BlackLIst
  }
]

const index = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default index