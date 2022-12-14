import { c as create_ssr_component } from "../../chunks/index.js";
const prerender = true;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>

<form name="${"contact"}" method="${"POST"}" data-netlify="${"true"}"><input type="${"hidden"}" name="${"contact"}" value="${"contact"}">
    <p><label>Your Name: <input type="${"text"}" name="${"name"}"></label></p>
    <p><label>Your Email: <input type="${"email"}" name="${"email"}"></label></p>
    <p><label>Your Role: <select name="${"role[]"}" multiple><option value="${"leader"}">Leader</option><option value="${"follower"}">Follower</option></select></label></p>
    <p><label>Message: <textarea name="${"message"}"></textarea></label></p>
    <p><button type="${"submit"}">Send</button></p></form>`;
});
export {
  Page as default,
  prerender
};
