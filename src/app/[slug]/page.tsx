import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getRouteBySlug } from "@/config/routes";
import { buildTargetUrl } from "@/lib/buildTargetUrl";
import { Redirector } from "@/components/BridgeRedirector";

interface BridgePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BridgePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

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

export default async function BridgePage({ params }: BridgePageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const targetUrl = buildTargetUrl(route);

  return (
    <Redirector
      targetUrl={targetUrl}
      delayMs={route.delayMs}
      title={route.title}
      description={route.description}
    />
  );
}
