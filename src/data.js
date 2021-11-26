// Menuye Başlık ekleme çıkarma nasıl yapılır ?

// aşağıdaki menu array'inin içindekileri incelerseniz zor olmadığını görürsünüz.

// 1.) Side Bar Menüye Alt başlık içermeyen bir Başlık eklemek için :

// [
//     {
//       menu: "Dashboard",
//       icon: `fas fa-columns`,
//       class: "main",
//       id: 1,
//     },
//   ],

//   bu array'i aşağıdaki manu array'i içine kopyalayın.

//   menu: Side bar menüde görünen başlık ismidir
//   icon: https://fontawesome.com/ içinden belirlediğiniz bir iconun sadece class ismini buraya yapıştırın
//   class: hangi başlık sınıfında yer alacağını buraya yazın. yeni başlık sınıfı eklemek isterseniz app.js üzerinden copy-past yaparak
//   başarabilirsiniz. burayı detaylı yazmaya gerek duymuyorum.
//   id: her başlığın farklı bir id ye sahip olmasına dikkat edin

// 2.) Side Bar Menüye Alt başlıkları olan Başlık eklemek için :

//     {
//       menu: "Applications",
//       icon: "fas fa-mobile-alt",
//       class: "custom",
//       id: 2,
//     },
//     ["Application 1", "Application 2", "Application 3"],
//   ],

//   bu array'i aşağıdaki manu array'i içine kopyalayın.

//   yukarıda anlattığım kısımları geçiyorum. Bunların altında bulunan ["Application 1", "Application 2", "Application 3"]
//   alt başlıkları ifade ediyor. İstediğiniz başlıkları  menu array'inin içine alıp istemediğinizi silebilirsiniz.

//   İyi çalışmalar...


export const menu = [

  [
    {
      menu: "Dashboard",
      icon: `fas fa-columns`,
      class: "main",
      id: 1,
    },
  ],
  [
    {
      menu: "Applications",
      icon: "fas fa-mobile-alt",
      class: "custom",
      id: 2,
    },
    ["Application 1", "Application 2", "Application 3"],
  ],
  [
    {
      menu: "Pages",
      icon: "fas fa-file",
      class: "custom",
      id: 3,
    },
    ["Page 1", "Page 2"],
  ],
  [
    {
      menu: "Forms",
      icon: "fab fa-wpforms",
      class: "layout",
      id: 4,
    },
    ["Form 1", "Form 2", "Form 3"],
  ],
  [
    {
      menu: "Subheaders",
      icon: "fas fa-heading",
      class: "layout",
      id: 5,
    },
    ["Subheader 1", "Subheader 2", "Subheader 3"],
  ],
  [
    {
      menu: "General",
      icon: "fas fa-globe",
      class: "layout",
      id: 6,
    },
    ["General 1", "General 2"],
  ],
  [
    {
      menu: "Builder",
      icon: "fas fa-landmark",
      class: "layout",
      id: 7,
    },
  ],
  [
    {
      menu: "KTDatatable",
      icon: "fas fa-database",
      class: "crud",
      id: 8,
    },
    ["KTDatatable 1", "KTDatatable 2"],
  ],
  [
    {
      menu: "Datatables.net",
      icon: "fas fa-server",
      class: "crud",
      id: 9,
    },
    ["Datatables.net 1", "Datatables.net 2"],
  ],
  [
    {
      menu: "File Upload",
      icon: "fas fa-upload",
      class: "crud",
      id: 10,
    },
    ["File Upload 1", "File Upload 2"],
  ],
  [
    {
      menu: "Bootstrap",
      icon: "fab fa-bootstrap",
      class: "features",
      id: 11,
    },
    ["Bootstrap 1", "Bootstrap 2", "Bootstrap 3"],
  ],
  [
    {
      menu: "Custom",
      icon: "fab fa-intercom",
      class: "features",
      id: 12,
    },
    ["Custom 1", "Custom 2", "Custom 3"],
  ],
  [
    {
      menu: "Cards",
      icon: "fas fa-id-card",
      class: "features",
      id: 13,
    },
    ["Cards 1", "Cards 2", "Cards 3"],
  ],
];
