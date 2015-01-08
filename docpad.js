module.exports = {

  prompts: false,

  outPath: './',

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Meet.us()",
      title: "Meet.us() Angola - Encontro de desenvolvedores angolanos",
      description: "Evento criado por programadores para programadores com objectivo de aproximar os desenvolvedores angolanos.",
      date: "17 de Janeiro",
      price: "Gratís",
      venue: "auditório da SISTEC",
      address: "Largo do ambiente, Luanda, Angola",
      city: "Ingombota",
      state: "Luanda"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Inscrições encerradas!",
        /*link: "http://meetus.eventzilla.net/web/event?eventid=2139048366"*/
        link: "#"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    /*forkButton: {
        repository: "https://github.com/meetus/meetus.github.io"
    },*/

    // Site info
    site: {
      theme: "meetus",
      url: "http://meetus.angodev.com",
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
      sponsors: "APOIOS",
      partners: "PARCEIROS"
      //contact: "CONTACTOS"
    },

    // The entire schedule
    schedule: [
      {
        name: "Apresentação do evento por Jo Cognitivo",
        time: "09h00",
      },
      {
        name: "Célio Garcia",
        photo: "themes/meetus/img/celio.png",
        bio: "27 anos, formado em Engenharia Informática, programador a 10 anos. Responsável pelo departamento de Informática da SAPR e co-fundador da BCCL, Lda. Seu cérebro funciona como um scanner raio-x, não pára de pensar numa solução tecnológica qualquer e procura sempre entender como as coisas são formadas. Apaixonado pela vida, cuida de quem e daquilo que ama. Defende seus ideais e suas teorias. Criador do Dicionário Ngola Yetu, SendOut (Um dos vencedores do AAC 2014), Saldo Online e Kwanza Online.",
        company: "Instituto do Fomento Empresarial",
        link: {
          href: "mailto:cgarcia@celiogarcia.com",
          text: "email"
        },
        presentation: {
          title: "Aplicações Móveis Híbridas com Cordova/Phonegap",
          description: "Já imaginou desenvolver uma aplicação para diversas plataformas como Android, IOS, Symbian OS, Windows Phone e outros com o mesmo código? Achou interessante? Okay, então venha assistir e descobrirá que esse tipo de coisas não acontece apenas em conto de fadas.",
          time: "09h20"
        }
      },
      {
        name: "Osvaldo Júnior",
        photo: "themes/meetus/img/osvaldo.jpg",
        bio: "Programador e Administrador de Sistemas formado em Engenharia da Computação.",
        company: "",
        link: {
          href: "http://osvaldo.me",
          text: "Site pessoal"
        },
        presentation: {
          title: "Criando sites para múltiplos dispositivos",
          description: "Actualmente existe uma grande variedade de dispositivos, desde telemóveis simples aos smartphones, tablets, PC’s e outros. Todos estes dispositivos são usados para aceder à web e possuem características diferentes como resolução e tamanho de tela. Nesta apresentação discutiremos sobre as metodologias de desenvolvimento de web sites que podem ser acessados por múltiplos dispositivos sem penalizar a experiência do usuário.",
          time: "10h20"
        }
      },
      {
        name: "Nakassony Venâncio Bernardo",
        photo: "themes/meetus/img/nakassony.jpg",
        bio: "Mestrado em CyberSecurity (Ciencias da Computação) pela Universidade de Liverpool (Inglaterra), Engenheiro e Desenvolvedor de Software Senior na Merap Consulting (Java, PHP e JavaScript), professor universitário (UNIBELAS e ISPTEC) lecionando sobre tudo disciplinas de especialidade, criador do Framework Proweb (PHP), tem a computação como tradição familiar, apaixonado por hard code e criação de ferramentas próprias.",
        company: "Merap Consulting",
        link: {
          href: "",
          text: ""
        },
        presentation: {
          title: "Componentização e Reuso com PHP e JavaScript.",
          description: "KISS e DRY são dois termos muito importantes quando falamos de construção de sistemas informáticos, Keep It Simple (Mantenha a simplicidade) e Don't Repeat Yourself (Não seja repetitivo) são aspectos meios complexos de garantir, entretanto, a utilização de componentes (Ex: Frameworks) e padrões que permitam o reuso de forma correcta ajudam-nos a atingir este quesito, principalmente quando os componentes e padrões são construídos e aplicados por nós mesmos.",
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
        bio: "Gestor de projectos, atualmente diretor de infraestruturas de IT na indústria petrolífera. Fundador da TIangola, desenvolvedor do aOS, co-fundador da Associação de Software Livre - Angola",
        company: "TI Angola",
        link: {
          href: "http://benone.org",
          text: "site pessoal"
        },
        presentation: {
          title: "Licenciando a sua aplicação.",
          description: "",
          time: "13h00"
        }
      },
      {
        name: "Dizando Norton",
        photo: "themes/meetus/img/dizando.jpg",
        bio: "Programador, investigador e professor de Ciência da Computação na Faculdade de Ciências da UAN. É também co-organizador do Google Developers Group de Luanda (www.gdgluanda.org).",
        company: "GDG Luanda, Centro Tecnológico Nacional",
        link: {
          href: "http://dizando.me",
          text: "site pessoal"
        },
        presentation: {
          title: "Programação Genética e Machine Learning com Python e/ou Matlab",
          description: "A Programação Genética (PG) é uma técnica de Machine Learning (ML) utilizada na resolução de problemas de optimização. Nesta palestra serão apresentados alguns algoritmos de PG e ML para a construção de soluções computacionais inteligentes para problemas locais com exemplos em Matlab e Python.",
          time: "14h00"
        }
      },
      {
        name: "Randy Ambrósio",
        photo: "themes/meetus/img/randy.jpg",
        bio: "Graduando em Engenharia da Computação(UFAL, Brasil) Programador Java incorrigível, trabalhou na Múltipla(Angola) como desenvolvedor Sênior(VB6), foi bolsista do NTI(Núcleo de Tecnologia e Informação) JEE Programador Júnior(UFAL), foi bolsista da RIM(Blackberry) Programador Júnior(C++), desenvolveu muitos projetos acadêmicos em JavaSE, no momento muito focado em Web Stack e PhoneGap, praticante de musculação nas horas vagas.",
        company: "Freelancer",
        link: {
          href: "mailto:randy.quindai@gmail.com",
          text: "email"
        },
        presentation: {
          title: "BigData",
          description: "BigData é o nome comercial para processamento de grande volume de informação, para tal usamos frameworks disponíveis para Java, Ruby, Python e Pipes(C++). O framework mais popular usado hoje é o Hadoop da Apache Software Foundation. Nesta palestra apresentaremos como utilizar essas ferramentas.",
          time: "15h00"
        }
      },
      {
        name: "Encerramento",
        time: "16h00"
      },
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
      {
        name: "SISTEC",
        logo: "themes/meetus/img/logotipoSistec1.png",
        url: "http://www.sistec.co.ao"
      }
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
      },*/
      {
        name: "MenosFios",
        logo: "themes/meetus/img/menosfios.jpg",
        url: "http://www.menosfios.com/"
      },
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
