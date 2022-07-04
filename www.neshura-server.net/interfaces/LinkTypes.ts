export interface LinkList {
  services: CustomLink[],
  servers: CustomLink[]
}
export interface CustomLink {
  type: string,
  name: string,
  href: string,
  desc: string,
  warn: string
}