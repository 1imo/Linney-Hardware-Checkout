Notes during process

Found a bug, which when navigating to a specific page using url endpoints in the url bar, authentication happens but redirecting back to the page happens before authentication is finished.

I could only think of one way to fix this - a backup authentication method in an API, but one would be able to set up a proxy (such as Burp), change the data before being sent to the REST API and attack the website, or impersonated user that way.

Therefore, I've had to scrap everything, and I didn't like my designs too so they were redone too. They were initially designed for Mobile and not much thought went inot the desktop versions (I had been designing app for the last few months - I have been doing a fair bit of React Native recently).

I will be proceeding with Next, and Next Auth. It also will give good SEO; the majority will be SSR (that's why in my first attempt the majority of HTML elements were divs - SEO wasn't a thought; everything would have been behind a login page

Instead of using a relational db, I've decided to continue using Firestore but with references to documents, not unlike the way relational dbs work. I feel that this is the more modern, and suitable way for this exact project - it will never need to accomodate 1000000 users.

I wanted to have User data stored in sessions,
however, I can never seem to get them right (it's why I didn't go with a robust library like PassportJs). Instead had to do a simple API call which ended up taking 20 minutes to work with some session data for some reason.

Rough User Dashboard hewed out - I hate this stage icl - it always looks so ugly and unsightly. Reminds me of the meme "we have __ at home," (in comparison to the design). Scroll bars need to be done, as does the data fetching and smaller screen responsiveness needs a lot of work.

Reverted back to design 2.0 - the shown design, but without the picture, glassmorphic elements. and a darker interface, which will load much faster (even optimising that huge image still left a slow page load, and assembly time).

I wasn't happy with the public-facing infrastructure: to say it was an after-thought was an understatement. Now it's been redesigned, and the code has been updated. Now it looks like it's been made in the last couple of years.

Onboarding will be updated next, and the dash needs to be tweaked a little to conform to the overall theme

Redesigned the dashboard, but I'm not too happy with the mobile version, however, I need to workon the project so I will have to just use it. I'm happy with the visual heirarchy but I think I went overboard with shadows, especially considering that flat design is making a nice comeback.

Dashboard pretty much remade but I'm having the stupidest error I've ever seen in CSS - aparently 2 thirds of the same length is equal to different values. I also made a change on the fly to accodate larger messages and reduce a large piece of uneeded whitespace. I can't wait to mess around with the Web Push API and the actual fun stuff instead of this ruddy CSS
