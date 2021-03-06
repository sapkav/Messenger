import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    chats: [],
    currentUserChat: ''
  },
  mutations: {
    SET_CONTACTS_ALL: (state, contacts) => {
       state.contacts = contacts
    },
    SET_CHATS_ALL: (state, chats) => {
      state.chats = chats
    },
    GET_NAME_TO_HEADER(state, user) {
      if (user) {
        state.currentUserChat = user
      } else {
        state.currentUserChat = ''
      }
    }
  },
  actions: {
    FETCH_CONTACTS({commit}) {
      return axios.get('http://localhost:3000/contacts')
      .then(contacts => {
        commit('SET_CONTACTS_ALL', contacts.data)
      })
    },
    FETCH_CHATS({commit}) {
      return axios.get('http://localhost:3000/chats')
      .then(chats => {
        commit('SET_CHATS_ALL', chats.data)
      })
    },
    SET_NAME_HEADER({commit}, user) {
      commit('GET_NAME_TO_HEADER', user)
    },
    SET_MESSAGE_TO_API({commit}, {userId, chat}) {
      return axios.put('http://localhost:3000/chats/' + userId, chat)
      .then(response => {
        return response
      })
    },
    SET_CONTACT_TO_CONTACTS({commit}, chat) {
      return axios.post('http://localhost:3000/contacts', chat)
      .then(response => {
          return response
      })
    },
    SET_CONTACT_TO_CHATS({commit}, chat) {
      return axios.post('http://localhost:3000/chats', chat)
      .then(response => {
          return response
      })
    },
    DELETE_MESSAGES_FROM_CHAT({commit}, {userId, chat}) {
      return axios.put('http://localhost:3000/chats/' + userId, chat)
      .then(response => {
        return response;
      })
    },
    DELETE_CONTACT({commit}, {userId}) {
      return axios.delete('http://localhost:3000/contacts/' + userId)
      .then(response => {
        return response;
      })
    },
    DELETE_CONTACT_CHAT({commit}, {userId}) {
      return axios.delete('http://localhost:3000/chats/' + userId)
      .then(response => {
        return response;
      })
    }
  },
  getters: {
    СHATS1(state) {
      return state.chats
  }
  }
})
