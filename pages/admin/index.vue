<template>
  <h1>Welcome to admin Page</h1>
</template>

<script>
export default {
  layout:'admin',
    middleware:['admin-auth']

}
</script>
