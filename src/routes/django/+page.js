/** @type {import('./$types').PageLoad} */
/** @type {import('./$types').PageData} */
export async function load({ fetch, params }) {
    const res = await fetch(`http://jsonplaceholder.typicode.com/todos`, {method: 'GET'});
    const posts = await res.json();
    return { posts };
}