const ids = ['source','rules','faq','prices','catalog','schedule','access','handover'] as const;
const hrefs = ['#model-architecture','#categories','#categories','#categories','#categories','#how-we-work','#model-architecture','#cta'] as const;
const taglines = {
  ka: ['კომპანიის დამტკიცებული ინფორმაცია','ერთიანი წესები ასისტენტებისთვის','თქვენი გუნდის მიერ დამტკიცებული პასუხები','ფასები შეთანხმებული წყაროდან','კატალოგის ინფორმაცია ერთ ადგილას','განრიგი დამტკიცებული წყაროდან','წვდომა თქვენი წესების მიხედვით','რთული კითხვა პასუხისმგებელ ადამიანს გადაეცემა'],
  en: ['Approved company information','Shared rules for connected assistants','Answers approved by your team','Prices from the agreed source','Catalog information in one place','Schedules from an approved source','Access according to your rules','Complex questions go to the responsible person'],
  ru: ['Утверждённая информация компании','Единые правила для подключённых ассистентов','Ответы, утверждённые вашей командой','Цены из согласованного источника','Данные каталога в одном месте','Расписание из утверждённого источника','Доступ по вашим правилам','Сложный вопрос передаётся ответственному человеку'],
} as const;

export function getAiBrainBannerItems(locale: string) {
  const data = taglines[locale === 'ka' || locale === 'ru' ? locale : 'en'];
  return ids.map((id,index)=>({id,name:'aiBRAIN',tagline:data[index],href:hrefs[index],accentColor:'text-indigo-600 dark:text-indigo-400'}));
}
