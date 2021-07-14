<!-- This example requires Tailwind CSS v2.0+ -->
<template>
<div class="container m-10">
  <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Update Information</h3>
          <p class="mt-1 text-sm text-gray-600">
           
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2" v-if="updateprofile">
        <form @submit="onSubmit">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <div class="text-gray-700">
                    <label class="block mb-1" for="forms-labelOverInputCode">Full name</label>
                    <input id="name" v-model="updateprofile.name" class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder=""/>
                    </div>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label class="block mb-1" for="forms-labelOverInputCode">Occupation</label>
                    <input id="occupation" v-model="updateprofile.occupation" class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder=""/>
                </div>

                <div class="col-span-6 sm:col-span-4">
                    <label class="block mb-1" for="forms-labelOverInputCode">Email Address</label>
                    <input id="email" v-model="updateprofile.email" class="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder=""/>
                </div>

                <div class="col-span-6 sm:col-span-6">
                  <label for="country" class="block text-sm font-medium text-gray-700">Bio</label>
                  <textarea id="bio" v-model="updateprofile.bio" class="w-full h-16 px-3 py-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline"></textarea>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';
export default {
  name: "Editprofile",
    computed: {
    ...mapGetters([
      'updateprofile'
    ]),
    ...mapActions(["updateProfile"]),
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id)
    this.$store.dispatch('getupdateProfile', this.id);
  },
   methods: {
  onSubmit(e){
        e.preventDefault();
        this.id = this.$route.params.id;
        console.log(this.updateprofile.name)
        this.$store.dispatch('updateProfile', this.updateprofile).then(path => {
         this.$router.push(`/${this.updateprofile.id}`)
      })
    }, 
   }
};
</script>