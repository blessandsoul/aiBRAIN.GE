'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocale } from 'next-intl';
import { Ico } from '@/components/common/Ico';
import './brain-hero-proof.css';

type Locale = 'ka' | 'en' | 'ru';
type Conversation = {
  title: string;
  sender: string;
  question: string;
  answer: string;
  source: string;
  time: string;
  needsManager?: boolean;
};

type BrainHeroCopy = {
  eyebrow: string;
  status: string;
  teamLabel: string;
  search: string;
  today: string;
  aiStatus: string;
  typing: string;
  input: string;
  approved: string;
  sourceLabel: string;
  managerOnly: string;
  managerHandoff: string;
  illustrative: string;
  replay: string;
  conversations: Conversation[];
};

const COPY: Record<Locale, BrainHeroCopy> = {
  ka: {
    eyebrow: 'შიდა სამუშაო ჩატი',
    status: 'მუშაობს',
    teamLabel: 'გუნდის კითხვები',
    search: 'მოძებნეთ ან დაიწყეთ ახალი ჩატი',
    today: 'დღეს',
    aiStatus: 'aiBRAIN ჩართულია · პასუხობს დამტკიცებულ ინფორმაციაზე დაყრდნობით',
    typing: 'aiBRAIN ამოწმებს ცოდნის ბაზას',
    input: 'ჩაწერეთ შეტყობინება...',
    approved: 'დამტკიცებული პასუხი',
    sourceLabel: 'წყარო',
    managerOnly: 'მენეჯერი მხოლოდ იმ შემთხვევებს ხედავს, რომლებზეც პასუხი ბაზაში არ არის',
    managerHandoff: 'მენეჯერთან გადაცემა',
    illustrative: 'სადემონსტრაციო მონაცემები',
    replay: 'დემოს გამეორება',
    conversations: [
      {
        title: 'გაყიდვები · B2B',
        sender: 'ანა · გაყიდვები',
        question: '50 ცალზე 15%-იანი ფასდაკლება შეიძლება?',
        answer: 'რეგლამენტი №4-ის მიხედვით, ავტომატური ფასდაკლება 12%-ია. 15%-იანი ფასდაკლება მენეჯერის თანხმობას საჭიროებს.',
        source: 'რეგლამენტი №4 · დამტკიცებული წყარო',
        time: '14:22',
        needsManager: true,
      },
      {
        title: 'სერვისი · დაბრუნება',
        sender: 'დავით · მხარდაჭერა',
        question: 'მე-16 დღეს ნივთის დაბრუნება შეიძლება?',
        answer: 'რეგლამენტი №12-ის მიხედვით, ხარისხიანი ნივთის დაბრუნება ჩეკით 14 დღის განმავლობაშია შესაძლებელი.',
        source: 'რეგლამენტი №12 · დამტკიცებული წყარო',
        time: '14:18',
      },
      {
        title: 'რეცეფცია · ჩაწერა',
        sender: 'ნინო · ადმინისტრატორი',
        question: 'ხვალ 14:00-ზე თავისუფალი დრო არის?',
        answer: 'დიახ, ხვალ 14:00 თავისუფალია. პირველადი ვიზიტის ფასი 50 ლარია და ჩანაწერი კალენდარში ჩანს.',
        source: 'სამუშაო გრაფიკი და ფასები · დამტკიცებული',
        time: '14:10',
      },
      {
        title: 'საწყობი · მიწოდება',
        sender: 'გიორგი · საწყობი',
        question: 'ბათუმში 4 კგ-იანი ამანათის ექსპრეს-მიწოდება რამდენი ღირს?',
        answer: '5 კგ-მდე ამანათის ფიქსირებული ტარიფი 25 ლარია. თუ დამატებითი პირობაა საჭირო, საკითხი მენეჯერთან გადადის.',
        source: 'მიწოდების ტარიფები · დამტკიცებული',
        time: '13:55',
        needsManager: true,
      },
    ],
  },
  en: {
    eyebrow: 'Internal team chat',
    status: 'Working',
    teamLabel: 'Team questions',
    search: 'Search or start a chat',
    today: 'Today',
    aiStatus: 'aiBRAIN is on · answers from approved knowledge',
    typing: 'aiBRAIN is checking the source',
    input: 'Type a message...',
    approved: 'Approved answer',
    sourceLabel: 'Source',
    managerOnly: 'The manager sees exceptions only',
    managerHandoff: 'Handoff to manager',
    illustrative: 'Illustrative data',
    replay: 'Replay demo',
    conversations: [
      {
        title: 'Sales · B2B',
        sender: 'Ana · Sales',
        question: 'Can we give 15% off a 50-unit order?',
        answer: 'Policy 4 sets the automatic discount at 12%. Anything above 15% needs manager approval.',
        source: 'Policy 4 · Approved',
        time: '14:22',
        needsManager: true,
      },
      {
        title: 'Service · Returns',
        sender: 'David · Support',
        question: 'Can we accept a return on day 16?',
        answer: 'Policy 12 allows a quality-item return within 14 days with the receipt.',
        source: 'Policy 12 · Approved',
        time: '14:18',
      },
      {
        title: 'Reception · Booking',
        sender: 'Nino · Reception',
        question: 'Is tomorrow at 14:00 still available?',
        answer: 'Yes, 14:00 is available tomorrow. The first visit is 50 GEL and the slot is in the calendar.',
        source: 'Hours and prices · Approved',
        time: '14:10',
      },
      {
        title: 'Warehouse · Delivery',
        sender: 'Giorgi · Warehouse',
        question: 'What is express delivery for a 4 kg parcel to Batumi?',
        answer: 'The fixed rate is 25 GEL for parcels up to 5 kg. An extra rule needs manager review.',
        source: 'Rates · Approved',
        time: '13:55',
        needsManager: true,
      },
    ],
  },
  ru: {
    eyebrow: 'Внутренний рабочий чат',
    status: 'Работает',
    teamLabel: 'Вопросы команды',
    search: 'Поиск или новый чат',
    today: 'Сегодня',
    aiStatus: 'aiBRAIN включён · отвечает по утверждённой базе',
    typing: 'aiBRAIN проверяет источник',
    input: 'Напишите сообщение...',
    approved: 'Утверждённый ответ',
    sourceLabel: 'Источник',
    managerOnly: 'Руководитель видит только исключения',
    managerHandoff: 'Передача руководителю',
    illustrative: 'Иллюстративные данные',
    replay: 'Повторить демо',
    conversations: [
      {
        title: 'Продажи · B2B',
        sender: 'Ана · продажи',
        question: 'Можно дать скидку 15% на заказ из 50 единиц?',
        answer: 'Правило №4 устанавливает автоматическую скидку 12%. Скидка выше требует согласования руководителя.',
        source: 'Правило №4 · Утверждено',
        time: '14:22',
        needsManager: true,
      },
      {
        title: 'Сервис · Возвраты',
        sender: 'Давид · поддержка',
        question: 'Можно принять возврат на 16-й день?',
        answer: 'Правило №12 разрешает возврат качественного товара в течение 14 дней с чеком.',
        source: 'Правило №12 · Утверждено',
        time: '14:18',
      },
      {
        title: 'Ресепшен · Запись',
        sender: 'Нино · администратор',
        question: 'Завтра в 14:00 ещё есть свободное время?',
        answer: 'Да, 14:00 свободно. Первый визит стоит 50 GEL, слот виден в календаре.',
        source: 'График и цены · Утверждено',
        time: '14:10',
      },
      {
        title: 'Склад · Доставка',
        sender: 'Гиорги · склад',
        question: 'Сколько стоит экспресс-доставка 4 кг в Батуми?',
        answer: 'Фиксированный тариф 25 GEL для отправлений до 5 кг. Дополнительное правило проверит руководитель.',
        source: 'Тарифы · Утверждено',
        time: '13:55',
        needsManager: true,
      },
    ],
  },
};

