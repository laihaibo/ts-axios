import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { bulidURL } from './helpers/url'

function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
}

export default function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}
