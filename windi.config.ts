import { defineConfig } from 'windicss/helpers'
import { spacing } from '@hairy/share'
import { colors } from './windi.colors'

const config = defineConfig({
  theme: {
    colors,
    /**
     * 断点配置 class="sm:text-center"
     * @template {sm: '640px'}
     */
    screens: {
      xs: { min: '0' },
      sm: { min: '576px' },
      md: { min: '768px' },
      lg: { min: '992px' },
      xl: { min: '1200px' },
      xxl: { min: '1600px' },
      xxxl: { min: '1920px' }
    },
    /**
     * 所有尺寸相关
     * @template p-[x] m-[x] ...
     */
    spacing: spacing(2000)
  }
})

export default config
