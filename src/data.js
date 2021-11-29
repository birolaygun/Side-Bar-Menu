// Menuye Başlık ekleme-çıkarma işlemi nasıl yapılır ?

// Aşağıda "menu" arrayi mevcut.
// Bütün başlıklar, alt başlıklar buralardan değiştirilir, eklenir ve çıkarılır.
//  menü arrayi içindeki bir arrayi aşağıda anlatıyorum:

//  [
//     {
//       menu: "Applications",           --> üst menünün başlığı
//       icon: "fas fa-mobile-alt",       --> üst menünün iconu. fontawesome.com üzerinden seçtiğiniz bir iconun sadece classname'ini buraya yapıştırın
//       class: "custom",                --> menüde CUSTOM LAYOUT... gibi grup başlıklarını görmüşsünüzdür. başlığınızın hangi grupta yer almasını istiyorsanız onu buraya yazın. yeni bir grup oluşturabilir veya grup silebilirsiniz. Ayrıca ilk grup başlığı ekranda görünmeyecek
//       id: 2,                          --> benzersiz bir id verin. hepsi birbirinden farklı olmalı
//     },
//     [                                 --> eğer başlığınız alt başlıklara sahipse bu array'i de ekleyin.
//       ["Application 3"],               --> Alt başlıkları bu şekilde ekleyin
//       ["Application 1", ["Application 22"]],      --> Alt başlıkların altına da alt başlık ekleyecekseniz bu şekilde ekleyin.

//     ],
//   ],

// Linkler sorunsuz çalışıyor.
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
    [
      ["Application 1", ["Application 11", "Application 22"]],
      ["Application 2", ["Application 33", "Application 44"]],
      ["Application 3"],
    ],
  ],
  [
    {
      menu: "Pages",
      icon: "fas fa-file",
      class: "custom",
      id: 3,
    },
    [["Pages 1", ["Pages 11", "Pages 22"]], ["Pages 2"], ["Pages 3"]],
  ],
  [
    {
      menu: "Forms",
      icon: "fab fa-wpforms",
      class: "layout",
      id: 4,
    },
    [
      ["Forms 1", ["Forms 11", "Forms 22"]],
      ["Forms 2", ["Forms 33", "Forms 44"]],
      ["Forms 3", ["Forms 55", "Forms 66"]],
    ],
  ],
  [
    {
      menu: "Subheaders",
      icon: "fas fa-heading",
      class: "layout",
      id: 5,
    },
    [["Subheaders 1"], ["Subheaders 2"], ["Subheaders 3"]],
  ],
  [
    {
      menu: "General",
      icon: "fas fa-globe",
      class: "layout",
      id: 6,
    },
    [
      ["General 1", ["General 11", "General 22"]],
      ["General 2", ["General 33", "General 44"]],
      ["General 3"],
    ],
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
    [
      ["KTDatatable 1", ["KTDatatable 11", "KTDatatable 22"]],
      ["KTDatatable 2"],
      ["KTDatatable 3"],
    ],
  ],
  [
    {
      menu: "Datatables.net",
      icon: "fas fa-server",
      class: "crud",
      id: 9,
    },
    [
      ["Datatables.net 1", ["Datatables.net 11", "Datatables.net 22"]],
      ["Datatables.net 2", ["Datatables.net 33", "Datatables.net 44"]],
      ["Datatables.net 3", ["Datatables.net 55", "Datatables.net 66"]],
    ],
  ],
  [
    {
      menu: "File Upload",
      icon: "fas fa-upload",
      class: "crud",
      id: 10,
    },
    [["File Upload 1"], ["File Upload 2"], ["File Upload 3"]],
  ],
  [
    {
      menu: "Bootstrap",
      icon: "fab fa-bootstrap",
      class: "features",
      id: 11,
    },
    [
      ["Bootstrap 1", ["Bootstrap 11", "Bootstrap 22"]],
      ["Bootstrap 2"],
      ["Bootstrap 3"],
    ],
  ],
  [
    {
      menu: "Custom",
      icon: "fab fa-intercom",
      class: "features",
      id: 12,
    },
    [
      ["Custom 1", ["Custom 11", "Custom 22"]],
      ["Custom 2", ["Custom 33", "Custom 44"]],
      ["Custom 3"],
    ],
  ],
  [
    {
      menu: "Cards",
      icon: "fas fa-id-card",
      class: "features",
      id: 13,
    },
    [
      ["Cards 1", ["Cards 11", "Cards 22"]],
      ["Cards 2", ["Cards 33", "Cards 44"]],
      ["Cards 3", ["Cards 55", "Cards 66"]],
    ],

  ],
];



