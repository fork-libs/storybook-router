declare module '@fork-libs/storybook-vue-router' {
    import { DecoratorFunction } from '@storybook/addons/dist/types'
    import { RouterOptions } from 'vue-router'
    export default function<StoryFnReturnType>(links?: {}, routeOptions?: RouterOptions): DecoratorFunction<StoryFnReturnType>
  }
