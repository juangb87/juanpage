import type { BridgeRoute } from '@/config/routes';

export function buildTargetUrl(route: BridgeRoute): string {
  const url = new URL(route.targetUrl);

  const params: Record<string, string> = {
    ...(route.utm ?? {}),
    ...(route.extraParams ?? {}),
  };

  Object.entries(params).forEach(([key, value]) => {
    if (!value) return;
    const existing = url.searchParams.get(key);
    if (!existing) {
      url.searchParams.set(key, value);
      return;
    }

    // Avoid duplicating identical params; if different, append as `${value}` (last write wins)
    if (existing !== value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}
