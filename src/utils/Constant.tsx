// export function createPageUrl(pageName: string): string {
//   // Convert page name to lowercase and replace spaces with hyphens
//   return `/${pageName.toLowerCase().replace(/\s+/g, "-")}`;
// }

export const createPageUrl = (pageName: string) => {
  switch (pageName) {
    case "Home": return "/";
    case "Services": return "/services";
    case "About": return "/about";
    case "Portfolio": return "/portfolio";
    case "Contact": return "/contact";
    default: return "/";
  }
};