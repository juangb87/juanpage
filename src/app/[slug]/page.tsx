import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRouteBySlug } from "@/config/routes";
import { buildTargetUrl } from "@/lib/buildTargetUrl";
import { BridgeRedirector } from "@/components/BridgeRedirector";

interface BridgePageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: BridgePageProps): Metadata {
  const route = getRouteBySlug(params.slug);

  if (!route) {
    return {
      title: "Bumbei | Link no disponible",
      description: "El puente solicitado no existe o ya no está activo.",
    };
  }

  return {
    title: `${route.title} · Bumbei`,
    description: route.description ?? "Preparando tu acceso seguro...",
  };
}

export default function BridgePage({ params }: BridgePageProps) {
  const route = getRouteBySlug(params.slug);

  if (!route) {
    notFound();
  }

  const targetUrl = buildTargetUrl(route);

  return (
    <BridgeRedirector
      targetUrl={targetUrl}
      delayMs={route.delayMs}
      title={route.title}
      description={route.description}
    />
  );
}
