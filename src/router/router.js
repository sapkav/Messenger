import Vue from 'vue'
import VueRouter from 'vue-router'
import contactList from '../components/contacts/contact-list.vue'
import contactUserInfo from '../components/contacts/contact-user-info.vue'
import userList from '../components/users/user-list.vue'
import usersChat from '../components/users/chat/users-chat.vue'
import detailsMain from '../components/details/details-main.vue'
import addContact from '../components/contacts/add-contact.vue'
import callList from '../components/calls/call-list.vue'
import homeMain from '../components/home/home-main.vue'

Vue.use(VueRouter)

const routes = [
 {
   path: '/',
   name: 'contacts',
   component: contactList
 },
 {
   path: '/contact',
   name: 'contact',
   component: contactUserInfo
 },
 {
  path: '/chats',
  name: 'chats',
  component: userList
},
{
  path: '/chat',
  name: 'chat',
  component: usersChat,
  props: true
},
{
  path: '/details',
  name: 'details',
  component: detailsMain
},
{
  path: '/calls',
  name: 'calls',
  component: callList
},
{
  path: '/home',
  name: 'home',
  component: homeMain
},
{
  path: '/contactAdd',
  name: 'contactAdd',
  component: addContact
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
