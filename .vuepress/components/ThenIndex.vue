<template>
<div>
    <div v-for="post in posts">
        <h2>
            <router-link :to="post.path"><span v-if="post.frontmatter.data">{{post.frontmatter.data}}</span></router-link>
        </h2>
        <p>{{ post.frontmatter.description }}</p>
    </div>
</div>
</template>

<script>
export default {
    computed: {
        posts() {
            return this.$site.pages
                .filter(x => x.path.startsWith('/then/') && !x.frontmatter.then_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
