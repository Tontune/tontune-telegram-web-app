export function formatPathname(pathname: string): string {
  const pathParts = pathname.split('/').filter(part => part.trim() !== '');
  if (pathParts.length === 0) {
    return '';
  }
  return pathParts.join(' / ');
}

export function getLastSubPath(pathname: string): string {
  const pathParts = pathname.split('/').filter(part => part.trim() !== '');

  if (pathParts.length >= 2) {
    return pathParts[1];
  }

  if (pathParts.length === 1) {
    return pathParts[0];
  }

  return '';
}
