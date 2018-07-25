import * as pkg from '../package.json'
import axios from 'axios'
import { GeonamesConfig, GeonamesOptions } from './geonames.types'
import { baseParams, baseUri, geoNamesAPI } from './geonames.config'

export class Geonames {
  private config: GeonamesConfig

  public readonly version: string = pkg.version

  constructor(readonly options: NonNullable<GeonamesOptions>) {
    if (!options || !options.username) {
      const errNoUsernameMessage =
        "you must provide a username, if you don't have one register on http://www.geonames.org/login"
      throw new Error(errNoUsernameMessage)
    }
    this.config = { ...baseParams, ...options }

    const api = axios.create({
      baseURL: baseUri
    })

    for (let apiName of geoNamesAPI) {
      const fullApiName = `${apiName}${this.config.encoding}`
      this[apiName] = async (params: any) => {
        const response = await api.get(fullApiName, {
          params: {
            username: this.config.username,
            lang: this.config.lan,
            ...params
          }
        })
        return response.data
      }
    }
  }
}

export default Geonames
