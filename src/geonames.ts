import * as pkg from '../package.json'
import { GeonamesConfig, GeonamesOptions } from './geonames.types'
import { baseParams, baseUri, baseUriCommercial, geoNamesAPI } from './geonames.config'

export class Geonames {
  private config: GeonamesConfig

  public readonly version: string = pkg.version
  public readonly uri: string 

  constructor(readonly options: NonNullable<GeonamesOptions>) {
    if (!options || !options.username) {
      const errNoUsernameMessage =
        "you must provide a username, if you don't have one register on http://www.geonames.org/login"
      throw new Error(errNoUsernameMessage)
    }
    this.config = { ...baseParams, ...options }

    const { username, token } = this.config
    this.uri = token ? baseUriCommercial : baseUri

    for (let apiName of geoNamesAPI) {
      const fullApiName = `${this.uri}${apiName}${this.config.encoding}`
      this[apiName] = async (params: any) => {
        params = new URLSearchParams({
          username,
          ...(token && {token}),
          lang: this.config.lan,
          ...params
        }).toString()
        const response = await fetch(`${fullApiName}?${params}`)
        return response.json()
      }
    }
  }
}

export default Geonames
