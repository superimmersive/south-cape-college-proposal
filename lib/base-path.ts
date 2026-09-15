/** Set in CI as `/south-cape-college-proposal`. Empty for local `next dev`. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBase(path: string) {
  if (!path) return path;
  if (/^(https?:|mailto:|tel:|#)/i.test(path)) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}

export function sectionHref(id: string, onHome: boolean) {
  return onHome ? `#${id}` : `${basePath}/#${id}`;
}

export function homeHref() {
  return basePath ? `${basePath}/` : "/";
}
