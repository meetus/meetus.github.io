module.exports = {

  prompts: false,

  outPath: './',

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Meet.us()",
      description: "Evento criado por programadores para programadores com objectivo de aproximar os desenvolvedores angolanos.",
      date: "13 de Setembro",
      // If your event is free, just comment this line
      price: "Grátis",
      venue: "IMETRO",
      address: "Rua da Total, Luanda, Angola",
      city: "Belas",
      state: "Morro Bento"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Registro",
        link: "http://www.eventzilla.net/web/event?eventid=2139033228"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
        repository: "https://github.com/meetus/meetus.github.io"
    },*/

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://meetus.github.io",
      googleanalytics: "UA-33656081-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'sponsors',
      'partners',
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O EVENTO",
      location: "LOCALIZAÇÃO",
      speakers: "ORADORES",
      schedule: "PROGRAMA",
      sponsors: "APOIOS",
      partners: "PARCEIROS",
      contact: "CONTACTOS"
    },

    // The entire schedule
    schedule: [
      {
        name: "Apresentação",
        time: "14h00"
      },
      {
        name: "Sousa Gaspar",
        photo: "themes/yellow-swan/img/sousa.jpg",
        bio: "Engenheiro da computação, evangelista da linguagem PHP.",
        company: "SGenial",
        link: {
          href: "https://www.facebook.com/sousa.dgaspar",
          text: "fb.com/sousa.dgaspar"
        },
        presentation: {
          title: "ORM com PHP do jeito certo.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "15h00"
        }
      },
      {
        name: "Keven Chantre",
        photo: "themes/yellow-swan/img/keven.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Interactive Load",
        link: {
          href: "http://twitter.com/kevenchantre",
          text: "@kevenchantre"
        },
        presentation: {
          title: "Desenvolvimento de jogos eletrônicos.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "15h50"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Mandela Morais",
        photo: "themes/yellow-swan/img/mandela.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Mandoaval",
        link: {
          href: "https://www.facebook.com/mandosvalceo",
          text: "fb.com/mandosvalceo"
        },
        presentation: {
          title: "E-Marketing, E-Commerce e Gestão de projectos.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h40"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Patrício dos Santos",
        photo: "themes/yellow-swan/img/patricio.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "ITELnet S.A.",
        link: {
          href: "http://www.patriciodossantos.net/",
          text: "www"
        },
        presentation: {
          title: "Git - A ferramenta indispensável para qualquer desenvolvedor.",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h30"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "AEISPTEC",
        logo: "themes/yellow-swan/img/aeisptec.jpg",
        url: "https://www.facebook.com/AEISPTEC"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
