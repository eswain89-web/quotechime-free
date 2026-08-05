const clean = (value, fallback, max = 100) => {
  const text = String(value || '').replace(/\s+/g, ' ').trim().slice(0, max);
  return text || fallback;
};

const money = (value) => {
  const amount = Number(String(value || '').replace(/[^0-9.]/g, ''));
  if (!Number.isFinite(amount) || amount <= 0) return 'the quoted work';
  return new Intl.NumberFormat('en-AU', {
    style: 'currency', currency: 'AUD', maximumFractionDigits: 0,
  }).format(amount);
};

export function buildSequence(input = {}) {
  const business = clean(input.business, 'our team');
  const customer = clean(input.customer, 'there', 50);
  const service = clean(input.service, 'the work we quoted', 140);
  const availability = clean(input.availability, 'our next available start window', 100);
  const amount = money(input.amount);
  const warm = input.tone !== 'direct';
  const opener = warm ? `Hi ${customer}, hope you're well.` : `Hi ${customer},`;

  return [
    {
      timing: 'First check-in · 1–2 business days',
      channel: 'SMS',
      subject: '',
      body: `${opener} Just checking the quote for ${service} reached you okay. If you have any questions or want anything clarified, reply here and I’ll help. — ${business}`,
    },
    {
      timing: 'Helpful nudge · 3–5 business days',
      channel: 'Email',
      subject: `Quick check-in on your ${service} quote`,
      body: `Hi ${customer},\n\nI’m following up on the ${amount} quote for ${service}. Is there anything you’d like clarified or adjusted before you decide?\n\nIf the timing is the main question, our current availability is ${availability}. No pressure—just reply with any questions.\n\nThanks,\n${business}`,
    },
    {
      timing: 'Decision nudge · 7–10 business days',
      channel: 'SMS',
      subject: '',
      body: `Hi ${customer}, a quick follow-up on the quote for ${service}. Would you like to go ahead, revisit the scope, or leave it for now? Any answer is helpful and I’m happy to clarify the options. — ${business}`,
    },
    {
      timing: 'Close the loop · 14+ business days',
      channel: 'Email',
      subject: `Should I close your ${service} quote?`,
      body: `Hi ${customer},\n\nI haven’t heard back about the quote for ${service}, so I’ll close it for now rather than keep chasing you.\n\nIf you still want to proceed, reply to this email and I can confirm current pricing and availability.\n\nAll the best,\n${business}`,
    },
  ];
}

export function sequenceAsText(sequence) {
  return sequence.map((item) => [
    item.timing,
    `${item.channel}${item.subject ? ` · ${item.subject}` : ''}`,
    item.body,
  ].join('\n')).join('\n\n---\n\n');
}
