<!-- This example requires Tailwind CSS v2.0+ -->
<template>

<div class="container m-10" v-if="profile">
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Profile Information
      </h3>
    </div>
    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button @click='toggle = !toggle' class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          {{ toggle? 'Close' : 'Edit' }}
      </button>
    </div>
    <div v-show='toggle'>
    <Editprofile v-bind:profile="profile"/>
</div>
    
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Name
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ profile.name }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Occupation
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ profile.occupation }}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Email address
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ profile.email }}
          </dd>
        </div>
        <div class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Bio
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ profile.bio }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
import Editprofile from '../components/Editprofile.vue';
// import Profilelist from '../components/Profilelist'
export default {
  components: { Editprofile },
  name: "Details",
  data(){
    return{
      toggle: false,
    }
  },
  computed: {
    ...mapGetters([
      'profile'
    ])
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id)
    this.$store.dispatch('getProfile', this.id);
  },
};
</script>