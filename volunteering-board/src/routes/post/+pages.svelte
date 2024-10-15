<!-- src/routes/post/+page.svelte -->
<script lang="ts">
    import { Opportunity } from '$lib/types';
    let title = '';
    let description = '';
    let organization = '';
    let date = '';
    let location = '';
  
    const submitOpportunity = async () => {
      const newOpportunity: Opportunity = {
        id: crypto.randomUUID(),
        title,
        description,
        organization,
        date,
        location
      };
  
      await fetch('/api/opportunities', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOpportunity)
      });
  
      // Reset fields after submission
      title = description = organization = date = location = '';
    };
  </script>
  
  <h1>Post a New Opportunity</h1>
  
  <form on:submit|preventDefault={submitOpportunity}>
    <label>Title: <input type="text" bind:value={title} required /></label>
    <label>Description: <textarea bind:value={description} required></textarea></label>
    <label>Organization: <input type="text" bind:value={organization} required /></label>
    <label>Date: <input type="date" bind:value={date} required /></label>
    <label>Location: <input type="text" bind:value={location} required /></label>
    
    <button type="submit">Submit Opportunity</button>
  </form>
  