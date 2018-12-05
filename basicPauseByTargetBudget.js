/* 
*	Spreadsheet Budget Finder
*	Author: Joseph Powell
*	Purpose: Basic Google Ads target budget campaign pausing script
*/


function main() {
  
  var targetBudget = 'setMe';	// Change to target budget
  var MTDCost;
  var safeBudget;
  
  var campaignIterator;
  var campaignsPaused = false;
  
  // Get MTD spend & target budget
  MTDCost = getMTDCost();
  safeBudget = targetBudget - 20; // Change to amount "under" since script runs hourly
  
  // Pause if budget exceeds safe budget
  
  if(MTDCost >= safeBudget) {
    campaignIterator = AdWordsApp.campaigns().get();
    
    while(campaignIterator.hasNext()) {
      var currentCampaign = campaignIterator.next();
      if(!currentCampaign.isPaused()) {
        currentCampaign.pause();
        campaignsPaused = true;
      }
    } 
  } // end if
  if(campaignsPaused == true) {
    MailApp.sendEmail('changeMe@example.com', AdWordsApp.currentAccount().getName() + ' monthly budget met, all campaigns paused.', 'See subject line.');
  }
}

// -------------------------------------------------------------
function getMTDCost () {
  var campaignIterator = AdWordsApp.campaigns().get();
  var MTDCost = 0;
  
  while(campaignIterator.hasNext()) {
    MTDCost += campaignIterator.next().getStatsFor("THIS_MONTH").getCost();
  }
  return MTDCost;
} // end getMTDCost