import pkg from '../package.json'
import axios from 'axios'
import { GeonamesOptions, GeonamesInstance } from './geonames-types';
import { baseParams, baseUri, baseUriCommercial, geoNamesAPI } from './geonames.config'
import qs from 'qs';

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
      geonamesInstance[apiName] = async (apiParams: any) => {
        const response = await api.get(fullApiName, {
          params: {
            username,
            ...(token && { token }),
            lang: geonamesInstance.config.lan,
            ...apiParams
          },
          // it's in repeat mode to allow multiple query string with the same key
          // https://github.com/kinotto/geonames.js/issues/27
          paramsSerializer: params => qs.stringify(params, { arrayFormat: 'repeat' })
        })
        return response.data;
      }
    }

    return geonamesInstance;
  }

  return createInstance(options);
}

export default Geonames;