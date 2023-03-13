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

Dashboard pretty much remade but I'm having the stupidest error I've ever seen in CSS - aparently 2 thirds of the same length is equal to different values. I also made a change on the fly to accodate larger messages and reduce a large piece of uneeded whitespace. I can't wait to mess around with the Web Push API and the actual fun stuff instead of this ruddy CSS.

Fixed it by redesigning the skeleton into vertical segments - I was still using horizontal segments from my previous design. Now it's very responsive except for the square cards and the desktop nav needs to be ported to smaller screen sizes. I wish CSS had an option to set width to height or otherwise - it'd make life so much easier icl.

Finished designing the product page - first time I'm actually content with my product page design; sually they aren't eye-engaging. It turned out very different to the first few designs: I was actually contemplating a design inspired by Indeed with the all the items on the left and the item-specific details on the right. Then, however, I saw a beautiful design on Dribble which had custom fonts (or maybe a flattened text on Figma, edited and exported as SVG) which led me to the current product page design, but without the custom fonts (It's not in my design system and I can't just redo the rest of my designs anymore). I did use bold for once though.

The Discover Page will just be a collection of the items available to rent - I'm not about to make a faux neural net (or an actual one for that matter) - the last time I made one I figured that the systemis only as good as the tags associated with each item. Anyway, this is why there is nothing special about the page.

I also changed the size of the picture on the mobile page to be 50% of the entire container - last time it was just slapped on. I think it would have looked nicer at 2/3s butit might not show the CTA buttons in the first 100vh which means the user would have o scroll etc etc.

Search bar with some interactivity created (usually I leave UX till last as I think it is the polishing streak and a nice way to end a project).

I also found out today that my monitors and laptop's colour calibration is wayyyy off - I looked at one of the mobile designs using Figma's mirror functionality and the accent green is not as prominent as I could see it. I will still have to go with the flow - I am not redesigning a fourth time.

Right, I'm kind of going back on myself but, I got some feedback from some designers on discord and they gave me some colours to try out. A friend of mine (afk) then rated the new colours and said "it looks official now." Looks like the green and red didn't go together. So they're getting cchanged to the suggested colours and the font inside the green needs to be bolder or larger to meet accessibillity standards. Design has been uploaded.

Discover Page has been created - right now it's just the MVP, I will mess around with sizing later.I also found that the image doesn't cover the last 10px of height which is very annoying. The row gap doesn't look the same as the column gap.

Product page is half up aswell. The skeleton and styles are always the most tedious parts but I'm almost at a point where I can start messing around with the fun things at last.

First time I've not known how to do something in CSS in a long time. I don't even know how to formulate it as a question funnily enough. I want to make an image auto height depending on the space left in the container but it keeps auto sizing larger than the container. It's how I got this perfect page by reducing the image size depending on the description size or CTA buttons if the description is smaller than them.

I still remember the Flex-Box Frogs like it were yesterday. I was laughing at how there was the options for reversing the layout order. I also kept getting it wrong funnilly enough. I had to think how would the text container size be calculated first but displayed last? If it were shown in reverse. Now I have top vertical overfill from the image, but it's much closer to what it's supposed to be now.

I did it, I was sat there just thinking, not touching it. How on earth can overflow:hidden just fix everything? Like it did way more than it should I cannot lie. I even doubled the placeholder description - works exactly as I imagined it to.

Sometimes even CSS can surprise me and keep me on my toes.

Hit Designer's Block atempting to design the last 2 pages (Organisation Page and the Profile Page). Moved onto responsiveness in the mean time. The side menu looks atrocious on smaller screens, but Imma keep going with the flow for now. Simple page responsiveness is almost completed.

I switched out the side nav bar for smaller screens liek laptops etc but the design still seems to small so I think i will have to allow for scrolling but that isn't what I wanted.

Designs completed for the 2 pages - they aren't great. The best thing I've done today is changing the green accent button to a more aesthetically pleasing button with potential for animations.

Been a slow couple of days - design for creating item and updating item has been created and work has been started on them. The last few designs are likely to be scrapped sooner or later.

Lost all motivation, looked at my designs yesterday and thought to myself how chavvy the looked. Leaned into a less-professional theme (idea not theme, that already made it unprofessional) of mini-games and minimalist graphic design. As a bonus it will be easy to make responsive

I had a throwback yesterday to Google Gravity, ended up using a physics engine and some 2d geometries to liven up the login pages. Dashboard created, mostly everything is responsive too. Even the nav works for mobile, but that needs work, I'm not leaving it like that.

HTML Canvas looks sooooo grotty by the way, it's horrific
