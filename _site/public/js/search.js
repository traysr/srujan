// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "Traditional Art and Computer Graphics",
  author: null,
  layout: "post",
  content: "I have interest in both art and computer graphics, I find it surprising that the two fields follow quite separate paths even though they have a lot in common.\n\nComputer Graphics theory seems to rediscover a lot of concepts and learnings that were already known by the great masters. On the other hand I feel, the classical atelier method could benefit from using 3d modeling applications as tools to assist learning the form and affect of light on it. 3d Computer Graphics provide an easier way to move arrange 3d objects and lights in different ways to learn different combinations of light and shade.\n\nPart of the difference lies in the fact that computer graphics community is made up of two very separate roles for individuals. The Application Developers or Programmers, who are well trained in 3D Solid &amp; Surface Geometry concepts, and the 3d artists, who are trained in using the applications to produce stills images and animations. On the other hand, in traditional art, both of these roles are combined into a single person, the painter.\n\nHere is a list of observations. They are all separate bullet points that I am unable to put together in a good way\n\n\n  Painting is considered art while graphics is considered science. Although I believe both are somewhere in the middle.\n  The basic principles of light are introduced in more approximate and practical ways in art books (in order to shade by hand), while they are taught as a collection of separate physical formulas (that can be written as mathematical equations). Although these separate ways are good for task at hand, I feel each of these books could borrow from each other. New art books could have a page devoted to three types of light effects (ambient, diffuse and specular), while the graphics books could devote a page on how the three effects would look in a combined and way, like the classical sphere made up of highlight/midtones/shadow/reflected light and cast shadow.\n  In recent years, there is a lot of discussion in computer graphics community about a “newly” discovered concept called subsurface scattering that would make the rendering of skin and marble more realistic !!\nI believe this concept of light scattering below the surface was well known to great masters as can be observed in their renditions of skin and marble in paintings. If only the graphics scientists would have read a bit about these and the methods used to render these effects they could have benefited a lot earlier. (I think it is produced by painting a lot of thin layers of paint one above another, that can in a way ‘trap’ the light and scatter it),\n  I feel the online communities and discussions go totally separate ways in both the communities. When I visit the graphics communities I see, that the artists trying to learn anatomy are searching for information, and happy with some cheap books/dvds that are not accurate or well drawn.\nThere are many such instances, which I could crystallize to put in words.. I will keep adding them as I become more aware…\n\n\nFinally, let me confess that while I am interested in both, I am more affectionate towards painting than graphics. I consider that as of today, the organic forms (portraits/figures/landscapes) produced by hand are much more accurate and also pleasing to eye than the ones produced using graphics applications. \nYet I do feel that some use of graphics applications as tools for learning (I am not talking about producing art on computer) could help in reducing the learning time for the concepts that are learned by observation alone.\n\nI would like to give some pointers for some freely available (open-source) graphics programs that I found quite interesting.\n\n\n  Blender is a modeling software. I warn that it has a steep learning curve, but I believe it won’t be that much of a problem for trying out a composition of basic shapes and lighting.\n  Makehuman is a program for modeling 3d humanoid characters. I warn that the quality of models produced is far below the standards found in classical paintings. However, this is the best way of producing some forms and posing them the way you want quickly. While this cannot replace live models, it does give us an easy way of trying different poses quickly. It could serve as preliminary homework, before actual live model sessions, and probably an easy way to decide on a new pose that we expect from the model.\n  Inkscape is a 2D drawing program. The advantage I see here is the ability to ‘modify’ the lines in our line drawing !!. We normally draw lines and erase and draw new ones, if we are not satisfied with curvature. However, if we have the ability to modify the curvature interactively, it could serve as a good tool for learning the aspects of line shapes and curvatures.\n\n",
  id: 0
});
index.addDoc({
  title: "App Ideas",
  author: null,
  layout: "post",
  content: "The iPad will be released to the public in a few days and that will be followed by the first batch of new applications. I am sure some of the ideas that I present are already in works, either at Apple or at Apple developers. Here are some predictions.\n\nPresentations without the Slide format\nSlides have been used for presentations for a long time. Earlier with overhead projectors and now with presentation applications like PowerPoint and Keynote. Apple has made a very nice iPad app for Keynote. However, the app continues to use the slide format, although the device has much more potential to create and display content without using slides. An iPad connected to a projector can act like the CNN’s Magic Wall. I imagine a presenter working on his/her iPad with multi-touch, stretching, squeezing, flipping, sliding diagram objects with both hands and that being presented to audience on a projector. The iPad is perfect for both creating and presenting such presentations. The slides can still be used as launchpad for separate chunks of presentation material. The animations today are on the slides, but they should actually be away from the slides. Slides should be used only for text based content.\n\nTV Remote Pad\nWhile there is nice little Apple TV remote application for iPhone, I am sure there will be one in the making for iPad. However, the iPad has more potential to be used as the touch-screen TV accessory. I can imagine an animated live TV guide running on iPad that you can use not just to check the schedules but also to change the channels. You could ‘preview’ channels before changing channels to avoid those moments when you are flipping channels in front of whole family and some program pops up that you don’t want everybody to watch. You could use the iPad for browsing the movies, TV Shows, or music to buy on apple TV, but integrated in such as way that the actual download happens on Apple TV. It could be used as an additional speaker for TV. You can even keep the TV on mute while hearing stuff on the iPad, either at low volume or using head-phones. To summarize, the iPad can act as a touch screen TV companiion accessory, similar to regular remote, but much better than that.\n\nThe App Sheets\nApple has made the Numbers app for iPad and this single app has a potential for replacing a lot of apps. As we know, the Numbers is far better in interface than Excel. The main strong point in its interface is the ability to have multiple fixed sized tables on a single sheet. What this means, is that we no longer have to worry about the weird formatting that we get when we create multiple disconnected tables on a traditional spreadsheet like excel. This feature also means that we could potentially create app-like beautiful interfaces on Numbers sheets. I see the potential of having various converters, simple finances, to-do lists, time-tables etc on the numbers sheets that could replace a lot of apps, without losing the elegance and style of real apps. This will be somewhat like the iphone web-apps, but for the numerical or tabular data. They will also be much simpler to create than web-apps and also just like web-apps, won’t need any app-store approval. I don’t know at this point, who Numbers handles browsing and editing of cells. Does tapping on any cell automatically puts in edit mode with a keyboard presented ? If there is some way of stopping this for certain cells, (most of the static and decorative table cells) it would be very helpful.\n",
  id: 1
});
index.addDoc({
  title: "The Dinner Plate We Never Had",
  author: null,
  layout: "post",
  content: "This article was written before tablets were accepted as useful devices. It seems dated now. Read it to get a glimpse of pre-tablet days.\n\nWhen iPad was unveiled on Jan 27th I was following the live blogging of the event and a thought struck me. I felt that though it is a new device, it fulfills a very old need. The need that we had as early as the time when desktop computers were invented. I felt like we were living in a weird world where up until now nobody understood the basic need of such a device and nobody invented it. The world was as weird as the world where dinner plate was not invented.\n\nImagine this world without dinnerware. The people in this world do cook and eat food just like us and they do have very elaborate cuisine with lot of variety. They have well equipped kitchens and dining rooms, but till a few years back had no dinnerware. So what do they use for eating ? They simply use the cookware. Pots and pans are used for cooking and also for eating the food. It is not that these people are of any primitive kind. They have state of the art multipurpose cookware that can help make a wide variety of foods. “Why do we need a different utensil to eat food ?”, some of them say, as they feel the pots and pans are perfect for eating.\n\nThis world is not without problems. There are many people who are not cook-savvy and still need to eat food. They don’t know how to properly handle the cookware and get burnt while touching the hot surfaces. They don’t know the proper way of using spoons and forks in the teflon coated pans and sometimes accidentally scratch them. But who cares about the less cook-savvy people anyways. They can ruin their cookware as they wish or maybe use wooden spoons. Besides, the cookware is so cheap they can replace it every few months.\n\nIt is not true that these guys had no items specially made for eating food rather than making food. They did have cups and glasses, but there was no substitute for a nice frying pan if you want to eat your main course. It was about this time when a small plate, better known as saucer was invented. The saucer was a huge success. People liked the idea that it was flat and attractive and easy to clean. The less cook-savvy didn’t have to worry about spoiling the coating and there was no need of a proper way of using the forks. They could even eat the main course in it if they wish. They just had to eat small portions at a time.\n\nSome cookware makers did understand the need of a cheap pan that was more suited for eating purpose. They made a small plastic pan called net-pan. The net-pan was not really suitable for eating as it had the handle, but the makers thought that just by reducing the size and making it cheap, a fry-pan could be used for eating and maybe for some light cooking. But then some weird guy thought that the net-pans are just a piece of junk and he came up with an idea of a Dinner Plate. He said the dinner plate fits between a saucer and a pan. Immediately, some started thinking it is a failed product. They said : “It is neither a saucer, nor a pan. What is the use of such an expensive item when you could not make an omelet in it ?”, while others thought “It is just a large saucer”. Many food and dining critiques are still contemplating the real use of this new object.\n\nIf you haven’t noticed, we have been living in such a weird world. Just replace the pots and pans with desktops and laptops and the saucer and dinner plate with smart-phone and iPad. We did have sufficient variety of computers to produce data and content, but had very few options to consume them, and among them was missing a device for large scale consumption of data.\n\nTomorrow, many people will get their first iPads (I am getting one at the end of this month). But it is quite possible that in a few months, the questions “Do we really need an iPad ?” might sound as absurd as “Do we really need a dinner plate ?”\n",
  id: 2
});
index.addDoc({
  title: "Portraits",
  author: null,
  layout: "post",
  content: "Portraits I recently drew\n\n\n\n\n",
  id: 3
});
index.addDoc({
  title: "Tactilis",
  author: null,
  layout: "post",
  content: "My iPad app, Tactilis is now on app store. Wanted to write about the making of the app. There is lot to write, but I will give a brief intro here about the tactilis app philosophy. Would like to go in detail later.\n\nHere are a few concepts that were in my mind during the development of app.\n\nPower of non-editable content\nOne of the basic things that a computer brings to us is the editable content. The power of using a text editor is being able to edit text. The power in a vector editor is to be able to change attributes of your shapes. These features are mandatory for creating content that you may wish to edit in future. However, there are a few instances where our main focus is on adding the content rather than editing it. A classic example is taking notes, doodling or chalking out your thoughts. When thoughts are flowing out of our mind they do not come out as ASCII or Unicode text, or as line segments or bezier curves. They could come in any arbitrary mixture from the literal and visual part of the brain. Capturing these thoughts through keyboard input and word processor commands slows them down a bit. At this very moment while writing this post I am wondering about adding a star somewhere or quickly underlining something. To do any of these tasks you have to pause your thoughts a bit and divert your attention to toolbar or think about the keyboard shortcuts. Apart from this there are many other things like mathematical equations, scientific formulae or just the quick diagrams that cannot be as easily created while using the computer. In these instances, a traditional pen and paper is still preferred.\n\nTactilis was an attempt to give iPad the same power as pen and paper while adding other features like the ability to mail instantly which would not be easily possible with traditional pen and paper.\n\nNatural gestures\nWe are all impressed by the ‘Minority Report’ interface of hand gestures. One of the basic reason we like it is that the interface is similar to our natural way of communicating. When we talk to a person we do certain hand gestures. We are all aware of the power of ten fingers and two hands. However when using a computer with a mouse we lose nine fingers and a hand. All our power of communicating is reduced to one hand and a finger. All vector applications were created in the age of mouse and so that bias is being carried over. Most of the recent vector apps on iPad use single touch for the main content entry. With the advent of multitouch this area is open to lot of possibilities. The virtual ruler and compass in tactilis is my first basic attempt at using multitouch to define vector content. Of course, tactilis is not a vector app, but there us no reason why those gestures cannot be used in a vector app.\n\nHere is a short demo\n\nhttps://www.youtube.com/watch?v=7hR2ZQ1fjVo\n",
  id: 4
});
index.addDoc({
  title: "Smart books",
  author: null,
  layout: "post",
  content: "Update: The article was written before iBooks 2 was released. Many things I wish here are already available in iBooks 2\n\nWith the advent of iPad, many people are finding a comfortable way for reading e-books. There are many good apps for the books, such as Kindle, B&amp;N reader and Apple’s own iBooks. These apps present content in nice, readable fonts, have great page flip animations and bookmark and markup tools. However I am not very impressed by them as they seem to ignore the processing power of the computer sitting below their virtually rendered page. The current state of apps is sufficient for fiction books, but I believe they could do much more for reference books, and could possibly give a much better user-exeperience than reading wikipedia or traditional reference books. Let me explain how.\n\nMost of the information available on the internet as we know is in a non-linear format. More precisely it is a network of information with each piece pointing to each other through hyperlinks. All the pieces of information are also searchable, either by global search engines such as google, or local searches within a website, like the wikipedia search. This type of format has value of being quickly accessible and easy to navigate. However, there is another format that we are more used to, and that is the linear format of books. I believe the linear format has its own value, and so a hybrid format, where non-linear information can be mapped into a linear format quickly for reading purpose, is likely going to be much more useful than the linear and non-linear format themselves. An ideal app for reference book should be able to transform information according to user preference and present it back in linear format – something like re-arranging the pages – because I believe, finally the linear format is more comfortable for long reading. I will explain this app with an example of a reference book on art-history.\n\nA typical art-history book, contains a database of information arranged in linear fashion for simplicity. Typically, the art-movements form the larger sections of the book and are arranged chronologically. Each section has a list of artists arranged either by their importance, or alphabetically. Each artist’s section contains his/her biography and pictures of his/her artwork. I do enjoy reading these books in the order that they are presented. However, many times, I wish I could change the order. Sometimes I am interested in going backwards from recent artists to more ancient. Sometimes I just prefer a random order. Sometimes I prefer artists in order of their importance globally (not necessary in their art-movements). Sometimes I would just prefer seeing all the paintings at a time in the order of their importance. Another aspect that I always imagine would be helpful, would be to see all the paintings set on a same page with their image dimensions proportional to their real dimensions, so that one can have a better idea about how the artworks relate to each other in size. I am comfortable with reading dimensions of paintings in both metric as well as english system, but some might prefer one system over another.\n\nI believe all of the above can be achieved on a tablet. It won’t take much time for a tablet to rearrange the chapters and still maintain a good layout (take Flipboard as an example, for how a good layout can be created with dynamic content). Today, there are a few apps on iPad about art-history, but they present data in a fixed format. The good art-history app should present it as a book, but allow the user to rearrange the pages according to his/her preference. In-fact there is no need for a separate app for each reference book. I believe all types of reference books share some formating and layout principles. It would be more better if there is a single reference books app, that can download these smart-books on demand. Each smart-book should have its own content and code to reformat it according to user choice. The programming can be done in javascript for example, which can drive the page layout. Javascript can possibly layout the native user-interface elements and not just the web elements, as is seen here.\n",
  id: 5
});
index.addDoc({
  title: "Smart textbooks",
  author: null,
  layout: "post",
  content: "Update: The article was written before iBooks 2 was released. Many things I wish here are already available in iBooks 2\n\nContinuing my discussion on Smart books for reference books on iPad, here is a possible user experience for Smart-textbooks on iPad.\n\nTextbooks on iPad, or any other tablet should not simply copy the current user experience of traditional textbooks. If they can work around the limitations of traditional textbooks, they would be much more valuable.\n\nA textbook, typically contains two main elements: Text and graphics. The graphics comes in wide variety of types such as figures, diagrams, images, charts, maps etc. The static graphics in a text book is merely a limitation of traditional media. The learning experience of text and graphics is usually enhanced by a teacher/professor who uses everything from hand-gestures, teaching-aids, experiments, slides, videos etc to convey the concepts to the students. It is at this point that smart-textbooks could become a valuable teaching/learning aid and go beyond the role of traditional textbooks.\n\nHere are some thoughts:\n\nImage sequences : It is quite often in the process of learning, that we are interested in a sequence of steps in which an idea is developed. This could be step by step derivation of a mathematical formula or a sequence of figures illustrating a dynamic concept (caterpillar morphing into a butterfly for example). Most of the times this is illustrated using sequence of images. A teacher usually works out a formula or image sequence on blackboard. An iPad could be a good device to show this image sequence as an ‘animation’ and could provide a more clearer understanding of how the images are transforming in the sequence, since the new image will be animated in same position as original. This part is very difficult to illustrate using an image sequence in traditional textbook and carries the limitation of the number of images in a sequence which is kept low to occupy less space.\n\nParameter dependency : There are many times we need to illustrate how certain parameters depend on each other (for example, the volume, pressure and temperature of a gas). This type of interdependency can be better explained by letting the student ‘play’ with the parameters. This could be done in simple way by providing sliders for each parameter that change when one of the parameter is changed, or it could be done in a more detailed and elegant way by showing an interactive figure where the user visually sees changes in values. (For example, a piston that the student can interact with to see the change in pressure or temperature that can be indicated by color/opacity of the gas)\n\nvideo clips : Short video clips of either the real world events, or a graphics illustration of events, are very helpful while learning events or phenomenon. This is not a new concept, and is already used as a teaching aid. However, the videos embedded inside a textbook would be more useful than the ones shown outside of a textbook. The same goes for audio. There are certain places where audio is absolutely necessary (music theory for example), while there are other places where audio can be an additional aid while learning a visual change that the student sees in the tools explained earlier (image sequences, parameter dependency)\n\nMaps over time : Maps provide a very good aid when learning different events in history. However, many times, the map itself is changing as the events unfold (map of german occupation during WWII for example). Typically this is shown using sequence of maps. The map sequences have same limitations as image sequences. There are only a limited number of maps, at a limited amount of detail that can be shown in a textbook. However, if the map can be animated over time using a slider and can be zoomed/panned similar to google-maps, we should be able to fit a larger detail and more sequences in a given time.\n\nSmooth zooming : The smooth tile-based zooming that we see in case of google maps need not be limited to maps. This type of nearly infinite zooming can help concepts like moving from a tissue to a nucleus of a cell in a smooth fashion, or for zooming out from earth level to a galaxy level. The smooth zoom is an important visual aid, and it will be more useful if it is interactive, as opposed to a video.\n\nExperiments : Lab simulations could provide a very good aid during classroom learning. Although nothing can replace a real experience gained in a lab, the simulations could be a good aid for certain experiments that cannot be performed because either they are too dangerous or are impossible due to some logistical constraints. A dissection of a frog for example, can be simulated in a very nice fashion with the multi-touch iPad. Similarly, there are a number of chemistry and physics experiments that I think can be simulated very well on iPad.\n\nContinuity between content : One of the constraint of textbook is that it is divided by grades. However, the knowledge gained in different grades is a continues process and cannot be divided into physical sections. While we might expect a student to be confident about the knowledge gained in earlier grades, it doesn’t practically happen. I have found myself, scrambling to find information in earlier textbooks that I have gotten rid of. Typically a smart-textbook should be a single textbook spanning across multiple grades, giving the opportunity for student to look behind or peek ahead and not limited to his grade. Having a continues textbook also gives the flexibility to a school to decide what is the demarcation for a particular grade.\n\nIn-line answers : There are other simple enhancements that can be done to a textbook and are somewhat related to my earlier article about smart books. While there is not much scope for re-arrangement of content since the content follows a fixed linear path, it could be helpful to do things like hiding all the exercises for smooth reading, or provide the answers to exercises in-line with the questions when requested, so that one doesn’t have to peek into the back of the book for answers when one is really interested in seeing the answers. Simple objective tests that can test your knowledge and give instant results could be another learning aid while preparing for the exams. These aids become more valuable when embedded inside a textbook, rather than as a separate activity.\n\nVideo out : The video-out through a VGA-adapter for the ipad can serve as a very good teaching tool if the textbook apps can show content on the separate screen (typically a projector). This can greatly enhance the experience of image-sequences, videos, experiment simulations etc described above.\n",
  id: 6
});
index.addDoc({
  title: "Fresh Start With Jekyll",
  author: null,
  layout: "post",
  content: "I discovered Jekyll a few days ago, and it has been the best experience for blogging and website creation so far.\n\nI moved from Blogger to Wordpress to have more control over the layout of my website. At the time (around 2005) it seemed quite natural to use a blogging platform for website creation. The pros were doing it, and there seemed nothing wrong in it. I wanted much more than a blog and I was prepared to learn code and apply some hacks to build a whole site out of Wordpress. This all seems stupid in retrospect. I can’t imagine why I used a database to store the content of a website, other than the blog posts, but I did.\n\nFor a short time, I did even more convoluted things. I used RapidWeaver to build the site and integrate my Wordpress blog in it using a plugin.\n\nWhile going through all these hacks, I always dreamt of a software than can allow me write my content in simple text and run some text manipulation on it to generate a site. I was not interested in writing these scripts myself and maybe I did not look hard enough on the internet. Anyways, Jekyll seems to have everything that I wanted.\n\nSo What is Jekyll ?\n\nJekyll is a static website generator that uses some magic ruby scripts to combine your pages and posts written in markdown with the page layouts to generate the webpages statically. You can then upload these static pages to your site and you are done. The static aspect of this is great if you like to roll your own pages. No more learning Wordpress loop only to break it. Your pages are literally in your control.\n\nAs a bonus, I got to enjoy a few more things. I always wanted a clean minimalistic look, but it was hard to find any ready clean  Wordpress templates. The problem is, the ones available for free are not that good and the ones available for buying are not really minimalistic (Why would somebody buy a template that does not have any bells and whistles). The iA3 template came close enough and I did enjoy it. However, I wanted to go more minimal. I finally found out a cool minimal starting point from Florian Holzner based on HTML5 Boilerplate and 320 and up for responsive layout. The other bonus is that, I get to write my posts in iA Writer, the minimalistic writer that I love, but could not use much to write my Wordpress posts earlier.\n\nAt this point, I haven’t made many changes to the parent template, apart from a few font-type changes and cleanup. I plan to modify this to make the blog more picture friendly to include my artwork and photographs without loosing its clean minimalistic nature.\n",
  id: 7
});
index.addDoc({
  title: "iBooks 2",
  author: null,
  layout: "post",
  content: "Apple released iBooks 2 yesterday. All my wishes about Smart Books and Smart Text Books are fulfilled in iBooks 2.\n\nFor long time, I was fascinated by the presentation in various books from Dorling Kindersley, better known as dk books. I have also loved the presentation in Art History Books and Encyclopedias. From the time I got my iPad, I have always wondered how the consuption device experience can be made more interactive and intimate. A more deeper thinking led to the articles I mentioned above about Smart Books and Smart Text Books. I had plans about making an interactive Art History App before I developed Tactilis.\n\nI am also inspired by the Our Choice app from push pop press. The developers behind Our Choice are some of the best designer-developers I have seen. I especially follow the work of Bret Victor.\n\nIt is no secret that iBooks 2 looks very much inspired by Our Choice. The format of Chapters and Sections accessible through bottom thumbnails is much like Our Choice, although Apple has also added a normal Book like page layout in Portrait mode.\nI thought Apple would develop an iBook framework and release it to developers. The iBooks Author is much more than I expected. It makes the platform more accessible to content creators and designers, rather than them needing to go via developers. Of-course, the designers would need developer help in developing nice interactivity. I also believe that Apple will slowly make the common interactions (like timelines, world maps etc) standard widgets in the app.\n\nI am planning on making a nice interactive book and releasing it for free. This would give me an opportunity to design a book and also program some cool widgets in Dashcode, the two things that have been on my learning to-do list.\n",
  id: 8
});
index.addDoc({
  title: "Blot.im",
  author: null,
  layout: "post",
  content: "I have moved the site to Blot.im. I was experimenting with Jekyll earlier and then wanted to maintain my blog on Github via Github Pages.\n\nHowever, Blot makes things easier. You can put your markdown or text files in a subfolder on dropbox (a folder dedicated to Blot app) and the files get published automatically.\n\nI know there are scripts available on the internet, that can do the same stuff. However, it is much better if somebody else is maintaining those scripts as we discover new defects or want to add more features. Github based publishing is also good, but the instant gratification given by editing the code on your own machine and not having to push/commit it, can only be appreciated after being experienced.\n\nI had to fix some spelling errors in the posts yesterday. All I had to do is edit the file already sitting there in my sublime text, press ⌘ + S, then ⌘ + R to refresh the browser, and the changes were there. That experience is priceless.\n",
  id: 9
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Traditional Art and Computer Graphics",
  "author": null,
  "layout": "post",
  "link": "/artngraphics",
}
,{
  "title": "App Ideas",
  "author": null,
  "layout": "post",
  "link": "/appIdeas",
}
,{
  "title": "The Dinner Plate We Never Had",
  "author": null,
  "layout": "post",
  "link": "/DinnerPlate",
}
,{
  "title": "Portraits",
  "author": null,
  "layout": "post",
  "link": "/texts/2010-08-01-Portraits/",
}
,{
  "title": "Tactilis",
  "author": null,
  "layout": "post",
  "link": "/Tactilis",
}
,{
  "title": "Smart books",
  "author": null,
  "layout": "post",
  "link": "/smartbooks",
}
,{
  "title": "Smart textbooks",
  "author": null,
  "layout": "post",
  "link": "/smarttextbooks",
}
,{
  "title": "Fresh Start With Jekyll",
  "author": null,
  "layout": "post",
  "link": "/JekyllRedesign",
}
,{
  "title": "iBooks 2",
  "author": null,
  "layout": "post",
  "link": "/ibooks2",
}
,{
  "title": "Blot.im",
  "author": null,
  "layout": "post",
  "link": "/BlotRedesign",
}
]

//Query

var qd = {}; //Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
