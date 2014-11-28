module.exports = {

  prompts: false,

  outPath: './',

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Meet.us()",
      description: "Evento criado por programadores para programadores com objectivo de aproximar os desenvolvedores angolanos.",
      date: "17 de Janeiro",
      // If your event is free, just comment this line
      price: "Gratís",
      venue: "auditório da SISTEC",
      address: "Largo do ambiente, Luanda, Angola",
      city: "Ingombota",
      state: "Luanda"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Brevemente",
        link: "#"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
        repository: "https://github.com/meetus/meetus.github.io"
    },*/

    // Site info
    site: {
      theme: "meetus",
      url: "http://meetus.github.io",
      googleanalytics: "UA-53892061-1"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'speakers',
      'schedule',
      'realizacao',
      'sponsors',
      'partners'
      //'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "O EVENTO",
      location: "LOCALIZAÇÃO",
      speakers: "ORADORES",
      schedule: "PROGRAMA",
      realizacao: "REALIZAÇÃO",
      sponsors: "PATROCÍNIOS",
      partners: "PARCEIROS"
      //contact: "CONTACTOS"
    },

    // The entire schedule
    schedule: [
      {
        name: "Apresentação",
        time: "09h00",
        title: "Apresentação do evento por Jo Cognitivo"
      },
      {
        name: "Célio Garcia",
        photo: "themes/meetus/img/celio.png",
        bio: "27 anos, formado em Engenharia Informática, programador a 10 anos. Responsável pelo departamento de Informática da SAPR e co-fundador da BCCL, Lda. Seu cérebro funciona como um scanner raio-x, não pára de pensar numa solução tecnológica qualquer e procura sempre entender como as coisas são formadas. Apaixonado pela vida, cuida de quem e daquilo que ama. Defende seus ideais e suas teorias. Criador do Dicionário Ngola Yetu, SendOut (Um dos vencedores do AAC 2014), Saldo Online e Kwanza Online.",
        company: "Instituto do Fomento Empresarial",
        link: {
          href: "cgarcia@celiogarcia.com",
          text: "email"
        },
        presentation: {
          title: "Aplicações Móveis Híbridas com Cordova/Phonegap",
          description: "Já imaginou desenvolver uma aplicação para diversas plataformas como Android, IOS, Symbian OS, Windows Phone e outros com o mesmo código? Achou interessante? Okay, então venha assistir e descobrirá que esse tipo de coisas não acontece apenas em conto de fadas.",
          time: "09h20"
        }
      },
      {
        name: "Osvaldo Mwanalezi",
        photo: "themes/meetus/img/osvaldo.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "OBS: tema por confirmar.",
          description: "",
          time: "10h20"
        }
      },
      {
        name: "Nakassony Venâncio Bernardo",
        photo: "themes/meetus/img/nakassony.jpg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "OBS: tema por confirmar.",
          description: "",
          time: "11h20"
        }
      },
      {
        name: "Coffee Break",
        time: "12h20"
      },
      {
        name: "Benone Marcos",
        photo: "themes/meetus/img/benone.jpeg",
        bio: "",
        company: "",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "OBS: tema por confirmar.",
          description: "",
          time: "13h00"
        }
      },
      {
        name: "Dizando Norton",
        photo: "themes/meetus/img/dizando.jpg",
        bio: "Programador, investigador e professor de Ciência da Computação na Faculdade de Ciências da UAN. É também o organizador do Google Developers Group de Luanda (GDG Luanda). Além disso, Dizando é empreendedor e esteve recentemente a participar no programa para jovens lideres africanos organizado pelo governo americano (YALI 2014).",
        company: "",
        link: {
          href: "http://dizan.do",
          text: "www"
        },
        presentation: {
          title: "Programação Automática e Machine Learning com Python e/ou Matlab",
          description: "",
          time: "14h00"
        }
      }
    ],

    realizacao: [
      {
        name: "AngoDev",
        logo: "themes/meetus/img/angodev.jpg",
        url: "http://www.angodev.com/"
      }
    ],

    // List of Sponsors
    sponsors: [
      /*{
        name: "SendOut",
        logo: "themes/meetus/img/sendout.png",
        url: "http://www.sendoutapp.com"
      },
      {
        name: "NgolaIT",
        logo: "themes/meetus/img/ngolait.jpg",
        url: "http://www.ngolait.co.ao"
      }*/
    ],

    // List of Partners
    partners: [
      /*{
        name: "AEISPTEC",
        logo: "themes/meetus/img/aeisptec.jpg",
        url: "https://www.facebook.com/AEISPTEC"
      },
      {
        name: "ADEIMA",
        logo: "themes/meetus/img/adeima.jpg",
        url: "https://www.facebook.com/pages/Associa%C3%A7%C3%A3o-dos-Estudades-Imetro-Adeima/166592990192970"
      },
      {
        name: "AngoDev",
        logo: "themes/meetus/img/angodev.jpg",
        url: "http://www.angodev.com/"
      },*/
      {
        name: "GDG Luanda",
        logo: "themes/meetus/img/gdgluanda.jpg",
        url: "http://gdgluanda.org"
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
