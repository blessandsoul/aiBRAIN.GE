'use client';

import { useLocale, useTranslations } from 'next-intl';

import { Ico } from '@/components/common/Ico';
import { PRODUCT_PAGES } from '@/config/product-pages';
import { SITE } from '@/config/site';
import './product-landing-sections.css';
import './tiktok-roadmap.css';

type Locale = 'ka' | 'en' | 'ru';

const TIKTOK_ROADMAP_COPY = {
  ka: {
    status: 'მალე',
    title: 'TikTok-ის ინტეგრაცია მზადდება',
    note: 'ჯერ არ არის ხელმისაწვდომი. გაშვება დამოკიდებულია TikTok-ის დამტკიცებასა და რეგიონულ მხარდაჭერაზე.',
  },
  en: {
    status: 'Coming soon',
    title: 'TikTok integration is in preparation',
    note: 'It is not currently available. Launch depends on TikTok approval and regional support.',
  },
  ru: {
    status: 'Скоро',
    title: 'Интеграция с TikTok готовится',
    note: 'Сейчас она недоступна. Запуск зависит от одобрения TikTok и региональной поддержки.',
  },
} as const;

const UI = {
  ka: {
    compareEyebrow: 'რა იცვლება',
    compareHeading: 'თანამშრომლები მენეჯერს აღარ აცდენენ. პასუხი წამებშია.',
    before: 'დღეს, Brain-ის გარეშე',
    after: 'aiBRAIN-თან ერთად',
    beforeRows: [
      ['თანამშრომლები ყოველ წვრილმანზე მენეჯერს წერენ', 'მენეჯერი მთელ დღეს ჩატებში ერთსა და იმავე პასუხებზე ხარჯავს'],
      ['ფასები და წესები ძველ ფაილებში იკარგება', 'გუნდი კლიენტებს განსხვავებულ და მოძველებულ პირობებს ეუბნება'],
      ['გაურკვეველ კითხვაზე თანამშრომელი იგონებს პასუხს', 'არაზუსტი დაპირებები და შეცდომები კომპანიას აზარალებს'],
      ['ახალი წესი ხელით უნდა ჩაუგდოთ ყველას', 'ნახევარ გუნდს ცვლილება ავიწყდება და ძველი წესით მუშაობს'],
    ],
    dashboardEyebrow: 'ერთი ეკრანი',
    dashboardHeading: 'ცოდნის ბაზის მდგომარეობა და აქტივობა.',
    dashboardNote: 'საჩვენებელი ეკრანი. რეალურ ვერსიაში ინფორმაცია თქვენი სამუშაო პროცესიდან მოდის.',
    dashboardGroup: 'ცოდნის ბაზა',
    dashboardPeriod: 'ახლა',
    dashboardFoot: 'მენეჯერი ხედავს რა წესები მუშაობს, რას ეკითხებიან თანამშრომლები და სად სჭირდებათ ჩარევა.',
    reviewsHeading: 'რეალური შეფასებები aiNOW-ის გუნდის შესახებ.',
    reviewsLink: '25 შეფასება Google-ზე',
    casesEyebrow: 'პრაქტიკაში',
    casesHeading: 'სამი მარტივი სცენარი.',
    casesNote: 'პროცესი ნაჩვენებია მარტივად, ზედმეტი ტექნიკური დეტალების გარეშე.',
    integrationsEyebrow: 'რას ვაერთებთ',
    integrationsHeading: 'მუშაობს იმ ჩატებთან, სადაც თქვენი გუნდი უკვე მუშაობს.',
    integrationsNote: 'ახალი რთული პროგრამის სწავლა არ გჭირდებათ.',
    resourcesEyebrow: 'სასარგებლო მასალები',
    resourcesHeading: 'ჯერ გაეცანით. შემდეგ მიიღეთ გადაწყვეტილება.',
    resourceAction: 'წაკითხვა',
    resourceTitles: ['როგორ მუშაობს ეს ბიზნესში', 'რა უნდა იცოდეთ დაწყებამდე', 'როგორ აწყობს aiNOW სამუშაო სისტემას'],
    illustrative: 'საილუსტრაციო მონაცემები',
  },
  en: {
    compareEyebrow: 'What changes',
    compareHeading: 'Employees stop interrupting the manager. Instant answers.',
    before: 'Today, without Brain',
    after: 'With aiBRAIN',
    beforeRows: [
      ['Employees ask the manager for every routine detail', 'The manager spends 3+ hours daily repeating the same answers'],
      ['Prices and policies get lost in old files and chats', 'The team gives conflicting and outdated information to clients'],
      ['Staff guess answers when a rule is unclear', 'Inaccurate promises cause customer friction and losses'],
      ['New rules must be manually forwarded to everyone', 'Half the team forgets the update and follows old procedures'],
    ],
    dashboardEyebrow: 'One screen',
    dashboardHeading: 'Knowledge base status and live activity.',
    dashboardNote: 'Illustrative screen. The live version connects directly to your company workflows.',
    dashboardGroup: 'Knowledge Base',
    dashboardPeriod: 'Now',
    dashboardFoot: 'The manager sees active rules, what staff ask, and cases requiring personal review.',
    reviewsHeading: 'Real reviews about the aiNOW team.',
    reviewsLink: '25 reviews on Google',
    casesEyebrow: 'In practice',
    casesHeading: 'Three simple scenarios.',
    casesNote: 'The process is shown in plain business language without unnecessary technical detail.',
    integrationsEyebrow: 'Connections',
    integrationsHeading: 'Works with the tools your team already uses daily.',
    integrationsNote: 'Your team does not need to learn another complicated system.',
    resourcesEyebrow: 'Useful guides',
    resourcesHeading: 'Understand it first. Decide after.',
    resourceAction: 'Read guide',
    resourceTitles: ['How this works in a business', 'What to know before you start', 'How aiNOW builds the working system'],
    illustrative: 'Illustrative data',
  },
  ru: {
    compareEyebrow: 'Что меняется',
    compareHeading: 'Сотрудники больше не отвлекают менеджера. Ответ за секунды.',
    before: 'Сейчас, без Brain',
    after: 'Вместе с aiBRAIN',
    beforeRows: [
      ['Сотрудники пишут менеджеру по каждому вопросу', 'Менеджер тратит 3+ часа в день на одни и те же ответы в чатах'],
      ['Цены и регламенты теряются в старых переписках', 'Команда озвучивает клиентам разные и устаревшие условия'],
      ['Сотрудник придумывает ответ на непонятный вопрос', 'Ошибки и пустые обещания приводят к убыткам компании'],
      ['Каждое новое правило нужно вручную пересылать всем', 'Половина команды забывает обновление и работает по-старому'],
    ],
    dashboardEyebrow: 'Один экран',
    dashboardHeading: 'Состояние базы знаний и активность.',
    dashboardNote: 'Демонстрационный экран. В рабочей версии данные берутся из ваших процессов.',
    dashboardGroup: 'База знаний',
    dashboardPeriod: 'Сейчас',
    dashboardFoot: 'Менеджер видит активные правила, частые вопросы команды и переданные сложные случаи.',
    reviewsHeading: 'Реальные отзывы о команде aiNOW.',
    reviewsLink: '25 отзывов в Google',
    casesEyebrow: 'На практике',
    casesHeading: 'Три простых сценария.',
    casesNote: 'Процесс объяснён на языке бизнеса без лишних технических подробностей.',
    integrationsEyebrow: 'Подключения',
    integrationsHeading: 'Работает в чатах, где команда уже общается.',
    integrationsNote: 'Команде не нужно осваивать ещё одну сложную программу.',
    resourcesEyebrow: 'Полезные материалы',
    resourcesHeading: 'Сначала разберитесь. Потом принимайте решение.',
    resourceAction: 'Читать',
    resourceTitles: ['Как это работает в бизнесе', 'Что нужно знать перед запуском', 'Как aiNOW собирает рабочую систему'],
    illustrative: 'Демонстрационные данные',
  },
} as const;

