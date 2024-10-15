// src/routes/organization/[id]/+page.server.ts
import type { PageServerLoad } from './$types';
import { opportunities } from '../../api/opportunities/+server';

export const load: PageServerLoad = ({ params }) => {
  const organizationOpportunities = opportunities.filter(opp => opp.organization === params.id);

  return {
    organization: params.id,
    opportunities: organizationOpportunities
  };
};
