import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  layout: {
    name: 'DDI Leaf',
  },
  routes: [{ path: '/context', component: '@/pages/index' }],
  fastRefresh: {},
  // 使用hash路由
  history: { type: 'hash' },
});
