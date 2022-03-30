/*
 * @Author: Mr'Mao https://github.com/TuiMao233
 * @Date: 2022-01-06 17:18:44
 * @LastEditors: Mr'Mao
 * @LastEditTime: 2022-02-16 17:03:56
 */
import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 页面标题
     */
    title?: string
  }
}
