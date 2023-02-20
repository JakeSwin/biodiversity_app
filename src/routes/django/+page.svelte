<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Array is: {data.posts.length} long</h1> 

<ul>
    {#each data.posts as x}
        <li>{x.title}</li>
    {/each}
</ul>