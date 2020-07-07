const fs = require("fs")
const path = require("path")

module.exports = {
  base: "/vuepress-helpcenter-template",
  dest: "./public/",
  title: "Help Center",
  tagline: "You know, for help !",
  description: "Help Center",
  plugins: [],
  themeConfig: {
    nav: [
      { text: 'Conventions', link: '/conventions' },
      { text: 'Glossary', link: '/glossary' },
      { text: 'Templates', items: getNavItems('templates') },
      { text: 'Cheat Sheets', items: getNavItems('cheatsheets') },
      {
        text: 'Links',
        ariaLabel: 'Links',
        items: [
          { text: 'Monitoring', link: 'https://google.com' },
          { text: 'Logs', link: 'https://youtube.com' }
        ]
      }
    ],
    sidebarDepth: 0,
    sidebar: [
      {
        title: 'Getting started',
        path: 'getting-started'
      },
      {
        title: 'Architecture',
        children: getSidebarChildren('architecture')
      },
      {
        title: 'Runbooks',
        children: getSidebarChildren('runbooks')
      },
      {
        title: 'Guides',
        children: getSidebarChildren('guides')
      }
    ],
    activeHeaderLinks: true,
    displayAllHeaders: false,
    search: true,
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsBranch: "master",
    docsDir: "docs",
    docsRepo: "https://github.com/jvautier/docs",
    searchMaxSuggestions: 10
  }
};
function getSidebarChildren(folder) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      item =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    )
    .map(function(x){return `${folder}` + "/" + x.replace(/.md/g, '');});
  
  return [...files];
}

function getNavItems(folder) {
  const extension = [".md"];

  const files = fs
    .readdirSync(path.join(`${__dirname}/../${folder}`))
    .filter(
      item =>
        item.toLowerCase() != "readme.md" &&
        fs.statSync(path.join(`${__dirname}/../${folder}`, item)).isFile() &&
        extension.includes(path.extname(item))
    )
    .map(function(x){return `${folder}` + "/" + x.replace(/.md/g, '');});
  
  const items = [];

  files.forEach(function(item){
    items.push({text:item.replace(`${folder}/`,''), link:item});
  });
  
  return [...items];
}