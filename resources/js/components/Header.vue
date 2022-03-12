<template>
    <div>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">



                <div class="container-fluid">
                <router-link class="navbar-brand" :to="{name:'home'}">Site logo</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                 <router-link class="nav-link" :to="{name:'home'}">Home</router-link>
                </li>
                <li class="nav-item">
              <router-link class="nav-link" :to="{name:'category-list'}">Product Category</router-link>
                </li>


                </ul>

                </div>
                </div>



</nav>
</div>
    </div>
</template>

<script>
export default {
    name: 'ApiHeader',

    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

</style>
