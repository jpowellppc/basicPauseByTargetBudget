# basicPauseByTargetBudget
Pause all active campaigns in a Google Ads account when a certain budget is reached.

Change all **bold** snippets as directed

Line 10 - Change **0** to your target budget
> var targetBudget = **0**;

Line 19 - Change **20** to whatever amount you want to be "under" as to not overspend (since scripts run hourly).
> safeBudget = targetBudget - **20**;

Line 35 - Add correct emails
> MailApp.sendEmail('**changeMe@example.com**', AdWordsApp.currentAccount().getName() + ' monthly budget met, all campaigns paused.', 'See subject line.');

Set to run hourly
