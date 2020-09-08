<template>
<div>
    <div v-for="post in posts">
        <h2>
            <router-link :to="post.path">{{ post.frontmatter.title }}</router-link><span v-if="post.frontmatter.data"> - {{post.frontmatter.data}}</span>
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
                .filter(x => x.path.startsWith('/article/') && !x.frontmatter.article_index)
                .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
        }
    }
}
</script>
