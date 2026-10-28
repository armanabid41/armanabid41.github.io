// Provider-agnostic analytics layer. Today: Cloudflare Web Analytics (cookieless beacon).
// Detailed stats stay private in the Cloudflare dashboard.
const token = import.meta.env.VITE_CF_BEACON_TOKEN;
const statsEndpoint = import.meta.env.VITE_STATS_ENDPOINT;

export function initializeAnalytics() {
  if (!token || document.querySelector('script[data-cf-beacon]')) return;
  const s = document.createElement('script');
  s.defer = true;
  s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  s.setAttribute('data-cf-beacon', JSON.stringify({ token, spa: true }));
  document.head.appendChild(s);
}

// Hook for a different provider later; the Cloudflare SPA beacon records route changes itself.
export function trackPageView(_path) {}

export function getAnalyticsStatus() {
  return { provider: 'cloudflare-web-analytics', enabled: Boolean(token), publicStatsEnabled: Boolean(statsEndpoint) };
}

// Needs your own serverless endpoint returning {"visitors": n, "pageViews": n}. Returns null otherwise.
export async function getPublicStats(signal) {
  if (!statsEndpoint) return null;
  try {
    const r = await fetch(statsEndpoint, { signal });
    if (!r.ok) return null;
    const d = await r.json();
    return Number.isFinite(d.visitors) && Number.isFinite(d.pageViews) ? d : null;
  } catch { return null; }
}
