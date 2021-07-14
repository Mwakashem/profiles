import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    profiles: [],
    profile: null,
    updateprofile: null,
  },
  mutations: {
    GETPROFILES (state, payload) {
      state.profiles = payload;
    },
    GETPROFILE (state, payload, id) {  
      state.profile = payload;
    },
    GETUPDATEPROFILE (state, payload, id) {  
      state.updateprofile = payload;
    },
    UPDATEPROFILE (state, updateprofile) { 
            // profile.splice(profile);
        state.profile = [...updateprofile];
    },
  },
 getters: {
    profiles: state => state.profiles,
    profile: state => state.profile,
    updateprofile: state => state.updateprofile,
  },
  actions: {
    getProfiles ({ commit }) {
      axios.get('https://ti-react-test.herokuapp.com/users/').then((response) => {
        commit('GETPROFILES', response.data)
        console.log(response.data)
      });
    },
    getProfile ({ commit }, id) {
      console.log(id)
      axios.get(`https://ti-react-test.herokuapp.com/users/${id}`).then((response) => {
        commit('GETPROFILE', response.data)
        console.log(response.data)
      });
    },
    getupdateProfile ({ commit }, id) {
      console.log(id)
      axios.get(`https://ti-react-test.herokuapp.com/users/${id}`).then((response) => {
        commit('GETUPDATEPROFILE', response.data)
        console.log(response.data)
      });
    },
    updateProfile({commit}, updateprofile){
      console.log(updateprofile)
      axios.put(`https://ti-react-test.herokuapp.com/users/${updateprofile.id}`, updateprofile);      // console.log(name
        commit('GETPROFILES', updateprofile)
        
    }
  },
  modules: {
    // 
  }
})
