
import React from 'react';
import Adventure from './Adventure';
import './adventure.css';
import flyInChicago1 from './pic/flyInChicago1.jpg';
import flyInChicago2 from './pic/flyInChicago2.jpg';
import tired from './pic/tired.jpg';
import chicagoStop from './pic/chicagoStop.jpg';
import spaceCow from './pic/spaceCow.jpg';
import crew from './pic/crew.jpg';
import crewNathan from './pic/crewNathan.jpg';
import sunnyWalk1 from './pic/sunnyWalk1.jpg';
import sunnyWalk2 from './pic/sunnyWalk2.jpg';
import sunnyWalk3 from './pic/sunnyWalk3.jpg';
import crazyDog from './pic/crazyDog.jpg';
import cow1 from './pic/cow1.jpg';
import cow2 from './pic/cow2.jpg';
import guns1 from './pic/guns1.jpg';
import guns2 from './pic/guns2.jpg';
import guns3 from './pic/guns3.jpg';
import guns4 from './pic/guns4.jpg';
import park from './pic/park.jpg';
import parrot from './pic/parrot.jpg';
import owl from './pic/owl.jpg';
import colorBird from './pic/colorBird.jpg';
import cookie1 from './pic/cookie1.jpg';
import cookie2 from './pic/cookie2.jpg';
import street1 from './pic/street1.jpg';
import street2 from './pic/street2.jpg';
import street3 from './pic/street3.jpg';
import street4 from './pic/street4.jpg';
import shooting1 from './pic/shooting1.jpg';
import shooting2 from './pic/shooting2.jpg';
import shooting3 from './pic/shooting3.jpg';
import shooting4 from './pic/shooting4.jpg';
import shooting5 from './pic/shooting5.jpg';
import shooting6 from './pic/shooting6.jpg';
import shooting7 from './pic/shooting7.jpg';
import thanksgiving1 from './pic/thanksgiving1.jpg';
import thanksgiving2 from './pic/thanksgiving2.jpg';
import thanksgiving3 from './pic/thanksgiving3.jpg';
import thanksgiving4 from './pic/thanksgiving4.jpg';
import renfair from './pic/renfair.jpg'
import renfair1 from './pic/renfair1.jpg'
import renfair2 from './pic/renfair2.jpg'
import wineyard1 from './pic/wineyard1.jpg';
import wineyard2 from './pic/wineyard2.jpg';
import wine from './pic/wine2.jpg';
import food1 from './pic/food1.jpg';
import food2 from './pic/food2.jpg';
import food3 from './pic/food3.jpg';
import winetasting from './pic/winetasting.jpg';
import christmas1 from './pic/christmasDecor.jpg';
import christmas2 from './pic/christmasDecor1.jpg';
import christmas3 from './pic/christmasDecor2.jpg';
import christmas4 from './pic/christmasDecorModest.jpg';
import christmas5 from './pic/christmasLove1.jpg';
import christmas6 from './pic/christmasLove2.jpg';
import astronaut from './pic/astronaut.jpg';
import lama from './pic/lama.jpg';
import nasa1 from './pic/nasa1.jpg';
import nasa2 from './pic/nasa2.jpg';
import nasa3 from './pic/nasa3.jpg';
import nasa4 from './pic/nasa4.jpg';
import nasa5 from './pic/nasa5.jpg';
import nasa6 from './pic/nasa6.jpg';
import nasa7 from './pic/nasa7.jpg';
import nasa8 from './pic/nasa8.jpg';
import nasa9 from './pic/nasa9.jpg';
import nasa10 from './pic/nasa10.jpg';
import nasa11 from './pic/nasa11.jpg';
import victorianStreet from './pic/victorianStreet.jpg';
import victorianStreet2 from './pic/victorianStreet2.jpg';
import victorianRestaurant from './pic/victorianRestaurant.jpg';

