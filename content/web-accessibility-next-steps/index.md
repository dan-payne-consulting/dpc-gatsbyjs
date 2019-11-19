---
title: 'Web Accessibility: Next Steps'
pubDate: '2019-09-18T03:00:00Z'
displayDate: '2019-09-18'
#image: '20190516_191923.jpg'
summary: 'Follow-up to article "Web Accessibility: An Introduction," this is where the rubber meets the road: website accessibility audits, deciding what to fix and how to prioritize.'
tags: ['presentations']
---

As I mentioned in my <a href="/web-accessibility-an-introduction">previous article</a>, not everything that turns up in a web accessibility audit is necessarily a problem needing to be fixed. Likewise, not everything that needs to be fixed will turn up in an audit. There are a number of factors to consider when identifying "failures," deciding what to fix, and how to prioritize those fixes.

## Audits

A website accessibility audit includes both automated and manual evaluation to identify any barriers that would prevent people with disabilities from using the site as a person without disabilities would. Audits are typically performed by accessibility specialists who have extensive experience and training in what to look for and why. The result of the audit is typically a report including a list of findings, references to applicable guidance on why the finding is a barrier, and recommendations on the finding's severity and how to fix it. 

Automated tools are really helpful for identifying accessibility problems, but the human aspect of evaluation can never be fully automated. Some problems can only be identified by manual evaluation. Here are just a few:

* Logical tab/reading order: Is the content presented in such a way that any user can consume it in an order that makes sense?
* Alternative text and descriptions for images: Automated testing can determine if text descriptions exist, but do those descriptions make sense and accurately portray the author's intent for using the image in context?
* Screen readers process content appropriately: Sometimes just listening to the different ways that different screen readers process the same content can bring out flaws in the way the content is organized or coded.
* No keyboard traps: Will a keyboard user get stuck in a portion of the page and not be able to navigate away from it?

The audit report then becomes the starting point **suggesting** what needs to be fixed. On the other hand, before we can start making **decisions** about what to fix and in what order, we need to understand what we are legally obligated to fix.

## Legal Considerations

There are none! Well, sort of. In the United States there is (at the time of this writing) no specific, black-letter law or set of rules that define the exact requirements for a website to be declared “legally accessible.” For a number of years the Department of Justice was working on defining some rules, but that process was recently halted.

The Americans with Disabilities Act (ADA) mandates that public accommodation must be provided to disabled persons to allow for the "full and equal enjoyment" of products and services, but again there is nothing specifically defined in it to cover websites and what exactly constitutes compliance or noncompliance. We’re left with a hodge-podge of court rulings that establish a loose precedent, but again nothing a business owner can turn to and say “Ah ha! I can prove that I’m compliant with this requirement.”

We have WCAG which stands for Web Content Accessibility Guidelines, but, you guessed it, they’re guidelines. No black-letter law to be found here either. They’re a set of “success criteria” that establish how certain aspects of a website might cause people with disabilities to have a problem using a feature. They’re a really great start toward defining requirements (with awesome suggestions on how to fix them), but they’re not requirements under law. 

## Deciding What to Fix

So without specific requirements to help with compliance decisions, it becomes a team effort to determine what will be fixed and when. Accessibility specialists can make recommendations, but ultimately all stakeholders should be involved in the process: marketers, designers, product managers, developers, executives, project managers, copy writers, anyone involved in content being generated for the website. Add to the mix that there are some situations where a technical "failure" may not be seen as needing intervention:

* **Close call**: E.g., a particular foreground/background color contrast combination may technically fail, but the difference may be so close as to not be realistically detectable by the human eye. 
* **Established brand aesthetic**: A change might make an impact on a long-held and well-known brand identity. Given that accessibility should always be of primary concern, is the "failure" significant enough versus the potential impact to brand identity? (This is a very touchy subject and should be handled with great care).
* **Least-worst option**: Sometimes all your options are bad and even the best option is still automatically detected as a "failure."

Despite some edge-cases like this, in reality almost everything noted in an audit will need to be addressed in some way. One really great way to get help with decision making is to include people with disabilities, especially people who would be specifically impacted by the particular issues you're dealing with. Local advocacy groups may be able to help put you in touch with organizations or individuals who can be hired for their input. Really, nothing beats having a person who lives the experience provide their expert feedback. 

## Prioritization

Again, convening all stakeholders is important in prioritizing the list. There are several factors to consider, but primarily the impact on the user should come first. Issues can be categorized as presenting:

* **A complete barrier**: The issue will prevent some content or process from being usable at all, leading to peak frustration.
* **A serious barrier**: Some content or process is partially unusable or requires serious work arounds to make it usable, resulting in significant frustration.
* **Some barrier**: The issue makes using some content or process difficult, but not impossible, leading to some frustration.
* **An inconvenience**:  The issue doesn't significantly impact the user journey but may be mildly frustrating or annoying.

Within the context of user impacts, some other items to consider when prioritizing include:

* **Difficulty**: In assessing the issues, try to determine how relatively easy-to-hard remediation will be and try to organize them to fix as many items as possible as quickly as possible.
* **Business priority**: Is the issue blocking a core business process, such as checkout, or is it peripheral, such as a newsletter signup?
* **Volume**: If you find that there are a large number of instances of a particular problem, you may find it easier to address them all-at-once in a hyper-focus of resources.
* **Intensity**: Issues occurring on high-volume pages such as the home page or in global components like a header or footer in use throughout the site should be addressed ahead of issues in lesser-viewed content areas.

## Beyond the Audit

Fixing existing issues is just the first step in the continuous process of ensuring your site is and continues to be accessible. A commitment to accessibility includes the long-term implementation of processes within your design and development workflow that will ensure accessibility is considered as early and often as possible in all decisions going forward. There are many tools available that help automate the testing process in the development phase and developers should be trained in accessibility to help them make good decisions. I'm sure you'll find the investment more than pays for itself.

## Conclusion

Making your website accessible can be daunting and intimidating and a little scary, but with the help of an accessibility specialist the process can be made orderly and logical and with time and a commitment to continuous improvement will make your site more accessible to more of your customers.
