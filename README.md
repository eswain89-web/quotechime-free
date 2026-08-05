# QuoteChime Free

A tiny, dependency-free quote follow-up sequence generator. It creates four
calm SMS/email drafts for service businesses without uploading customer or
quote data.

![QuoteChime Free browser generator](docs/quotechime-free.png)

**[Use the live generator](https://quotechime.pages.dev/?ref=github-repo#generator)** ·
**[Compare the A$1, A$3, A$7 and A$19 one-time packs](https://quotechime.pages.dev/?ref=github-repo#offers)**

Free companion tools:

- [business-day follow-up planner + calendar reminders](https://quotechime.pages.dev/tools/follow-up-date-calculator?ref=github-repo)
- [quote expiry date calculator](https://quotechime.pages.dev/tools/quote-expiry-date-calculator?ref=github-repo)
- [printable quote follow-up checklist](https://quotechime.pages.dev/tools/quote-follow-up-checklist?ref=github-repo)
- [lost quote revenue scenario calculator](https://quotechime.pages.dev/tools/lost-quote-revenue-calculator?ref=github-repo)
- [quote objection response generator](https://quotechime.pages.dev/tools/quote-objection-response-generator?ref=github-repo)
- [embeddable privacy-first website widget](https://quotechime.pages.dev/tools/embed-quote-follow-up-widget?ref=github-repo)

Repository-native resources that work offline:

- [finite quote follow-up workflow and copy-ready examples](resources/quote-follow-up-workflow.md)
- [privacy-minimised quote pipeline tracker](resources/quote-follow-up-tracker.csv)

Using job-management software? These independent guides match editable copy to
the vendors' documented reminder behaviour:

- [Jobber quote follow-up templates](https://quotechime.pages.dev/guides/jobber-quote-follow-up-template?ref=github-repo)
- [ServiceM8 quote follow-up templates](https://quotechime.pages.dev/guides/servicem8-quote-follow-up-template?ref=github-repo)
- [Tradify quote reminder templates](https://quotechime.pages.dev/guides/tradify-quote-reminder-template?ref=github-repo)
- [Fergus quote reminder templates](https://quotechime.pages.dev/guides/fergus-quote-reminder-template?ref=github-repo)
- [Housecall Pro estimate follow-up templates](https://quotechime.pages.dev/guides/housecall-pro-estimate-follow-up-template?ref=github-repo)
- [ServiceTitan unsold estimate follow-up templates](https://quotechime.pages.dev/guides/servicetitan-unsold-estimate-follow-up-template?ref=github-repo)

Examples by work type:

- [plumbing](https://quotechime.pages.dev/industries/plumber-quote-follow-up?ref=github-repo), [electrical](https://quotechime.pages.dev/industries/electrician-quote-follow-up?ref=github-repo), and [building](https://quotechime.pages.dev/industries/builder-quote-follow-up?ref=github-repo)
- [painting](https://quotechime.pages.dev/industries/painter-quote-follow-up?ref=github-repo), [roofing](https://quotechime.pages.dev/industries/roofer-quote-follow-up?ref=github-repo), and [HVAC](https://quotechime.pages.dev/industries/hvac-quote-follow-up?ref=github-repo)
- [pest control](https://quotechime.pages.dev/industries/pest-control-quote-follow-up?ref=github-repo), [tiling](https://quotechime.pages.dev/industries/tiler-quote-follow-up?ref=github-repo), and [solar installation](https://quotechime.pages.dev/industries/solar-installer-quote-follow-up?ref=github-repo)

## Why this exists

An unanswered quote does not always mean “no”. It can mean the customer missed
the email, has a question, is comparing scope, or is not ready. One generic
“just following up” message does not help distinguish those situations.

QuoteChime builds a finite four-touch rhythm:

1. confirm the quote arrived;
2. make questions easy;
3. ask for a clear decision;
4. close the loop and stop chasing.

It drafts text only. Nothing sends automatically. Review every fact and stop
when a recipient declines or asks not to be contacted.

## Use the module

```js
import { buildSequence, sequenceAsText } from './src/generator.js';

const sequence = buildSequence({
  business: 'Blue Gum Plumbing',
  customer: 'Sam',
  service: 'the bathroom tap replacement',
  reference: 'Q-1042', // optional
  amount: '1850',
  availability: 'the week starting 24 August',
  tone: 'warm',
});

console.log(sequenceAsText(sequence));
```

Open `demo/index.html` to try the module without a build step.

## Deploy your own copy

This repository is a GitHub template. Select **Use this template**, create a
public repository, then enable GitHub Pages from the `main` branch and `/`
root in **Settings → Pages**. The root `index.html` works without a build step,
server, account, or API key.

If you customise the wording, keep the finite stop condition and review every
generated fact before sending. A deployed copy still drafts text only; it does
not send messages or upload form contents.

## Embed the hosted mini generator

Resource sites can add a no-cookie mini generator with one iframe:

```html
<iframe
  src="https://quotechime.pages.dev/embed/follow-up-widget/"
  title="Free quote follow-up message generator"
  width="100%" height="620" loading="lazy"
  style="border:0;border-radius:16px;max-width:620px"
></iframe>
```

The hosted widget collects no form submissions and sends no messages. Sites
that require complete control can use this repository's module instead.

## Privacy and limits

- Runs locally in the browser.
- No account, cookies, analytics SDK, or third-party runtime dependency.
- No messages are sent by this code.
- No reply, sale, payment, or conversion outcome is guaranteed.
- Users remain responsible for consent, recipient choice, facts, timing, and
  applicable communication rules.

## Paid operating kit

The free module handles the basic four-message sequence. The A$1
[Final Follow-up Card](https://quotechime.pages.dev/products/final-follow-up-card?ref=github-repo)
adds three tones for one final-decision message and a pre-send check. The one-time A$3
[Closeout Mini Pack](https://quotechime.pages.dev/products/quote-closeout-mini-pack?ref=github-repo)
contains five final-decision scripts and a checklist. The A$7 Quick Script Pack
adds 12 scripts and a compact routine. The A$19
[QuoteChime Complete Kit](https://quotechime.pages.dev/?ref=github-repo#offers) adds 40 scenario
scripts, a quote tracker, objection matrix, call guide, and weekly pipeline
routine. All four are digital downloads, not subscriptions.

## Test

```bash
npm test
```

MIT licensed. Paid kit content is not part of this repository.
