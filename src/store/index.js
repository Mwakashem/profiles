import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    profiles: [],
    profile: null,
  },
  mutations: {
    GETPROFILES (state, payload) {
      state.profiles = payload;
    },
    GETPROFILE (state, payload, id) {  
      state.profile = payload;
    },
    UPDATEPROFILE (state, updateprofile) { 
            // profile.splice(profile);
        state.profile = [...updateprofile];
    },
  },
 getters: {
    profiles: state => state.profiles,
    profile: state => state.profile,
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
    updateProfile({commit}, updateprofile){
      console.log(updateprofile)
      axios.put(`https://ti-react-test.herokuapp.com/users/${updateprofile.id}`, updateprofile);
      // console.log(name)
        commit('UPDATEPROFILE', updateprofile, getProfile(updateprofile.id))
        
    }
  },
  modules: {
    // 
  }
})
