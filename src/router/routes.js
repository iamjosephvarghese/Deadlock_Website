import Home from '@/components/Home'
import Rules from '@/components/Rules'
import Leaderboard from '@/components/Leaderboard' 
import userDash from '@/components/userDash'
import NotFoundView from '@/components/404.vue'
import EnterDetails from '@/components/user/EnterDetails'
import userDashboard from '@/components/user/Dashboard'
import adminDashboard from '@/components/admin/Dashboard'

const routes = [
  { path: '/',
    component: Home
  }, {
    path: '/rules',
    component: Rules
  }, {
    path: '/leaderboard',
    component: Leaderboard
  }, {
    path: '/user',
    component: userDash,
    meta: {requiresAuth: true},
    children: [{
          path: 'enterdetails',
          component: EnterDetails
        }, {
          path: 'dashboard',
          component: userDashboard
        }
    ]
  }, {
    // not found handler
    path: '*',
    component: NotFoundView
  }, {
    path: '/admin',
    component: adminDashboard,
    meta: {requiresAuth: true}
  }
  ]

export default routes
