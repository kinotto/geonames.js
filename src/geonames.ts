import pkg from '../package.json'
import axios from 'axios'
import { GeonamesOptions, GeonamesInstance } from './geonames.types'
import { baseParams, baseUri, baseUriCommercial, geoNamesAPI } from './geonames.config'

export function Geonames(options: NonNullable<GeonamesOptions>): GeonamesInstance {

  const createInstance = (options: NonNullable<GeonamesOptions>): GeonamesInstance => {
    if (!options || !options.username) {
      throw new Error("you must provide a username, if you don't have one register on http://www.geonames.org/login")
    }
    const config = { ...baseParams, ...options };
    const { username, token } = config;
    const geonamesInstance = {
      options,
      config,
      version: pkg.version,
      uri: token ? baseUriCommercial : baseUri
    } as GeonamesInstance;

    const api = axios.create({ baseURL: geonamesInstance.uri });

    for (let apiName of geoNamesAPI) {
      const fullApiName = `${apiName}${geonamesInstance.config.encoding}`;
      geonamesInstance[apiName] = async (params: any) => {
        const response = await api.get(fullApiName, {
          params: {
            username,
            ...(token && { token }),
            lang: geonamesInstance.config.lan,
            ...params
          }
        })
        return response.data
      }
    }

    return geonamesInstance;
  }

  return createInstance(options);
}

export default Geonames
