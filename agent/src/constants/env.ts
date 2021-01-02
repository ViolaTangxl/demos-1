/**
 * @file constants of env
 * @author jiayizhen <jiayizhen@qiniu.com>
 */

declare interface IHostsConfig {
  janus: string
  portal: string
  sso: string
  www: string
  qmall: string
}

declare const HOSTS_CONFIG: IHostsConfig

declare const ALLOW_DOMAINS: string[]

export const isDev = process.env.NODE_ENV === 'development'

export const janusHost = HOSTS_CONFIG.janus

export const ssoHost = HOSTS_CONFIG.sso

export const wwwHost = HOSTS_CONFIG.www

export const qmallHost = HOSTS_CONFIG.qmall

// 主要用于前端域名（一级域名）校验
// 测试环境允许 qiniu.io 域名地址
// 线上环境允许 qiniu.com 域名地址
export const allowDomains = ALLOW_DOMAINS
