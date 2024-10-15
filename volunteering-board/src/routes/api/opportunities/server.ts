// src/routes/api/opportunities/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { Opportunity } from '$lib/types';

let opportunities: Opportunity[] = [];

export const POST: RequestHandler = async ({ request }) => {
  const newOpportunity: Opportunity = await request.json();
  opportunities.push(newOpportunity);
  return json({ message: 'Opportunity added' });
};

export const GET: RequestHandler = async () => {
  return json(opportunities);
};