const REVIEWS = [
  { name: 'giorgi bagratiani', text: 'ავტოსამრეცხაო გვაქვს და ბოტში დროის მიხედვით ჩაწერა მოიფიქრეს. რიგები შემცირდა და კლიენტიც კმაყოფილია.' },
  { name: 'Edi Tamoyani', text: 'ახლა ბოტი თავად სცემს პასუხს ფასებზე და ჩაწერასაც ნებისმიერ დროს აკეთებს. თავისუფალი საათები უკეთ ივსება.' },
  { name: 'Luka Karumidze', text: 'ბოტი კლიენტებს პირდაპირ Instagram-იდან იწერს. თავისუფალი საათები უფრო მჭიდროდ ივსება.' },
] as const;

type ProductLandingConfig = {
  integrations: Array<[string, string]>;
  resources: [string, string, string];
  resourceTitles: Record<Locale, [string, string, string]>;
};

const PRODUCT_LANDING_CONFIG = {
  aibrain: {
    integrations: [
      ['solar:chat-round-dots-bold-duotone', 'Telegram'],
      ['solar:chat-line-bold-duotone', 'Slack'],
      ['solar:phone-bold-duotone', 'WhatsApp'],
      ['solar:calendar-bold-duotone', 'Google Calendar'],
    ],
    resources: ['/services/automation', '/ai-biznesistvis', '/projects'],
    resourceTitles: {
      ka: ['ბიზნეს-ცოდნის ავტომატიზაცია', 'როგორ დავნერგოთ AI ბიზნესში', 'aiNOW-ის რეალური პროექტები'],
      en: ['Business Knowledge Automation', 'How to Introduce AI in Business', 'Real Projects by aiNOW'],
      ru: ['Автоматизация базы знаний бизнеса', 'Как внедрить AI в бизнесе', 'Реальные проекты aiNOW'],
    },
  },
  aioffice: {
    integrations: [
      ['solar:letter-bold-duotone', 'Email'],
      ['solar:calendar-bold-duotone', 'Calendar'],
      ['solar:document-bold-duotone', 'Cloud files'],
      ['solar:checklist-minimalistic-bold-duotone', 'Task systems'],
    ],
    resources: ['/services/automation', '/ai-biznesistvis', '/projects'],
    resourceTitles: {
      ka: ['ბიზნეს-პროცესების ავტომატიზაცია', 'როგორ დავნერგოთ AI ბიზნესში', 'aiNOW-ის რეალური პროექტები'],
      en: ['Business process automation', 'How to introduce AI in a business', 'Real projects by aiNOW'],
      ru: ['Автоматизация бизнес-процессов', 'Как внедрить AI в бизнесе', 'Реальные проекты aiNOW'],
    },
  },
} as Record<string, ProductLandingConfig>;

