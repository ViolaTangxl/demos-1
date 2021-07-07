/**
 * @file 配置的环境变量，具体值见 .env & .env.<enviroment> 文件
 * @description 相关文档 https://nextjs.org/docs/basic-features/environment-variables#exposing-environment-variables
 */

/** 站点 Host */
export const host = must('host', process.env.NEXT_PUBLIC_HOST)

/** API Host */
export const apiHost = must('apiHost', process.env.NEXT_PUBLIC_API_HOST)

/** WWW Host */
export const wwwHost = must('wwwHost', process.env.NEXT_PUBLIC_WWW_HOST)

function must(name: string, variable?: string): string {
  if (variable == null) {
    throw new Error(`Invalid value for environment variable ${name}, you need to configure it in env file`)
  }
  return variable
}
