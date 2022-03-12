<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div
                            class="card-header d-flex justify-content-between align-items-center"
                        >
                            <h5 class="mb-0">Create Category</h5>
                            <router-link
                                class="btn btn-primary btn-sm"
                                :to="{ name: 'category-list' }"
                                >Create List</router-link
                            >
                        </div>

                        <div class="card-body">
                            <!-- <notifications group="foo" /> -->

                            <template>
                                <form
                                    @submit.prevent="createcategory"
                                    @keydown="categoryform.onKeydown($event)"
                                >
                                    <div class="col-6 offset-3">
                                        <input
                                            v-model="categoryform.name"
                                            type="text"
                                            name="name"
                                            placeholder="Username"
                                        />
                                        <div
                                            v-if="
                                                categoryform.errors.has('name')
                                            "
                                            v-html="
                                                categoryform.errors.get('name')
                                            "
                                        />
                                    </div>

                                    <div class="col-6 offset-3 text-right mt-2">
                                        <button
                                            class="btn btn-primary"
                                            type="submit"
                                            :disabled="categoryform.busy"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from "axios";

import Form from "vform";
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'
export default {
    name: "ApiCreate",

    data() {
        return {
            categoryform: new Form({
                name: "",
            }),
        };
    },

    mounted() {},

    methods: {
        async createcategory() {
            const response = await this.categoryform
                .post(`/api/category`)
                .then(({ data }) => {
                    this.categoryform.name = "";

                    this.$toast.success({
                        title: 'Success',
                        message: 'Ok',
                    },

'success'
                    )
                    // this.$toast.success('传递字符串作为通知的内容')
// window.location.href ='/';

                });
        },
    },
};
</script>


<style src="cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css"></style>




<!-- <template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header d-flex justify-content-between align-items-center">
                        <h5>Create Category</h5>
                        <router-link :to="{name: 'category-list'}" class="btn btn-primary">Category List</router-link>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-6 offset-3">
                                <form @submit.prevent="createCategory">
                                    <div class="form-group">
                                        <label for="">Category name</label>
                                        <input type="text" v-model="categoryForm.name" class="form-control" name="name" placeholder="category name" :class="{ 'is-invalid': categoryForm.errors.has('name') }">
                                        <has-error :form="categoryForm" field="name"></has-error>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Create Category</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Form } from 'vform'

export default {
    data(){
        return {
            categoryForm: new Form({
                name: '',
            }),
        }
    },
    methods: {
        createCategory(){
            this.categoryForm.post('/api/category').then(({ data }) => {
                this.categoryForm.name = '';

                this.$toast.success({
                    title:'Success!',
                    message:'Category created successfully.'
                })

            })
        }
    }
}
</script>

<style>

 -->
