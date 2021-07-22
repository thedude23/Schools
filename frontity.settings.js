const settings = {
  "name": "f1",
  "state": {
    "frontity": {
      "url": "http://localhost/schools/wp/", // https://staging2.awsm.in/fone/
      "title": "VS & ASO Fürstenfeld",
      "description": ""
    }
  },
  "packages": [
    {
      "name": "@awsmin/f1",
      "state": {
        "theme": {
          "menu": [
            ["Home", "/"],
            // ["Schule", "/schule/"],
            ["Über die Schule", "/schule/uber-die-schule/"],
            ["Team", "/schule/team/"],
            // ["Team VS", "/schule/team-vs/"],
            // ["Team ASO", "/schule/team-aso/"],
            // ["Klassen", "/schule/klassen/"],
            ["Termine", "/termine/"],            
            ["News", "/news/"],
            ["Links & Downloads", "/links-und-downloads"],
            ["Kontakt", "/kontakt/"]
            
            // ["Home", "/"],
            // ["About", "/about/"],
            // ["Services", "/services/"],
            // ["Career", "/jobs/"],            
            // ["News", "/blog/"],
            // ["Contact", "/contact/"]

          //   {
          //     name: 'Home',
          //     href: '/',
          //   },
          //   {
          //     name: 'Team',
          //     href: '/schule/',
          //     submenu: [
          //       {
          //         name: 'Team VS',
          //         href: '/schule/team-vs/'
          //       },
          //       {
          //         name: 'Team ASO',
          //         href: '/schule/team-aso/'
          //       },
          //     ]
          //   }
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
          autoPrefetch: "hover"
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "http://localhost/schools/wp/wp-json", // https://staging2.awsm.in/fone/wp-json
          "homepage": "/home",
          "postsPage":"/blog" // ****
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7",
    "@awsmin/frontity-wp-job-openings"
  ]
};

export default settings;
