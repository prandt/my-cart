<template>
    <div>
       <div v-for="item, index in cartItems" :key="index">
         <v-card class="mb-5">
            <v-card-title>
                {{ `${index + 1} ${item.name}` }}
            </v-card-title>
            <v-card-text>
                
            </v-card-text>
         </v-card>
       </div>
    </div>
</template>

<script>
export default {
    computed: {
        cartItems () {
            return this.$store.state.cartItems
        }
    }
}
</script>