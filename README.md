Notes during process

Found a bug, which when navigating to a specific page using url endpoints in the url bar, authentication happens but redirecting back to the page happens before authentication is finished.

I could only think of one way to fix this - a backup authentication method in an API, but one would be able to set up a proxy (such as Burp), change the data before being sent to the REST API and attack the website, or impersonated user that way.

Therefore, I've had to scrap everything, and I didn't like my designs too so they were redone too. They were initially designed for Mobile and not much thought went inot the desktop versions (I had been designing app for the last few months - I have been doing a fair bit of React Native recently).

I will be proceeding with Next, and Next Auth. It also will give good SEO; the majority will be SSR (that's why in my first attempt the majority of HTML elements were divs - SEO wasn't a thought; everything would have been behind a login page