function normalizeLocale(locale: string): Locale {
  return locale === 'en' || locale === 'ru' ? locale : 'ka';
}

const channelIcon = 'solar:chat-round-dots-bold-duotone';

export function HeroProof(): React.ReactElement {
  const locale = normalizeLocale(useLocale());
  const copy = useMemo(() => COPY[locale], [locale]);
  const rootRef = useRef<HTMLDivElement>(null);
  const [conversationIndex, setConversationIndex] = useState(0);
  const [checking, setChecking] = useState(false);
  const [manual, setManual] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncMotion = (): void => setReducedMotion(media.matches);
    syncMotion();
    media.addEventListener?.('change', syncMotion);

    const root = rootRef.current;
    if (!root) return () => media.removeEventListener?.('change', syncMotion);

    let inView = true;
    const syncPaused = (): void => setPaused(!inView || document.visibilityState !== 'visible');
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry?.isIntersecting ?? true;
        syncPaused();
      },
      { threshold: 0.35 },
    );
    observer.observe(root);
    document.addEventListener('visibilitychange', syncPaused);

    return () => {
      observer.disconnect();
      media.removeEventListener?.('change', syncMotion);
      document.removeEventListener('visibilitychange', syncPaused);
    };
  }, []);

  useEffect(() => {
    if (manual || paused || reducedMotion) return undefined;

    const checkTimer = window.setTimeout(() => setChecking(true), 720);
    const answerTimer = window.setTimeout(() => setChecking(false), 1420);
    const nextTimer = window.setTimeout(() => {
      setConversationIndex((current) => (current + 1) % copy.conversations.length);
    }, 5000);

    return () => {
      window.clearTimeout(checkTimer);
      window.clearTimeout(answerTimer);
      window.clearTimeout(nextTimer);
    };
  }, [copy.conversations.length, conversationIndex, manual, paused, reducedMotion]);

  const conversation = copy.conversations[conversationIndex];
  const state = reducedMotion ? 'final' : manual ? 'manual' : paused ? 'paused' : checking ? 'playing' : 'final';

  const replay = (): void => {
    setManual(false);
    setPaused(false);
    setChecking(false);
    setConversationIndex(0);
  };

  const selectConversation = (index: number): void => {
    setManual(true);
    setChecking(false);
    setConversationIndex(index);
  };

  return (
    <div
      ref={rootRef}
      className="brain-hero-proof"
      data-hero-demo="true"
      data-landing-demo="true"
      data-demo-id="aibrain-team-knowledge"
      data-demo-state={state}
      data-demo-phase={checking ? 'checking' : String(conversationIndex)}
      role="region"
      aria-label={copy.eyebrow}
    >
      <div className="brain-wa-window">
        <aside className="brain-wa-sidebar" aria-label={copy.teamLabel}>
          <div className="brain-wa-sidebar-head">
            <span className="brain-wa-avatar brain-wa-avatar-owner"><Ico name="solar:users-group-rounded-bold-duotone" /></span>
            <span className="brain-wa-actions" aria-hidden="true">
              <Ico name="solar:radar-2-bold-duotone" />
              <Ico name="solar:chat-round-dots-bold-duotone" />
              <Ico name="solar:settings-bold-duotone" />
            </span>
          </div>
          <div className="brain-wa-search">
            <Ico name="solar:radar-2-bold-duotone" />
            <span>{copy.search}</span>
          </div>
          <div className="brain-wa-chat-list" role="tablist" aria-label={copy.teamLabel}>
            {copy.conversations.map((item, index) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={conversationIndex === index}
                className={`brain-wa-chat-row${conversationIndex === index ? ' is-active' : ''}`}
                onClick={() => selectConversation(index)}
              >
                <span className={`brain-wa-avatar brain-wa-avatar-${index}`}><Ico name={channelIcon} /></span>
                <span className="brain-wa-chat-row-body">
                  <span className="brain-wa-chat-row-top"><strong>{item.title}</strong><time>{item.time}</time></span>
                  <span className="brain-wa-chat-row-snippet">{item.question}</span>
                </span>
              </button>
            ))}
          </div>
        </aside>

        <section className="brain-wa-main" aria-label={copy.teamLabel}>
          <header className="brain-wa-chat-head">
            <span className="brain-wa-avatar brain-wa-avatar-active"><Ico name={channelIcon} /></span>
            <span className="brain-wa-chat-heading">
              <strong>{conversation.title}</strong>
              <small><span className="brain-wa-online-dot" />{copy.aiStatus}</small>
            </span>
            <span className="brain-wa-actions" aria-hidden="true">
              <Ico name="solar:radar-2-bold-duotone" />
              <Ico name="solar:document-text-bold-duotone" />
              <Ico name="solar:settings-bold-duotone" />
            </span>
          </header>

          <div className="brain-wa-messages" aria-live="off">
            <span className="brain-wa-date-pill">{copy.today}</span>
            <article className="brain-wa-message brain-wa-message-in">
              <span className="brain-wa-message-author"><Ico name="solar:user-circle-bold-duotone" />{conversation.sender}</span>
              <p>{conversation.question}</p>
              <time>{conversation.time}</time>
            </article>

            {checking && (
              <div className="brain-wa-typing" role="status">
                <span>{copy.typing}</span>
                <span className="brain-wa-typing-dots"><i /><i /><i /></span>
              </div>
            )}

            <article className={`brain-wa-message brain-wa-message-out${checking ? ' is-pending' : ''}`}>
              <span className="brain-wa-message-author"><Ico name="solar:database-bold-duotone" />aiBRAIN · {copy.approved}</span>
              <p>{conversation.answer}</p>
              <div className="brain-wa-source-card">
                <Ico name="solar:document-text-bold-duotone" />
                <span><strong>{conversation.source}</strong><small>{copy.sourceLabel} · aiBRAIN</small></span>
              </div>
              <time>{conversation.time} <span className="brain-wa-ticks">✓✓</span></time>
            </article>

            {conversation.needsManager && (
              <div className="brain-wa-manager-note">
                <Ico name="solar:shield-check-bold-duotone" />
                <span>{copy.managerHandoff}</span>
              </div>
            )}
          </div>

          <div className="brain-wa-input-bar" aria-hidden="true">
            <Ico name="solar:chat-round-dots-bold-duotone" />
            <Ico name="solar:document-text-bold-duotone" />
            <span>{copy.input}</span>
            <Ico name="solar:alt-arrow-right-bold-duotone" />
          </div>
        </section>
      </div>

      <footer className="brain-proof-footer">
        <div className="brain-proof-footnote">
          <Ico name="solar:shield-check-bold-duotone" />
          <span>{copy.managerOnly}</span>
        </div>
        <div className="brain-proof-controls">
          <span className="brain-proof-demo-label">{copy.illustrative}</span>
          <button type="button" className="brain-proof-replay" data-demo-replay="true" onClick={replay}>
            <Ico name="solar:refresh-bold-duotone" />
            <span>{copy.replay}</span>
          </button>
        </div>
      </footer>

      <div className="brain-proof-phase-controls" aria-label={copy.teamLabel}>
        {copy.conversations.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={conversationIndex === index ? 'is-active' : ''}
            aria-label={item.title}
            aria-pressed={conversationIndex === index}
            onClick={() => selectConversation(index)}
          />
        ))}
      </div>
    </div>
  );
}
