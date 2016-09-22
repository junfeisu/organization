import index from 'components/index/index.vue'

export default function config (router) {
  router.map({
    '/': {
      name: 'index',
      component: index,
      docTitle: '社团组织'
    }
  })
  router.afterEach(function (transition) {
    document.title = transition.to.docTitle || 'organization'
  })
}
