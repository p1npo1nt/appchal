<!-- src/routes/organization/[id]/+page.svelte -->
<script lang="ts">
    export let data;
  
    let organizationOpportunities = data.opportunities;
  </script>
  
  <h1>Opportunities from {data.organization}</h1>
  
  <ul>
    {#each organizationOpportunities as opportunity}
      <li>
        <h2>{opportunity.title}</h2>
        <p>{opportunity.description}</p>
        <p><strong>Date:</strong> {opportunity.date}</p>
        <p><strong>Location:</strong> {opportunity.location}</p>
      </li>
    {/each}
  </ul>
  