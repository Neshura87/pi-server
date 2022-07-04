export interface ServerData {
  server: ServerObject
}

export interface ServerObject {
  mods: Mod[],
  url: string,
  port: number,
  status: Status
}

export interface Mod {
  name: string,
  href: string,
  version: string
}

export interface Status {
  data: Details,
  online: string
}

export interface Details {
  players: Players,
}

export interface Players {
  online: number,
  max: number,
  sample: string[]
}