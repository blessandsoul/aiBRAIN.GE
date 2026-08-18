'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import './brain-landing-sections.css';

export function BrainLandingSections(): React.ReactElement {
  const tCompare = useTranslations('product.compare');
  const tSources = useTranslations('product.sources');
  const tDiff = useTranslations('product.diff');
  const tSteps = useTranslations('product.steps');
  const tSafety = useTranslations('product.safety');
  const tChannels = useTranslations('product.channels');
  const tVerticals = useTranslations('product.verticals');
  const tPreview = useTranslations('product.preview');

  return (
    <div className="brain-suite-root">
      
      {/* ── 1. Comparison «Before vs With aiBRAIN» ── */}
      <section className="brain-section-shell" id="compare">
        <header className="brain-section-head is-centered">
          <span className="brain-eyebrow">{tCompare('eyebrow')}</span>
          <h2 className="brain-title">{tCompare('heading')}</h2>
          <p className="brain-desc">{tCompare('subtitle')}</p>
        </header>

        <div className="brain-compare-grid">
          <div className="compare-col before">
            <div className="compare-col-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
              <span>{tCompare('beforeTitle')}</span>
            </div>
            <div className="compare-card-item">
              <span className="compare-icon-wrap" style={{ color: '#ef4444' }}>✕</span>
              <span>{tCompare('row1Before')}</span>
            </div>
            <div className="compare-card-item">
              <span className="compare-icon-wrap" style={{ color: '#ef4444' }}>✕</span>
              <span>{tCompare('row2Before')}</span>
            </div>
            <div className="compare-card-item">
              <span className="compare-icon-wrap" style={{ color: '#ef4444' }}>✕</span>
              <span>{tCompare('row3Before')}</span>
            </div>
            <div className="compare-card-item">
              <span className="compare-icon-wrap" style={{ color: '#ef4444' }}>✕</span>
              <span>{tCompare('row4Before')}</span>
            </div>
          </div>

          <div className="compare-col after">
            <div className="compare-col-header">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{tCompare('afterTitle')}</span>
            </div>
            <div className="compare-card-item">
              <span className="compare-icon-wrap" style={{ color: '#4f46e5' }}>✓</span>
              <span>{tCompare('row1After')}</span>
            </div>
            <div className="compare-card-item">
              <span className="compare-icon-wrap" style={{ color: '#4f46e5' }}>✓</span>
              <span>{tCompare('row2After')}</span>
            </div>
            <div className="compare-card-item">
              <span className="compare-icon-wrap" style={{ color: '#4f46e5' }}>✓</span>
              <span>{tCompare('row3After')}</span>
            </div>
            <div className="compare-card-item">
              <span className="compare-icon-wrap" style={{ color: '#4f46e5' }}>✓</span>
              <span>{tCompare('row4After')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. What Goes Into Brain (6 Sources) ── */}
      <section className="brain-section-shell" id="sources">
        <header className="brain-section-head">
          <span className="brain-eyebrow">{tSources('eyebrow')}</span>
          <h2 className="brain-title">{tSources('heading')}</h2>
          <p className="brain-desc">{tSources('subtitle')}</p>
        </header>

        <div className="brain-sources-grid">
          <div className="source-card">
            <div className="source-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <h3 className="source-title">{tSources('card1Title')}</h3>
            <p className="source-desc">{tSources('card1Desc')}</p>
          </div>

          <div className="source-card">
            <div className="source-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </div>
            <h3 className="source-title">{tSources('card2Title')}</h3>
            <p className="source-desc">{tSources('card2Desc')}</p>
          </div>

          <div className="source-card">
            <div className="source-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
            <h3 className="source-title">{tSources('card3Title')}</h3>
            <p className="source-desc">{tSources('card3Desc')}</p>
          </div>

          <div className="source-card">
            <div className="source-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <h3 className="source-title">{tSources('card4Title')}</h3>
            <p className="source-desc">{tSources('card4Desc')}</p>
          </div>

          <div className="source-card">
            <div className="source-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="source-title">{tSources('card5Title')}</h3>
            <p className="source-desc">{tSources('card5Desc')}</p>
          </div>

          <div className="source-card">
            <div className="source-icon-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <h3 className="source-title">{tSources('card6Title')}</h3>
            <p className="source-desc">{tSources('card6Desc')}</p>
          </div>
        </div>
      </section>

      {/* ── 3. One Update Everywhere Diff ── */}
      <section className="brain-section-shell" id="diff">
        <div className="brain-diff-box">
          <div className="brain-section-head" style={{ marginBottom: 0 }}>
            <span className="brain-eyebrow" style={{ color: '#a5b4fc' }}>{tDiff('eyebrow')}</span>
            <h2 className="brain-title" style={{ color: '#ffffff' }}>{tDiff('heading')}</h2>
            <p className="brain-desc" style={{ color: '#a1a1aa' }}>{tDiff('subtitle')}</p>
          </div>

          <div className="diff-content-grid">
            <div className="diff-side-card">
              <span className="diff-label">{tDiff('oldRuleLabel')}</span>
              <span className="diff-val" style={{ color: '#f87171' }}>{tDiff('oldRuleVal')}</span>
            </div>

            <div className="diff-arrow-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <div className="diff-side-card new">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="diff-label" style={{ color: '#c7d2fe' }}>{tDiff('newRuleLabel')}</span>
                <span style={{ fontSize: '9.5px', color: '#34d399', fontWeight: 800 }}>{tDiff('statusBadge')}</span>
              </div>
              <span className="diff-val" style={{ color: '#34d399' }}>{tDiff('newRuleVal')}</span>
            </div>
          </div>

          <p style={{ fontSize: '12px', color: '#71717a', margin: 0 }}>{tDiff('note')}</p>
        </div>
      </section>

      {/* ── 4. Four Steps ── */}
      <section className="brain-section-shell" id="steps">
        <header className="brain-section-head">
          <span className="brain-eyebrow">{tSteps('eyebrow')}</span>
          <h2 className="brain-title">{tSteps('heading')}</h2>
          <p className="brain-desc">{tSteps('subtitle')}</p>
        </header>

        <div className="brain-steps-grid">
          <div className="step-card">
            <span className="step-num">{tSteps('step1Num')}</span>
            <h3 className="step-title">{tSteps('step1Title')}</h3>
            <p className="step-desc">{tSteps('step1Desc')}</p>
          </div>

          <div className="step-card">
            <span className="step-num">{tSteps('step2Num')}</span>
            <h3 className="step-title">{tSteps('step2Title')}</h3>
            <p className="step-desc">{tSteps('step2Desc')}</p>
          </div>

          <div className="step-card">
            <span className="step-num">{tSteps('step3Num')}</span>
            <h3 className="step-title">{tSteps('step3Title')}</h3>
            <p className="step-desc">{tSteps('step3Desc')}</p>
          </div>

          <div className="step-card">
            <span className="step-num">{tSteps('step4Num')}</span>
            <h3 className="step-title">{tSteps('step4Title')}</h3>
            <p className="step-desc">{tSteps('step4Desc')}</p>
          </div>
        </div>
      </section>

      {/* ── 5. Safety & Control Panel ── */}
      <section className="brain-section-shell" id="safety">
        <header className="brain-section-head">
          <span className="brain-eyebrow">{tSafety('eyebrow')}</span>
          <h2 className="brain-title">{tSafety('heading')}</h2>
          <p className="brain-desc">{tSafety('subtitle')}</p>
        </header>

        <div className="brain-safety-panel">
          <div className="safety-card">
            <div className="safety-card-head">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="safety-check-icon">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{tSafety('item1Title')}</span>
            </div>
            <p className="safety-card-text">{tSafety('item1Desc')}</p>
          </div>

          <div className="safety-card">
            <div className="safety-card-head">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="safety-check-icon">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{tSafety('item2Title')}</span>
            </div>
            <p className="safety-card-text">{tSafety('item2Desc')}</p>
          </div>

          <div className="safety-card">
            <div className="safety-card-head">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="safety-check-icon">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{tSafety('item3Title')}</span>
            </div>
            <p className="safety-card-text">{tSafety('item3Desc')}</p>
          </div>

          <div className="safety-card">
            <div className="safety-card-head">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="safety-check-icon">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{tSafety('item4Title')}</span>
            </div>
            <p className="safety-card-text">{tSafety('item4Desc')}</p>
          </div>

          <div className="safety-card">
            <div className="safety-card-head">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="safety-check-icon">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{tSafety('item5Title')}</span>
            </div>
            <p className="safety-card-text">{tSafety('item5Desc')}</p>
          </div>

          <div className="safety-card">
            <div className="safety-card-head">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="safety-check-icon">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{tSafety('item6Title')}</span>
            </div>
            <p className="safety-card-text">{tSafety('item6Desc')}</p>
          </div>
        </div>
      </section>

      {/* ── 6. Connected Channels ── */}
      <section className="brain-section-shell" id="channels">
        <header className="brain-section-head">
          <span className="brain-eyebrow">{tChannels('eyebrow')}</span>
          <h2 className="brain-title">{tChannels('heading')}</h2>
          <p className="brain-desc">{tChannels('subtitle')}</p>
        </header>

        <div className="brain-channels-row">
          <div className="channel-box">
            <div className="channel-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <span className="channel-name">{tChannels('ch1')}</span>
            <span className="channel-status-badge">V1 Connected</span>
          </div>

          <div className="channel-box">
            <div className="channel-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <span className="channel-name">{tChannels('ch2')}</span>
            <span className="channel-status-badge">V1 Connected</span>
          </div>

          <div className="channel-box">
            <div className="channel-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className="channel-name">{tChannels('ch3')}</span>
            <span className="channel-status-badge">V1 Connected</span>
          </div>

          <div className="channel-box">
            <div className="channel-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </div>
            <span className="channel-name">{tChannels('ch4')}</span>
            <span className="channel-status-badge">V1 Connected</span>
          </div>

          <div className="channel-box">
            <div className="channel-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <span className="channel-name">{tChannels('ch5')}</span>
            <span className="channel-status-badge">V1 Connected</span>
          </div>
        </div>

        <p style={{ fontSize: '13px', color: '#64748b', marginTop: '16px' }}>{tChannels('roadmap')}</p>
      </section>

      {/* ── 7. Vertical Blueprints ── */}
      <section className="brain-section-shell" id="verticals">
        <header className="brain-section-head">
          <span className="brain-eyebrow">{tVerticals('eyebrow')}</span>
          <h2 className="brain-title">{tVerticals('heading')}</h2>
          <p className="brain-desc">{tVerticals('subtitle')}</p>
        </header>

        <div className="brain-verticals-grid">
          <div className="vertical-card">
            <div className="vertical-head">
              <h3 className="vertical-name">{tVerticals('v1Name')}</h3>
              <span className="vertical-demo-tag">{tVerticals('demoTag')}</span>
            </div>
            <div className="vertical-flow-box">
              <div className="flow-row"><span className="flow-key">კითხვა:</span><span className="flow-val">{tVerticals('v1Q')}</span></div>
              <div className="flow-row"><span className="flow-key">ნაბიჯი:</span><span className="flow-val">{tVerticals('v1Action')}</span></div>
              <div className="flow-row"><span className="flow-key" style={{ color: '#15803d' }}>შედეგი:</span><span className="flow-val" style={{ color: '#15803d' }}>{tVerticals('v1Result')}</span></div>
            </div>
          </div>

          <div className="vertical-card">
            <div className="vertical-head">
              <h3 className="vertical-name">{tVerticals('v2Name')}</h3>
              <span className="vertical-demo-tag">{tVerticals('demoTag')}</span>
            </div>
            <div className="vertical-flow-box">
              <div className="flow-row"><span className="flow-key">კითხვა:</span><span className="flow-val">{tVerticals('v2Q')}</span></div>
              <div className="flow-row"><span className="flow-key">ნაბიჯი:</span><span className="flow-val">{tVerticals('v2Action')}</span></div>
              <div className="flow-row"><span className="flow-key" style={{ color: '#15803d' }}>შედეგი:</span><span className="flow-val" style={{ color: '#15803d' }}>{tVerticals('v2Result')}</span></div>
            </div>
          </div>

          <div className="vertical-card">
            <div className="vertical-head">
              <h3 className="vertical-name">{tVerticals('v3Name')}</h3>
              <span className="vertical-demo-tag">{tVerticals('demoTag')}</span>
            </div>
            <div className="vertical-flow-box">
              <div className="flow-row"><span className="flow-key">კითხვა:</span><span className="flow-val">{tVerticals('v3Q')}</span></div>
              <div className="flow-row"><span className="flow-key">ნაბიჯი:</span><span className="flow-val">{tVerticals('v3Action')}</span></div>
              <div className="flow-row"><span className="flow-key" style={{ color: '#15803d' }}>შედეგი:</span><span className="flow-val" style={{ color: '#15803d' }}>{tVerticals('v3Result')}</span></div>
            </div>
          </div>

          <div className="vertical-card">
            <div className="vertical-head">
              <h3 className="vertical-name">{tVerticals('v4Name')}</h3>
              <span className="vertical-demo-tag">{tVerticals('demoTag')}</span>
            </div>
            <div className="vertical-flow-box">
              <div className="flow-row"><span className="flow-key">კითხვა:</span><span className="flow-val">{tVerticals('v4Q')}</span></div>
              <div className="flow-row"><span className="flow-key">ნაბიჯი:</span><span className="flow-val">{tVerticals('v4Action')}</span></div>
              <div className="flow-row"><span className="flow-key" style={{ color: '#15803d' }}>შედეგი:</span><span className="flow-val" style={{ color: '#15803d' }}>{tVerticals('v4Result')}</span></div>
            </div>
          </div>

          <div className="vertical-card">
            <div className="vertical-head">
              <h3 className="vertical-name">{tVerticals('v5Name')}</h3>
              <span className="vertical-demo-tag">{tVerticals('demoTag')}</span>
            </div>
            <div className="vertical-flow-box">
              <div className="flow-row"><span className="flow-key">კითხვა:</span><span className="flow-val">{tVerticals('v5Q')}</span></div>
              <div className="flow-row"><span className="flow-key">ნაბიჯი:</span><span className="flow-val">{tVerticals('v5Action')}</span></div>
              <div className="flow-row"><span className="flow-key" style={{ color: '#15803d' }}>შედეგი:</span><span className="flow-val" style={{ color: '#15803d' }}>{tVerticals('v5Result')}</span></div>
            </div>
          </div>

          <div className="vertical-card">
            <div className="vertical-head">
              <h3 className="vertical-name">{tVerticals('v6Name')}</h3>
              <span className="vertical-demo-tag">{tVerticals('demoTag')}</span>
            </div>
            <div className="vertical-flow-box">
              <div className="flow-row"><span className="flow-key">კითხვა:</span><span className="flow-val">{tVerticals('v6Q')}</span></div>
              <div className="flow-row"><span className="flow-key">ნაბიჯი:</span><span className="flow-val">{tVerticals('v6Action')}</span></div>
              <div className="flow-row"><span className="flow-key" style={{ color: '#15803d' }}>შედეგი:</span><span className="flow-val" style={{ color: '#15803d' }}>{tVerticals('v6Result')}</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Real Project Fire Brain Preview ── */}
      <section className="brain-section-shell" id="preview">
        <header className="brain-section-head">
          <span className="brain-eyebrow">{tPreview('eyebrow')}</span>
          <h2 className="brain-title">{tPreview('heading')}</h2>
          <p className="brain-desc">{tPreview('subtitle')}</p>
        </header>

        <div className="brain-preview-shell">
          <div className="preview-sidebar">
            <div className="preview-nav-item active">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /></svg>
              <span>{tPreview('secIdentity')}</span>
            </div>
            <div className="preview-nav-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /></svg>
              <span>{tPreview('secKnowledge')}</span>
            </div>
            <div className="preview-nav-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              <span>{tPreview('secMessages')}</span>
            </div>
            <div className="preview-nav-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              <span>{tPreview('secTools')}</span>
            </div>
            <div className="preview-nav-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /></svg>
              <span>{tPreview('secBooking')}</span>
            </div>
            <div className="preview-nav-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /></svg>
              <span>{tPreview('secProducts')}</span>
            </div>
          </div>

          <div className="preview-main-content">
            <div className="preview-card-section">
              <h4 style={{ fontSize: '14px', fontWeight: 800, color: '#09090b', margin: 0 }}>
                {tPreview('sampleTitle')}
              </h4>
              <div className="preview-item-row">
                <span style={{ color: '#4f46e5', fontWeight: 800 }}>•</span>
                <span>{tPreview('sampleItem1')}</span>
              </div>
              <div className="preview-item-row">
                <span style={{ color: '#4f46e5', fontWeight: 800 }}>•</span>
                <span>{tPreview('sampleItem2')}</span>
              </div>
            </div>

            <div className="preview-card-section">
              <div className="preview-toggle-row">
                <span>{tPreview('toolTg')}</span>
                <span className="preview-toggle-badge">Active</span>
              </div>
              <div className="preview-toggle-row">
                <span>{tPreview('toolCal')}</span>
                <span className="preview-toggle-badge">Active</span>
              </div>
            </div>

            <p style={{ fontSize: '11.5px', color: '#94a3b8', margin: 0 }}>
              {tPreview('note')}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
