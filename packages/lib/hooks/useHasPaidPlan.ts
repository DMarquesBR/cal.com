export function useHasPaidPlan() {
  if (IS_SELF_HOSTED) return { isPending: false, hasPaidPlan: true };

  // Forçar as funções a sempre retornarem 'true'
  const isPending = false;
  const hasPaidPlan = true;

  return { isPending, hasPaidPlan };
}

// Funções que sempre retornam verdadeiro
export function useTeamInvites() {
  return { hasInvites: true };
}

export function useHasTeamPlan() {
  return { hasTeamPlan: true };
}

export function useHasEnterprisePlan() {
  return { hasEnterprisePlan: true };
}

export function useHasActiveTeamPlan() {
  return { hasActiveTeamPlan: true };
}
