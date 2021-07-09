/**
 * @file blog 相关接口
 */

import { get } from 'utils/fetch'
import { apiPrefix as basePrefix } from 'constants/api'

const apiPrefix = `${basePrefix}/blog`

export type Blog = {
  id: string
  title: string
  description: string
  keywords: string
  content: string
}

export function getBlogsList(): Promise<Blog[]> {
  return get(`${apiPrefix}/list`)
}

export function getBlogByID(blogID: string): Promise<Blog> {
  return get(`${apiPrefix}/${blogID}`)
}
