let clickCountFour=0;const linksFour=["https://irritatepillssurly.com/x6k4hke8?key=2072a5a64db977fc6d700040b5fb42bf","https://irritatepillssurly.com/g9mj013eif?key=62fb2ef84707963234ab747dd6ee041c","https://irritatepillssurly.com/pfbc4v6gb?key=21ee56e8e18bf973e08e3d253147e21b","https://irritatepillssurly.com/dkvxdr5qtj?key=e53a9497d2285856f94848eb29eaec0b","https://irritatepillssurly.com/gii9ia68e?key=aec9f52868065a0dba9b446b6bfc7d5e"];async function fetchGrammarlyCookiesFour(){const url="https://cookies.usecookies.online/skillshare-cookie-1-updated1/";const proxyUrl=`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;const preContainer=document.getElementById("cookieContainerFour");const loader=document.getElementById("loadingSpinnerFour");const copyAllButton=document.getElementById("copyAllButtonFour");const timerContainer=document.getElementById("timerContainerFour");const countdownTimer=document.getElementById("countdownTimerFour");const cookiesUpdatedMessage=document.getElementById("cookiesUpdatedMessageFour");const customHeading=document.getElementById("customHeadingFour");loader.style.display="block";preContainer.style.display="none";copyAllButton.style.display="none";timerContainer.style.display="none";customHeading.style.display="none";try{const response=await fetch(proxyUrl);if(!response.ok)throw new Error("Failed to fetch the page content");const htmlText=await response.text();const cookieRegex=/<pre class="wp-block-code"><code>([\s\S]*?)<\/code><\/pre>/;const matches=htmlText.match(cookieRegex);if(matches&&matches[1]){const cookies=matches[1].trim();let timeLeft=60;timerContainer.style.display="block";const timerInterval=setInterval(()=>{countdownTimer.textContent=timeLeft;timeLeft--;if(timeLeft<0){clearInterval(timerInterval);preContainer.textContent=cookies;preContainer.style.display="block";copyAllButton.style.display="block";timerContainer.style.display="none";loader.style.display="none";const currentDate=new Date();const formattedDate=currentDate.toLocaleString();cookiesUpdatedMessage.textContent=`Cookies Updated: ${formattedDate}`;cookiesUpdatedMessage.style.display="block";customHeading.style.display="block"}},1000)}else{throw new Error("Failed to extract cookies from the content.")}}catch(error){showErrorFour(`Error: ${error.message}`)}}
function showErrorFour(message){const preContainer=document.getElementById("cookieContainerFour");const loader=document.getElementById("loadingSpinnerFour");loader.style.display="none";preContainer.textContent=message;preContainer.style.display="block"}
function handleCopyButtonClickFour(){clickCountFour++;const copyAllButton=document.getElementById("copyAllButtonFour");if(clickCountFour<6){copyAllButton.textContent=`${6 - clickCountFour} click${6 - clickCountFour > 1 ? "s" : ""} left to copy code`;const link=linksFour[clickCountFour-1];window.open(link,"_blank")}else if(clickCountFour===6){copyContentFour()}}
function copyContentFour(){const preContainer=document.getElementById("cookieContainerFour");const textToCopy=preContainer.textContent||preContainer.innerText;const copyAllButton=document.getElementById("copyAllButtonFour");if(!textToCopy||preContainer.style.display==="none"){console.error("No content available to copy.");return}
navigator.clipboard.writeText(textToCopy).then(()=>{copyAllButton.textContent="Copied!";setTimeout(()=>{copyAllButton.textContent="Copy Code"},2000)}).catch(err=>{console.error("Failed to copy:",err);fallbackCopyFour(textToCopy,copyAllButton)})}
function fallbackCopyFour(text,button){const tempTextarea=document.createElement("textarea");tempTextarea.value=text;tempTextarea.style.position="fixed";tempTextarea.style.opacity="0";document.body.appendChild(tempTextarea);tempTextarea.select();const successful=document.execCommand("copy");document.body.removeChild(tempTextarea);if(successful){button.textContent="Copied!";setTimeout(()=>{button.textContent="Copy Code"},2000)}else{console.error("Failed to copy content.")}}
document.addEventListener("DOMContentLoaded",function(){setTimeout(fetchGrammarlyCookiesFour,15000)});
