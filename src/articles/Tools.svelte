<script lang="ts">
    import Article from '../components/Article.svelte'
    import Section from '../components/Section.svelte'
    import Card from '../components/Card.svelte'
    import Link from '../components/Link.svelte'
</script>

<Article>
    <Section>
        <Card>
            <h1>
                I am currently learning
                <Link href="https://svelte.dev/" newTab={true}>Svelte</Link>
            </h1>
            <p>
                But I have extensive knowledge in
                <Link href="https://reactjs.org/" newTab={true}>React,</Link>
                <Link href="https://www.rust-lang.org" newTab={true}>Rust,</Link>
                <Link href="https://www.swift.org" newTab={true}>Swift,</Link>
                and
                <Link href="https://www.lua.org" newTab={true}>Lua.</Link>
                <br>
                But besides that, I constantly try to contribute to open source projects!
            </p>
            <small>This website is actually
                <Link href="https://github.com/iivusly/iivusly.github.io" newTab={true}>open source</Link>
                and made in Svelte!</small>
        </Card>
    </Section>
</Article>

<style lang="scss">
</style>