export function ProductLandingSections(): React.ReactElement {
  const locale = useLocale() as Locale;
  const c = UI[locale] ?? UI.en;
  const t = useTranslations('product.work');
  const siteKey: string = SITE.key;
  const productName = `${SITE.wordmark.prefix}${SITE.wordmark.mark}`;
  const steps = [1, 2, 3, 4, 5, 6].map((number) => ({
    title: t(`s${number}Title`),
    tag: t(`s${number}Tag`),
    description: t(`s${number}Desc`),
  }));
  const config =
    PRODUCT_LANDING_CONFIG[siteKey as keyof typeof PRODUCT_LANDING_CONFIG] ??
    PRODUCT_LANDING_CONFIG.aibrain ??
    PRODUCT_LANDING_CONFIG.aioffice;
  const integrations = config.integrations;
  const tiktokIntegration = PRODUCT_PAGES.integrations.records.find((record) =>
    record.id.startsWith('tiktok'),
  );
  const tiktokCopy = TIKTOK_ROADMAP_COPY[locale] ?? TIKTOK_ROADMAP_COPY.en;
  const urls = config.resources;
  const resourceTitles = config.resourceTitles[locale];

  return (
    <>
      {/* ── 1. Comparison: Before vs With aiBRAIN ── */}
      <section id="compare" className="pl-section pl-compare" data-landing-section="compare">
        <div className="pl-shell" data-family-shell="true">
          <SectionHead eyebrow={c.compareEyebrow} heading={c.compareHeading} />
          <div className="pl-compare-table">
            <div className="pl-compare-head">
              <span>{c.before}</span>
              <span>{productName}</span>
            </div>
            {c.beforeRows.map((before, index) => (
              <div className="pl-compare-row" key={before[0]}>
                <div className="pl-compare-side is-before">
                  <Ico name="solar:close-circle-bold-duotone" />
                  <span>
                    <strong>{before[0]}</strong>
                    <small>{before[1]}</small>
                  </span>
                </div>
                <Ico name="solar:arrow-right-bold-duotone" className="pl-compare-arrow" aria-hidden="true" />
                <div className="pl-compare-side is-after">
                  <Ico name="solar:check-circle-bold-duotone" />
                  <span>
                    <strong>{steps[index].title}</strong>
                    <small>{steps[index].description}</small>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Dashboard KPI Overview ── */}
      <section id="dashboard" className="pl-section pl-dashboard" data-landing-section="dashboard" data-demo-static="true">
        <div className="pl-shell" data-family-shell="true">
          <div className="pl-dashboard-intro">
            <SectionHead eyebrow={c.dashboardEyebrow} heading={c.dashboardHeading} />
            <p>{c.dashboardNote}</p>
          </div>
          <div className="pl-dashboard-panel">
            <div className="pl-dashboard-bar">
              <span>
                <i />
                {productName} · {c.dashboardGroup}
              </span>
              <small>{c.dashboardPeriod}</small>
            </div>
            <div className="pl-kpi-grid">
              {steps.slice(0, 4).map((step, index) => (
                <article className="pl-kpi" key={step.title}>
                  <Ico
                    name={
                      [
                        'solar:inbox-bold-duotone',
                        'solar:checklist-minimalistic-bold-duotone',
                        'solar:shield-check-bold-duotone',
                        'solar:flag-2-bold-duotone',
                      ][index]
                    }
                  />
                  <span>{step.title}</span>
                  <strong>{step.tag}</strong>
                  <small>{c.illustrative}</small>
                </article>
              ))}
            </div>
            <p className="pl-dashboard-foot">{c.dashboardFoot}</p>
          </div>
        </div>
      </section>

      {/* ── 3. Google Reviews ── */}
      <section id="reviews" className="pl-reviews" data-landing-section="reviews" aria-labelledby="reviews-title">
        <div className="pl-reviews-label">
          <h2 id="reviews-title">{c.reviewsHeading}</h2>
          <a href="https://maps.google.com/?cid=15533558721751972154" target="_blank" rel="noreferrer">
            <GoogleMark />
            <strong>4.7</strong>
            <span>{c.reviewsLink}</span>
          </a>
        </div>
        <div className="pl-review-viewport" tabIndex={0} aria-label={c.reviewsHeading}>
          <div className="pl-review-track">
            {[...REVIEWS, ...REVIEWS].map((review, index) => (
              <article className="pl-review" key={`${review.name}-${index}`} aria-hidden={index >= REVIEWS.length || undefined}>
                <div>
                  <span>{review.name.slice(0, 1).toUpperCase()}</span>
                  <strong>{review.name}</strong>
                </div>
                <p>{review.text}</p>
                <span className="pl-review-stars" role="img" aria-label="5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Ico name="solar:star-bold" key={star} />
                  ))}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Practical Cases ── */}
      <section id="cases" className="pl-section pl-cases" data-landing-section="cases" data-demo-static="true">
        <div className="pl-shell" data-family-shell="true">
          <div className="pl-section-split">
            <SectionHead eyebrow={c.casesEyebrow} heading={c.casesHeading} />
            <p>{c.casesNote}</p>
          </div>
          <div className="pl-case-list">
            {[steps[0], steps[2], steps[4]].map((step, index) => (
              <article className="pl-case" data-business-outcome="true" key={step.title}>
                <span className="pl-case-index">0{index + 1}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.description}</p>
                </div>
                <span className="pl-case-tag">{step.tag}</span>
                <Ico name="solar:arrow-right-bold-duotone" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Integrations Grid ── */}
      <section id="integrations" className="pl-section pl-integrations" data-landing-section="integrations">
        <div className="pl-shell" data-family-shell="true">
          <SectionHead eyebrow={c.integrationsEyebrow} heading={c.integrationsHeading} description={c.integrationsNote} centered />
          <div className="pl-integration-grid">
            {integrations.map(([icon, label]) => (
              <article className="pl-integration" key={label}>
                <span>
                  <Ico name={icon} />
                </span>
                <strong>{label}</strong>
              </article>
            ))}
          </div>
          {tiktokIntegration ? (
            <article className="pl-tiktok-roadmap" data-integration-status="planned" data-available-now="false">
              <span className="pl-tiktok-roadmap__icon">
                <Ico name={tiktokIntegration.icon} />
              </span>
              <div>
                <strong>{tiktokCopy.title}</strong>
                <p>{tiktokCopy.note}</p>
              </div>
              <span className="pl-tiktok-roadmap__status">{tiktokCopy.status}</span>
            </article>
          ) : null}
        </div>
      </section>

      {/* ── 6. Resources & Guides ── */}
      <section id="resources" className="pl-section pl-resources" data-landing-section="resources">
        <div className="pl-shell" data-family-shell="true">
          <SectionHead eyebrow={c.resourcesEyebrow} heading={c.resourcesHeading} />
          <div className="pl-resource-grid">
            {urls.map((path, index) => {
              const isLocal = siteKey === 'aitaxi' && index < 2;
              return (
                <a
                  className="pl-resource"
                  href={`${isLocal ? '' : 'https://ainow.ge'}${path}`}
                  target={isLocal ? undefined : '_blank'}
                  rel={isLocal ? undefined : 'noreferrer'}
                  key={path}
                >
                  <span>0{index + 1}</span>
                  <strong>{resourceTitles[index]}</strong>
                  <small>
                    {c.resourceAction}
                    <Ico name="solar:arrow-right-up-bold-duotone" />
                  </small>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({
  eyebrow,
  heading,
  description,
  centered = false,
}: {
  eyebrow: string;
  heading: string;
  description?: string;
  centered?: boolean;
}): React.ReactElement {
  return (
    <header className={`pl-section-head${centered ? ' is-centered' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{heading}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}

function GoogleMark(): React.ReactElement {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 4.48-4.78 6.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59A14.7 14.7 0 0 1 9.77 24c0-1.6.27-3.14.76-4.59l-7.98-6.19A24 24 0 0 0 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}
