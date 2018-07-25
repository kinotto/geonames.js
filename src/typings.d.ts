// Following https://hackernoon.com/import-json-into-typescript-8d465beded79
declare module '*/package.json' {
  const name: string
  const version: string
}
