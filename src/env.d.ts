// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

// 在文件顶部添加（仅用于临时绕过错误）
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// 为 lodash 添加模块声明
declare module 'lodash' {
  const content: any;
  export default content;
}