<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
<h5 class="mb-0">
Product Categories
</h5>

<router-link class="btn btn-warning btn-sm" :to="{name:'create-category'}">Create Category</router-link>

                     </div>

                    <div class="card-body">

<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Slug</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>

<a href="" class="btn btn-success btn-sm">Edit</a>
<a href="" class="btn btn-danger btn-sm">Delete</a>

      </td>
    </tr>

  </tbody>
</table>


                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
