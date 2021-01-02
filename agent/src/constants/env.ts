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

export const isDev = process.env.NODE_ENV === 'development'

export const janusHost = HOSTS_CONFIG.janus

export const ssoHost = HOSTS_CONFIG.sso

export const wwwHost = HOSTS_CONFIG.www

export const qmallHost = HOSTS_CONFIG.qmall
