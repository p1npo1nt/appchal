<!-- src/routes/+page.svelte -->
<script lang="ts">
    import { onMount } from 'svelte';
    let opportunities = [];
  
    onMount(async () => {
      const res = await fetch('/api/opportunities');
      opportunities = await res.json();
    });
  </script>
  
  <h1>Available Volunteering Opportunities</h1>
  
  <ul>
    {#each opportunities as opportunity}
      <li>
        <h2>{opportunity.title}</h2>
        <p>{opportunity.description}</p>
        <p><strong>Organization:</strong> {opportunity.organization}</p>
        <p><strong>Date:</strong> {opportunity.date}</p>
        <p><strong>Location:</strong> {opportunity.location}</p>
      </li>
    {/each}
  </ul>
  