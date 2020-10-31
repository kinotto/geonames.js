import { AxiosResponse } from "axios";
import { geoNamesAPI } from "./geonames.config"


export interface GeonamesConfig {
  lan: string
  encoding: string
  formatted: boolean
  style: string
  username: string | null
  token: string | null  
}

export type GeonamesOptions = Partial<GeonamesConfig> 

type GeonamesApiTypes = {
  [k in typeof geoNamesAPI[number]]: (...args: any) => Promise<AxiosResponse<any>>
};

type GeonamesBasic = {
  readonly uri: string,
  readonly version: string
  options: GeonamesOptions,
  config: GeonamesConfig
}

export type GeonamesInstance = GeonamesBasic & GeonamesApiTypes;