export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title:
        'Superscript: the only text editor designed specially for writing comics.',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          name: 'description',
          content: 'The only text editor designed specially for writing comics.'
        },
        {
          name: 'og:image',
          content: 'https://www.superscript.app/images/link-preview.jpg'
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        }
      ]
    },
  },
  /*
  ** Build configuration
  */
  css: [
    'normalize.css',
    '~/assets/css/fonts.styl',
    '~/assets/css/base.styl',
    '~/assets/css/layout.styl',
    '~/assets/css/buttons.styl',
    '~/assets/css/branding.styl',
    '~/assets/css/forms.styl',
    '~/assets/css/panel.styl',
    '~/assets/css/pseudo-editor.styl'
  ],
})