const App = () => {

	const imgArr1 = [flyInChicago1, flyInChicago2];
	const imgArr2 = [chicagoStop, tired];
	const imgArr3 = [spaceCow, cow1, cow2];
	const imgArr4 = [crew, crazyDog, crewNathan];
	const imgArr5 = [sunnyWalk1, sunnyWalk2, sunnyWalk3];
	const imgArr6 = [guns1, guns2, guns3, guns4];
	const imgArr7 = [park, parrot, owl, colorBird];
	const imgArr8 = [cookie1, cookie2, street1, street2, street3, street4, food1, food2, food3];
	const imgArr9 = [shooting4, shooting3, shooting2, shooting1, shooting5, shooting6, shooting7];
	const imgArr10 = [thanksgiving1, thanksgiving2, thanksgiving3, thanksgiving4];
	const imgArr11 = [renfair, renfair1, renfair2, lama];
	const imgArr12 = [wineyard1, wineyard2, winetasting, wine];
	const imgArr13 = [christmas4, christmas1, christmas2, christmas3, christmas5, christmas6];
	const imgArr14 = [nasa1, nasa2, nasa3, nasa4, nasa5, nasa6, nasa7, nasa8, nasa9, nasa10, nasa11];
	const imgArr15 = [victorianStreet, victorianStreet2, victorianRestaurant];

		return (
			<div>
				<h1>Our Vacation to Houston</h1>
				<p><i>Please click the text to read more and the images to toggle between them</i></p>
				<Adventure header='Fly in' src='flyInChicago' arr={imgArr1} alt='the city of chicago taken from the airplane' thesis='The flight to America was a long one. Especially so for me who hates flying. However as we finally got within react of our first stop on american soil and looked out from the airplane window the sprawling streets of Chicago greeted us back, and what a lovely sight it was!' description='On out flight we both were excited, tired and exhausted, in different configurations. I managed to watch the movies Once upon a time in Hollywood, the Marsian and another movie I completly forgot (none of which I can recommend, sorry Tarantino fans). Rebecca watched Once upon a time in Hollywood but gave up half way through and instead watched Toy story 4 and War Dogs and Malificent and sleept through most of War Dogs as well' 
				/>

				<Adventure header='Rest in Chicago' src='chicagoStop' arr={imgArr2} alt='Rebecca enjoying a beer in Chicago O´Hare Airport' thesis='The trip to Houston was devided into three steps, Helsinki, Chicago and Houston. After a long flight across the atlantic where we got to watch 4 or so movies each Rebecca and I enjoyed a couple of cold beer each.' description='Finding your way in O´Hare was a nightmare for Rebecca and I. Maybe more so for me then for her, since I am totally lost in big areas and deal poorly with the stress at airports. We had to ask for help to find our way a couple of times by both helpful and not so helpful staff at the airport itself. But after finding our way to the gate we got to spend a few hours drinking beer and make conversation with strangers. (Very un-Swedish). We enjoyed the beer called Matilda, bud light and grumpy old man. As well as the company of Steve and his son Brandon. Next time visiting Chicago make sure to visit Steve at Giordanos at the Prudential Plaza (if I remember correctly).'
				/>

				<Adventure header='Cows in Houston' src='spaceCow' arr={imgArr3} alt='a cow on two legs in spacesuit' thesis='When we finaly landed in Houston we were greeted by this fellow. I dont know if this is a reference to the Russians sending dogs into space or if the people of Texas just really like to honor their cows but it is a piece of interesting art none the less' description='Rebecca claims that the cow is in fact a representation of herself, (she has a bit of an ego sometimes), as we sometimes refer to eachother as "cuddle cows", the cuteness of which is kind of lost in translation. We did however, get to see a few more longhorns during our stay' />

				<Adventure header='Meeting up with the locals' arr={imgArr4} src='crew' alt='Me, Rebecca and our hosts' thesis='It was a weary and sleepy couple of guests whom got recieved at the airport, but our kind hosts picked us up laughing and hugging. Rebecca finally got to understand what I meant when I say that Nathan laughs with his entire being.' description='The ride from the airport to our hosts home was about an hour, (maybe less). But at least being in the right place and with adventures ahead we arrived at our new home for the next two weeks with somewhat reinvigorated spirits. We also got to meet, the new family member Fennec, or as Rebecca soon started to call her "Crazy Dog". ' />

				<Adventure header='Sunny walk' src='sunnyWalk1' arr={imgArr5} alt='Dreamy sunny view of a Houston park' thesis='Still a bit jet lagged and maybe not quite enough hours of sleep we went into our first propper day in America with some chicken and waffels for breakfast as well as a drink followed by a few beers. In the afternoon we went with Nathan for a stroll in the park with "Crazy Dog".' description='In my hometown of Växjö we had a total of 4.5 hours of sun for the entirty of November. Seeing the sun again and not being able to walk around outdoors in a T-shirt felt surreal. Winter depression is a thing back at home, and I think we´ve found the cure! During our walk we found great trees with moss hanging out of them. I myself didnt thinkg much of it, but Rebecca informed me that this moss was sold quite expensive at the florist shop where she works. On our way back after laying on our backs in the gras for a while we encountered an older woman biking past us, Fennec being a crazy dog did a bit of a puppy-kangaroo jump after her to which she exclaimed "Wooah!" much to Nathans anger. I just thought she was tripping balls and went "woah!" after seeing Nathans dog transform into a bear!'/>
				

 				<Adventure header='Dinner and Guns' src='guns' arr={imgArr6} alt='dinner and guns with friends' thesis='We met up with friends of Nathan and Madison for dinner. Their friends Jessie and Haley treated us to wine, tequila meat pies and a display of their favorite firearms.' description='Amongs the guns were a few handguns .22 and 9mm, as well as Jessie´s "drug dealer gun" (the big .44 Magnum). In adition to these there were the 5.66 AR and the (in)famous 7.62 AK47 the Russian made version at that as well as the crap rod - also known as the mosin nagat with bayonett. For us Swedes with very limited experience interacting with firearms having so many spread out in your home felt a bit odd. We also got invited to shoot a few at a later date (when less alcohol was involved).' />

 				<Adventure header='Walk in the park' src='walk' arr={imgArr7} alt='Sunny park' thesis='During our stay we spent a some time walking in parks with Fennec the "crazy dog". Me and Nathan usually took her to the local park where we had a beer and let Fennec of the leach to be able to run around. But we also took a few trips to bigger parks around the city.' description='The first walk we had our first day (detailed above), but on another occation we went to a park in a flood zone. It was a beautiful park with a bit of wetland around where Fennec escaped when Nathan accidentally dropped the leach. During this walk we also got to see a few different birds that were housed in big cages outdoors. They were housed like this due to them sustaining injuries in the wild, but they were absolutly beautiful, especially the owl there. Houston might not be known as an outdoorsy city. But we had a lot of fun walking around in the parks!' />

 				<Adventure header='The city' src='HoustonCity' arr={imgArr8} alt='streets in houston' thesis='Växjö is a small city. My hometown of Karlskoga is smaller still. I have not been to New York or Tokyo or any of the larger capitals around the world so Houston with its 2 million population was quite breathtaking.' description='The first thing that got to me was how big the downtown city looked as you entered with all the highrises crowding the skyline. But as you entered and you became stuck in the middle of it the streets were wide and getting around didnt prove to hard at all, (but maybe that´s because we were driven around by natives though). The food the entire trip was excellent and the reason I went over budget for the trip. I think i´ve gained 5 pounds (2kg) during my stay, but then again only in America will you find 800cal cookies as a lunch dessert, (which I guess falls in line with southern comfort food).' />

 				<Adventure header='Shooting things' src='guns' arr={imgArr9} alt='shooting guns at range' thesis='We were promised to shoot guns with Nathan and Madison´s friend Jessie. So we met up just before lunch to start the day of this adventure.' description='Jessie first told us of a gun store where we went and talked and looked at a few different handguns, rifles and shotguns. I tried my best to ask a few questions along the way, but something that threw me off was the bullet proof inlay for backpacks ment to be inserted into childrens backpacks as you send them off to school. The gun debate is a loaded (pun intended) topic in America, but when you feel this need to protect your children from shootings something somewhere is messed up! After looking at the guns in the store we went to Jessie´s house where we did some shooting practice with unloaded guns and safety training. How to make sure that the gun is empty, how they are assembled and the four commandments of the "gun god", 1. Dont aim at people. 2. Finger off the trigger until you are ready to shoot. 3. Assume the gun is loaded. Number four I cant remember, so probbably it wasnt that important. After this we went to the hobbit cafe where we had lunch in the form of a burger and fries and then we went to the gun range. We both got to shoot a couple of 9mm handguns a glock and a H&K as well as a .22 handgun i dont remember the brand of. As well as the AR15, (a 5.56 calibre rifle) Jessie was very impressed with us and said that swedes makes the best marksmen. Especially fun was to see Rebecca doing so well and having such a good time!' />

 				<Adventure header='Thanksgiving' src='thanksgiving' arr={imgArr10} alt='thanksgiving in houston' thesis='In USA people celebrate thanksgiving and we got the opportunity to join two of them. One "friendsgiving" ahead of time with (as the name suggests) friends and one with Nathans family.' description='The friendsgiving was much more of a party then the version of thanksgiving you see on TV. This was unbeknownst to us, and we didnt spend long there since none of us are party goers. The thanksgiving at Nathans parents (which was my second time there) was amazing though. It started off with family members cooking food in the driveway while watching the football game on an old TV thorugh the open garage door. Pork chops, chicken, bacon wrapped jalapeno cheeze and all manners of tasty things were cooked for us and everyone wanted the swedes to try the propper thanksgiving food - and tasty it was! We in turn brought homemade meatballs which were appreciated as well. After the adorable Lucy, (daughter to Nathans cousin or somesuch), led us in prayer we dug in to the main meal with the turky, stuffing, potatoes and all the other goodies. After such a heafty meal me Nathan and Nathan´s fencing friend Freddie went for a walk and another beer around the golf court next to the house we were at. After which I brought a flower-thing? For rebecca which later Lucy snatched away and began messing with. We also got invited to visit Nathans parents whom I know from my last trip to be lovely people. As a side note Lucy wanted to learn the Swedish word for "hello" for which I taught her to say "tjena", but since english dont use our "tj"-pronounciation when she told Rebecca she pronounced it "sena" which didnt make sence to Rebecca. So now everyone thinks I learnd a 6 year old girl a Swedish swear word, so, great...' />

 				<Adventure header='Renaissance fair' src='renaissance' arr={imgArr11} alt='renaissance fair people in costumes' thesis='Each year Houston hosts a large renaissance fair and being the medeival enthusiasts that I am, being a longsword fencer/instructor and all of course we were going to attend. Nathan even got a expensive costume for this years event of a german so called "landsknecht" or mercenary from around 1500-1600.' description='There is a lot of drinking associated with visiting renaissance fair. The setting itself isnt strictly enforced but rather you could see all sorts of fantasy-esk costumes. Everything from barbarians to 13th century crusaders to stormtroopers wearing kilts. But it is a lot of fun. As luck would have it I was escorted by my darling whom saved me when I was in dire need, bringing me water and fries when I had previously overindulged in mead, wine and beer. Especially mead is tricky due to its alcohol content of roughly 12%-18% while maintaining the characteristics of beer, - something I found out last year. Nathan also brews mead himself which is very tasty and have been the downfall of many a would be heros. We were lucky that the first night at renaissance fair was the only rainy day of our visit and we also spent the nights sleeping in an actuall bed at Nathans parents instead of inside a tent at fair. Oh and we also found a couple of cute alpachas being used to entertain the guests, I do hope they are being treated well, as such majestic animals deserve!'/>

 				<Adventure header='Wine tastings' src='wineTastings' arr={imgArr12} alt='wine at winetastings' thesis='Nathan works at a winery where they do tastings and events as well as producing their own wines. As such Nathan is a bit of an expert in regards to wines and we both tend to preffer the dark red wines, as does Rebecca. Since we are in such agreement in out prefferences for wine we could really corner the grapes we all enjoyed and tried som really good wines.' description='We started the day at Nathans job since he had to work a litle in the morning, while he did so me and Rebecca got to enjoy both the wine and the view at his workplace. We even brought two bottles with us back home. A white chardonnay if Im not misremembering as well as a red blend called Collide, which we tried at one of the wine tastings we visited. At this tasting there were also this person whom Nathan described as the friendliest gayest cowboy you´ll ever see. He was also a somewhat reknown somalier and super interesting to listen to if you´re the slightest into the world of wines. We tried four wines at this place called "the nice winery" nice also being the initials of the people who own the winery. Paired with the wine was a collection of cheezes, meats, nuts and biscuits. After the official tasting we per Nathans recommendation shared a bottle of Collide, (the same one we later bought a second bottle of which we took with us back home to Sweden.' />

 				<Adventure header='Let there be Christmas lights!' src='christmasLights' arr={imgArr13} alt='buildings with christmas lights' thesis='In Sweden we have a word: "Lagom". It supposedly came from the vikings where everyone had an equal share of something, leaving just the right amount for everyone. This just the right amount is what we today mean with this word, - not too litle, and definitely not too much. In Texas they have no such word.' description='One of Nathans neighbours tends to arrange these lavish christmas lights every year and adds a couple of new things each year as well if im not mistaken. During the hollidays the car queue to enter the block is 30 minutes just because of people wanting to see the lights at this huge house. We went there with Fennec and a mug of christmas spiced mead to look at the lights as well, and just maybe we were able to take out cutest couple picture as of yet there as well. (Also, the first picture is only there to fool you into thinking im overreacting).' />

 				<Adventure header='NASA' src='nasa' arr={imgArr14} alt='parts of different space rockets' thesis='I had the misfortune of getting sick the last two days of our stay. But just before that we managed to visit the NASA Johnson visitor center, a reccomendation I got from a professor I met while I studdied in Missouri last year. NASA itself was divided into multiple buildings within a large compound which of course makes sence with all the different research they do, but was still surprising to me as I expected it to be one large museum or similar.' description='When we were at NASA we went on the tour and the most surprising thing I guess would have to be the longhorns. Yes, there were actual cows, (or steers, as they want you to call them), at NASA. The speakers of the cars they were driving us around in were´nt the best, but if I heard correctly the longhorns were there when the government bought the place and they´ve just stayed on, which is funny to me. There were a lot of things to look at but the size of the rockets were amazing. Even seeing them on picture it is hard to convey the gravitas of being there in person. We also got told about the apollo missions, the robots and technology being used today and a whole lot of other space related facts. We met up with Jessie, (Nathans friend), later before we planned to go to Olive Garden, whom said that NASA and Olive Garden sends the same amount of people to space every year, - referring to the fact that NASA now buy seats on Russian space crafts instead of sending their own.' />

 				<Adventure header='Victorian Streets of Texas' stc='vicotrianStreets' arr={imgArr15} alt='victorian streets and storefronts' thesis='The last day before I got the flu, (the same day as we visited NASA) we also went to a town with these really pretty vicotian streets and buildings. Next weekend Nathan and Madison were going to celebrate something similar to the renaissance fair but in this place and in a victorian setting.' description='The stores around this town were mostly small so called brick and mortar shop and usually not parts of large chains. Also the restaurants had this really cool authentic atmosphere. We had a couple of tacos for lunch here and a beer. I hade a wheet beer and Rebecca had an IPA and Nathan had two cocktails. We also visited the harbour, the thing this town became famous for before the harbour in Houston was founded, and on our way out we went past the rich people district where fromer bankers and mobsters built massive houses for themselves. Apparently, crime does pay.' />
			</div>
		);
	
}

export default App;

// <Adventure header='' src='' alt='' thesis='' description='' />
