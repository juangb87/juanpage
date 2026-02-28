export type BridgeRoute = {
  slug: string;
  title: string;
  description?: string;
  targetUrl: string;
  utm?: Record<string, string>;
  extraParams?: Record<string, string>;
  delayMs?: number;
};

const baseUTM = {
  utm_source: 'discord',
  utm_medium: 'community',
  utm_campaign: 'disney_plus_sep2025',
  utm_content: '703-server',
};

export const bridgeRoutes: BridgeRoute[] = [
  {
    slug: 'disney-703',
    title: 'Disney+ Promo – Comunidad 703',
    description:
      'Bridge para el servidor de Román (703). Inyecta referrer antes de saltar a Disney+.',
    targetUrl:
      'https://www.disneyplus.com/es-419/sign-up?skuInterval=annual&skuId=disney_bundle_premium',
    utm: baseUTM,
    extraParams: {
      ref: 'bumbei.com/discord/703',
    },
    delayMs: 600,
  },
];

export function getRouteBySlug(slug: string): BridgeRoute | undefined {
  return bridgeRoutes.find((route) => route.slug === slug);
}
