const tones = ['openai', 'anthropic', 'google', 'xai', 'mistral', 'deepseek', 'meta', 'qwen', 'cohere', 'zai', 'kimi'] as const;
const slots = {
  en: [
    ['Sources', 'Approved company documents'],
    ['Responsibility', 'Who reviews a change'],
    ['Consistency', 'The same information across assistants'],
    ['Unknowns', 'Questions that need clarification'],
    ['Handover', 'When a person should take over'],
    ['Catalog', 'Product information from your source'],
    ['Rules', 'Agreed business rules'],
    ['Questions', 'Answers your team has approved'],
    ['Prices', 'Prices from the agreed source'],
    ['Access', 'Who can use each source'],
    ['Updates', 'Review after information changes'],
  ],
  ka: [
    ['წყაროები', 'კომპანიის დამტკიცებული დოკუმენტები'],
    ['პასუხისმგებლობა', 'ვინ ამოწმებს ცვლილებას'],
    ['ერთიანი ინფორმაცია', 'ასისტენტები ერთ წყაროს ეყრდნობა'],
    ['დაზუსტება', 'კითხვები, რომლებსაც დაზუსტება სჭირდება'],
    ['გადაცემა', 'როდის ერთვება ადამიანი'],
    ['კატალოგი', 'პროდუქტის ინფორმაცია თქვენი წყაროდან'],
    ['წესები', 'ბიზნესის შეთანხმებული წესები'],
    ['კითხვები', 'თქვენი გუნდის მიერ დამტკიცებული პასუხები'],
    ['ფასები', 'ფასები შეთანხმებული წყაროდან'],
    ['წვდომა', 'ვის შეუძლია წყაროს გამოყენება'],
    ['განახლება', 'შემოწმება ინფორმაციის შეცვლის შემდეგ'],
  ],
  ru: [
    ['Источники', 'Утверждённые документы компании'],
    ['Ответственность', 'Кто проверяет изменения'],
    ['Единая информация', 'Ассистенты опираются на один источник'],
    ['Уточнения', 'Вопросы, которые нужно уточнить'],
    ['Передача', 'Когда подключается человек'],
    ['Каталог', 'Данные о продуктах из вашего источника'],
    ['Правила', 'Согласованные правила бизнеса'],
    ['Вопросы', 'Ответы, утверждённые вашей командой'],
    ['Цены', 'Цены из согласованного источника'],
    ['Доступ', 'Кто может использовать источник'],
    ['Обновления', 'Проверка после изменения информации'],
  ],
} as const;

export function getAiBrainKnowledgeSlots(locale: string) {
  const data = slots[locale === 'ka' || locale === 'ru' ? locale : 'en'];
  return data.map(([wordmark, detail], index) => ({
    lab: `knowledge-${index}`, mark: null, wordmark, detail, tone: tones[index],
  }));
}
