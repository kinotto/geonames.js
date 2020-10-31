import { AxiosResponse } from "axios";
import { geoNamesAPI } from "./geonames.config";
export interface GeonamesConfig {
    lan: string;
    encoding: string;
    formatted: boolean;
    style: string;
    username: string | null;
    token: string | null;
}
export declare type GeonamesOptions = Partial<GeonamesConfig>;
declare type GeonamesApiTypes = {
    [k in typeof geoNamesAPI[number]]: (...args: any) => Promise<AxiosResponse<any>>;
};
declare type GeonamesBasic = {
    readonly uri: string;
    readonly version: string;
    options: GeonamesOptions;
    config: GeonamesConfig;
};
export declare type GeonamesInstance = GeonamesBasic & GeonamesApiTypes;
export {};
