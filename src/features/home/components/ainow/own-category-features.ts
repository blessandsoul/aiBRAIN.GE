type Locale = "ka" | "en" | "ru";
type Feature = { name: string; description: string };

const copy: Record<Locale, Record<string, Feature>> = {
  ka: {
    rules: { name: "ერთიანი წესები", description: "კომპანიის დამტკიცებული წესები ერთ სამუშაო კონტექსტში ინახება." },
    source: { name: "წყარო", description: "პასუხები იმ წყაროებს ეყრდნობა, რომლებსაც გუნდი ამტკიცებს." },
    catalog: { name: "კატალოგი", description: "პროდუქტები, სერვისები და პირობები ცალკე წესებად იწერება." },
    prices: { name: "ფასები", description: "ფასი და კომერციული პირობები განახლებამდე მოწმდება." },
    schedules: { name: "გრაფიკი", description: "სამუშაო საათები და ვადები მოქმედი წესებით იმართება." },
    consistency: { name: "ერთიანი პასუხი", description: "ერთსა და იმავე წესზე გუნდს ერთიანი პასუხი აქვს." },
    access: { name: "წვდომა", description: "წვდომის როლები და პასუხისმგებლები წინასწარ განისაზღვრება." },
    guard: { name: "საზღვარი", description: "სარისკო ან გაურკვეველი თემა ადამიანურ შემოწმებას საჭიროებს." },
    escalation: { name: "ადამიანის ჩართვა", description: "რთული შემთხვევა ადამიანთან განხილვის გზაზე გადადის." },
    channels: { name: "არხები", description: "ინფორმაცია შეთანხმებულ სამუშაო არხებში გამოიყენება." },
    owner: { name: "პასუხისმგებელი", description: "თითოეულ წესსა და ცვლილებას პასუხისმგებელი ჰყავს." },
    control: { name: "კონტროლი", description: "განახლება და გამოყენება შეთანხმებული კონტროლით მიმდინარეობს." },
  },
  en: {
    rules: { name: "Shared rules", description: "Approved company rules stay in one working context." },
    source: { name: "Source", description: "Answers rely on sources the team has approved." },
    catalog: { name: "Catalog", description: "Products, services and terms are recorded as separate rules." },
    prices: { name: "Prices", description: "Prices and commercial terms are checked before updates." },
    schedules: { name: "Schedules", description: "Working hours and timing follow the active rules." },
    consistency: { name: "Consistent answers", description: "The team follows the same answer for the same rule." },
    access: { name: "Access", description: "Access roles and owners are defined in advance." },
    guard: { name: "Boundary", description: "Risky or uncertain topics require human review." },
    escalation: { name: "Human involvement", description: "Complex cases follow a human discussion path." },
    channels: { name: "Channels", description: "Information is used in the agreed work channels." },
    owner: { name: "Responsible owner", description: "Each rule and change has a responsible owner." },
    control: { name: "Control", description: "Updates and use follow the agreed control path." },
  },
  ru: {
    rules: { name: "Единые правила", description: "Согласованные правила компании хранятся в одном рабочем контексте." },
    source: { name: "Источник", description: "Ответы опираются на источники, утверждённые командой." },
    catalog: { name: "Каталог", description: "Товары, услуги и условия записываются отдельными правилами." },
    prices: { name: "Цены", description: "Цены и коммерческие условия проверяются до обновления." },
    schedules: { name: "График", description: "Рабочие часы и сроки следуют действующим правилам." },
    consistency: { name: "Единые ответы", description: "Команда отвечает одинаково на один и тот же вопрос." },
    access: { name: "Доступ", description: "Роли доступа и ответственные определяются заранее." },
    guard: { name: "Граница", description: "Рискованные или неясные темы требуют проверки человеком." },
    escalation: { name: "Участие человека", description: "Сложные случаи идут по пути обсуждения с человеком." },
    channels: { name: "Каналы", description: "Информация используется в согласованных рабочих каналах." },
    owner: { name: "Ответственный", description: "За каждое правило и изменение отвечает назначенный человек." },
    control: { name: "Контроль", description: "Обновление и использование проходят по согласованному пути контроля." },
  },
};

export function getOwnCategoryFeatures(locale: string): Record<string, Feature> {
  return copy[locale === "ka" || locale === "ru" ? locale : "en"];
}
