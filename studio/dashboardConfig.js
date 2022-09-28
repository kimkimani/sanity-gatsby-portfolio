export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6334214995cb9700adb686df',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-nm12kivx',
                  apiId: '9f649d49-1bac-401e-bf03-93f674030b62'
                },
                {
                  buildHookId: '6334214a51b58607ee34edbf',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kago9h2d',
                  apiId: 'de71fee8-e690-4886-bf4e-893326d6d60b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kimkimani/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kago9h2d.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
