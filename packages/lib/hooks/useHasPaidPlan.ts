import { trpc } from "@calcom/trpc/react";

import { IS_SELF_HOSTED } from "../constants";
import hasKeyInMetadata from "../hasKeyInMetadata";

export function useHasPaidPlan() {
  if (IS_SELF_HOSTED) return { isPending: false, hasPaidPlan: true };

  // Ignorando as consultas reais e forçando sempre 'true'
  const isPending = false;
  const hasPaidPlan = true;

  return { isPending, hasPaidPlan };
}


export function useTeamInvites() {
  const listInvites = trpc.viewer.teams.listInvites.useQuery();

  return { isPending: listInvites.isPending, listInvites: listInvites.data };
}

export function useHasTeamPlan() {
  const { data: hasTeamPlan, isPending } = trpc.viewer.teams.hasTeamPlan.useQuery();

  return { isPending, hasTeamPlan: hasTeamPlan?.hasTeamPlan };
}

export function useHasEnterprisePlan() {
  // TODO: figure out how to get "has Enterprise / has Org" from the backend
  const { data: hasTeamPlan, isPending } = trpc.viewer.teams.hasTeamPlan.useQuery();

  return { isPending, hasTeamPlan: hasTeamPlan?.hasTeamPlan };
}

export function useHasActiveTeamPlan(teamId?: number) {
  if (IS_SELF_HOSTED) return { isPending: false, hasActiveTeamPlan: true };

  const { data, isPending } = trpc.viewer.teams.hasActiveTeamPlan.useQuery();

  return { isPending, hasActiveTeamPlan: !!data };
}

export default useHasPaidPlan;
