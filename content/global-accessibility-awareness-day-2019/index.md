---
title: Global Accessibility Awareness Day 2019
pubDate: '2019-05-18T03:00:00Z'
displayDate: '2019-05-17'
image: '20190516_191923.jpg'
summary: 'Yesterday was Global Accessibility Awareness Day and I was honored to give my first-ever, accessibility-related presentation at the San Diego Accessibility & Inclusive Design Meetup Group. I shared summaries of two sessions I attended at a recent conference.'
tags: ['presentations']
---

Yesterday was Global Accessibility Awareness Day and I was honored to give my first-ever, accessibility-related presentation at the [San Diego Accessibility & Inclusive Design Meetup Group](https://www.meetup.com/a11ySD/). I shared summaries of two sessions I attended back in March at the Cal State Northridge Assistive Technologies Conference.

On the momentous occasion of my first presentation I figured the time has finally come for me to add this blog to my humble website. I hope to do more presentations in the future and want to have an easy way of sharing them so here goes...

[Links from my presentation](#links-from-my-presentation)

## The WebAIM Million

In February this year, WebAIM.org, a non-profit based at the University of Utah, performed automated testing of one million website homepages and the results of their testing were shocking. What really grabbed me from this report: 97.8% of home pages had automatically detectable errors! There was an average of nearly 60 distinct errors detected per page. Most of these were low contrast text, missing “alt” tags, empty links, and missing form labels and were found on most home pages.

One easy way to judge if any thought has been given to accessibility on a page is to see if it has a “skip” link that bypasses navigation and other peripheral content on the page and takes the focus directly to the main content. Sadly, only 9.6% of the sites had a link like this. Of those that do, **14.3%** of those links were inaccessible or inoperable!!

There's so much great data in the report, especially the information grouped by:

* Top Level Domains
* CMS platforms
* JavaScript frameworks
* JavaScript libraries
* web frameworks
* Advertising systems

...but there was one point I really wanted to mention: 74.1% of home pages had a valid HTML5 doctype. Pages with a valid HTML5 doctype had **significantly more** errors than those with other doctypes. Now, HTML5 came out in late 2014 so this tells me that sites built relatively recently, nearly 3/4 of the million sites, are significantly worse than older pages or pages with broken or missing doctypes! Things are getting worse and not better.

To illustrate this point I think Marcy Sutton gave a brilliant presentation at the conference where she showed the results of an automatic test of the Spacejam site which still exists in its original code from 1996 and the recently-created, intentionally retro-looking Captain Marvel site and of course found that the newer site had a lot more errors.

![The Space Jam website home page showing the Deque aXe tool detecting 11 errors and the Captain Marvel website home page showing the Deque aXe tool detecting 58 errors](./retro-sites.jpg "Space Jam home page from 1996 compared to the recently created Captain Marvel home page")

## ADA-Related Web Accessibility Lawsuits

Switching gears from web statistics, I also found that the stats on web-related ADA lawsuits that the folks at Usablenet.com presented were interesting. They found that in 2017 there were 814 lawsuits filed. That number grew to 2285 in 2018, an increase of 181%!

In the first sixteen years of this millennium there were only 222 lawsuits filed. By 2016 there were more than that number filed just that year. By last year there were more than **ten times** that number! Obviously, the pattern indicates that we should expect the numbers to continue to increase significantly in 2019.

They mentioned that almost all of these lawsuits get settled out-of-court. They also said that the suits that do go to trial tend to not go well for the defendant.

The vast majority of these lawsuits were filed in New York and Florida, but the numbers filed outside those states are trending upward and 10% of the companies sued are headquartered in California.

Part of the problem has been that in the past the Federal Government had no clearly-defined set of rules to spell out what exactly ADA “compliance” means legally. In 2010 the Department of Justice started a process for making these rules for federal, state and local governments. In 2017 the DOJ killed this process. Now instead of having clearly defined rules to follow, businesses have to contend with a constantly changing patchwork of court decisions for guidance. It’s Usablenet’s contention that this is just resulting in growing confusion making it harder on businesses who are scrambling to become accessible, especially given the growing number of court cases.

The report’s numbers only show federal ADA court cases, not state court cases. It’s thought that in California the state system was previously seen as being more friendly to plaintiffs, but with the Ninth Circuit Court’s ruling against Domino’s Pizza earlier this year it’s thought that California federal courts will now be seen as a more fruitful place to file.

On a side note, California  Section 11546.7 requires that state agencies be WCAG 2.0 Level AA and Section 508 compliant by 1 July this year. I talked to some folks who work at a couple of these agencies and they’re really scrambling right now.

## Conclusion

### The problem is enormous...

The WebAIM million report gives a dire view of the current state of the web and we can infer from it that the development world is on a path of making things worse and not better.

### ...and the pressure to address it is growing rapidly

The Usablenet report shows us that we can expect thousands of lawsuits to be filed this year. We can only hope that this will provide the motivation for businesses to look at their accessibility, but because it’s rooted in fear and not empathy I think we can expect they’ll to do the bare minimum, if anything at all.

### But there's hope

Any improvement is an improvement and a step in the right direction. There’s also a lot of support from leaders in the development community. Folks like [Jeffrey Zeldman<span class="sr-only"> on Twitter</span>](https://twitter.com/zeldman), [Sarah Drasner](https://twitter.com/sarah_edo "on Twitter"), [Jeremy Keith](https://twitter.com/adactio "on Twitter"), [Eric Meyer](https://twitter.com/meyerweb "on Twitter"), each of whom have hundreds of thousands of followers on Twitter. They are constantly sharing helpful accessibility information on social media and through their presentations at events. My hope is that their influence along with so many other influencers will help change the development culture.

Meanwhile, organizations like the [IAAP](https://twitter.com/IAAPOrg "on Twitter") and [WebAIM](https://twitter.com/WebAIM "on Twitter"), companies like [Deque](https://twitter.com/dequesystems "on Twitter") and [Blink](https://twitter.com/BlinkUX "on Twitter") (co-sponsors of the Meetup) and [Usablenet](https://twitter.com/Usablenet "on Twitter") are all doing great work on the front lines helping to evaluate, mitigate and repair the web.


I hope my presentation opened some eyes and I hope it motivated everyone to spread the word that anyone who causes content to go up on the web is responsible for making it accessible.

## Links from my presentation

[Google Slides from the presentation](https://dpc.llc/numbers)

[The WebAIM Million Report](https://webaim.org/projects/million)

[Usablenet.com's ADA Lawsuit Report](https://blog.usablenet.com/2018-ada-web-accessibility-lawsuit-recap-report)

[DOJ Withdraws ADA Compliance For Website Access Regulations](https://cielo24.com/2018/01/doj-withdraws-ada-compliance-for-website-access-regulations/)

[California Companies Likely to See More ADA Website Accessibility Suits in 2019](https://www.law.com/corpcounsel/2019/02/06/california-companies-likely-to-see-more-ada-website-accessibility-suits-in-2019/)
