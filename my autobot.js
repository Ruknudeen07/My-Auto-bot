//give name for apply js 
const form=document.querySelector(".form");
const messagesend = document.querySelector(".messagesend");
const messagecontainer= document.querySelector(".messagecontainer");

//random function 

function getRandom(from,to){
   return Math.floor(Math.random()* (to-from) + from);
   }
document.addEventListener('DOMContentLoaded',function() {
 const ooo = document.getElementById("ooo");
 ooo.addEventListener('click',function(){
 const maxWidth= window.innerWidth - ooo.elementWidth;
 const maxHeight = window.innerWidth - ooo.elementHeight;
 const randomX = math.floor(math.random() * maxWidth);
 const randomY = math.floor(math.random() * maxHeight);
 ooo.style.left= `${randomX}px`;
 ooo.style.top= `${randomY}px`;
 });
})

form.addEventListener('submit',function(event){
   event.preventDefault();
   sendmessage();
});
// trim input function

function sendmessage(){
   const messagetext=messagesend.value;
   if(!messagetext.trim()){
       return;
   }
   var messagebox=createMessageBox('right',messagetext)
   messagecontainer.prepend(messagebox);
   messagesend.value='';

// data for applying js

    var words = ['Hi Dude Iam Caption Jack Sparow Can i help you','Hellow  Dude Iam JARVIS Can i Assist you','Hellow Bro Iam ALEXA How Can i Assist you','Hi Bady Iam CHAT GPT How Can i Assist you','Hi there! I am SIRI How’s your day going? What can I help you with today?','Hi there! I am NEXA How’s it going? What’s on your mind today?',]
    var box = words[getRandom(0,words.length+1)]
    var poem = ["மக்கள்: உங்களிடம் புலன் செயல் திறன்கள் இருக்கிறதாஅவர் ஆமாம், நானும், என் மனைவி எனக்கு புலன் செயல் திறன்கள் இருக்கின்றன!மக்கள  அதை எவ்வாறு சொல்வீர்கள்? அவர் என் மனைவி நான்மையானது செய்தது எனக்கு தெரியாது என்பதாகச் சொல்கிறாள்; நான் செய்யாததைப் புரிந்து கொள்கிறேன்!",
    "சமீபத்தில், ரவி மற்றும் சந்திரன் பசங்க பேசிக்கொண்டிருந்தார்கள்.ரவி: எனக்கு புதிய பைக்கே வேண்டும்! சந்திரன்: ஏன்? ஏற்கனவே உனக்கு நல்ல பைக் இருக்குறதே? ரவி:  ஆமாம், ஆனால் அது ‘விரைவில்’ பையில் மாறவில்லை! சந்திரன்: அது எப்படி? ரவி:  எனக்கு அதை ‘மருந்து’ போலவே கையாள வேண்டியிருக்கிறது, ஏனெனில் ‘வேகமாக’ ஓடக்கூடியது!",
    "காதலர்: நான் உன்னோடு ஒரு சிக்கலான விஷயத்தை பேசவேண்டும்.மனைவி: சொல்லு, என்ன? காதலர்: நான் உன்னோடு நேரத்தை செலவிட விரும்புகிறேன். மனைவி:  அதற்கு என்ன பிரச்சனை? காதலர்:  நீ என்னுடைய நேரத்தைச் செலவிடக் கொடுக்காத கெமிகல்ஸ் போல இருக்கிறாய்!"]
   var box2 = poem[getRandom(0,poem.length-1)]
   var story=["மரபு கதை: செல்வன் மற்றும் வித்தைஒரு காலத்தில், ஒரு சிறிய கிராமத்தில் செல்வன் என்ற கலைஞன் வாழ்ந்தார். செல்வன் மிகவும் திறமையானவராக இருந்தார், ஆனால் அவன் வாழ்ந்து வந்த வாழ்க்கை குறைந்த நலன்கள் மற்றும் சவால்கள் நிறைந்தது.ஒருநாள், செல்வன் கலைச்சொல், வித்தை மற்றும் அறிவு குறித்து ஒரு புதிய வழியை தேடி சபையால் அழைக்கப்பட்டான். சபை, செல்வனை ஒரு ஆழ்ந்த மையத்தில் சந்திக்க அழைத்தது. அவன் அந்த மையத்திற்கு சென்றது.அங்கு, செல்வன் தன்னை சவால்களுக்கு எதிராக மோதுவதற்கும், கலை மற்றும் அறிவில் புதுமைகளை கண்டுபிடிப்பதற்கும் ஒரு பயிற்சி கிடைக்கப்போகிறது என்று அறிவிக்கப்பட்டது. ஆனால் அந்த பயிற்சி எளிதானது அல்ல; அது செல்வனை தனது திறமைகள் மற்றும் அறிவுகளை முழுமையாகப் பயன்படுத்துவதற்கான சவால்களை கொண்டது.பயிற்சியின் மூலம், செல்வன் பல்வேறு கலைகளை மற்றும் அறிவுகளைப் பற்றிய புதிய திறன்களை கற்றான். அந்த பயிற்சியின் முடிவில், செல்வன் தனது கிராமத்திற்கு திரும்பி, தன் புதிய கலைகள் மற்றும் அறிவுகளைக் கொண்டு கிராமம் வளர்ச்சியடைய உதவியது.அந்தப் பயிற்சியின் மூலம், செல்வன் எளிய திறமைகளைப் பயன்படுத்தி பெரிய மாற்றங்களை உருவாக்கியிருந்தான். அவன் மிகுந்த உழைப்பும், கலைஞன் ஆன மிகுந்த அறிவும், தனது கிராமத்திற்கு புத்துணர்வு கொண்டு வந்தது.இந்தக் கதை, கடின உழைப்பு, அறிவு மற்றும் திறமைகளைப் பயன்படுத்தி வாழ்க்கையில் பெரிய மாற்றங்களை உருவாக்கும் வாய்ப்பு கிடைக்குமென நம்பிக்கையை கொடுக்கிறது.",
   "அந்த அடர்த்தியான மரத்தின் கதைஒரு காலத்தில், ஒரு பெரிய மலைகளுடன் சூழப்பட்ட கிராமத்தில், ஒரு அடர்த்தியான மரம் இருந்தது. அந்த மரம் கிராமத்தில் உள்ள அனைவரும் மதிக்கும், பரமபதமான மரமாகப் பிளவுபட்டது. அந்த மரத்தின் கூரை மிகச் சிதம்பரம் மற்றும் கொடிகரமானது; அதன் கீழ் மக்கள் தங்களுடைய கவலைகளைப் பகிர்ந்து, மன அமைதியுடன் அமர்ந்து அற்புதமாக இருந்தனர்.ஒருநாள், அந்த கிராமத்திற்கு ஒரு பண்டிடர் வந்தான். அவன் ஒரு கலைஞன் மற்றும் மாயவாணி என்பவராக இருந்தான், மேலும் அந்த மரத்தின் மாயத்தைக் கண்டுபிடிக்க விரும்பினான். அவன் பண்டிதம் மரத்தை சுற்றி வந்தபோது, அந்த மரத்தின் மண்டலத்திற்கு அடியெடுத்து வைக்கவேண்டும் என்று தீர்மானித்தான். ஆனால் மரம் உரைக்கும் மாறுபாட்டால், அது வணங்க முடியாத மரம் என்பதால், பண்டிடர் அந்த மரத்தை நோக்கி அதிர்ச்சியடைந்தான்.அந்த மாயவாணி, “எப்படி இந்த மரம் ஒருவருக்கு கூட கண்டு கொள்ள முடியாதது?” என்று கேட்க, மரத்தினின்றும் கூடிய தன் மாயத்தைப் பயன்படுத்தி, அந்த மரத்தின் வழிமுறைகளைச் சொல்லினான். மரம் சொன்னது: “முதலில், என் நிழலின் கீழ் அமர்ந்து, மனதின் அமைதி பெற வேண்டும். அடுத்ததாக, உன் மனதைச் சுத்தமாகக் கூற வேண்டும்.”அந்த பண்டிடர் மரத்தின் வழிமுறைகளை பின்பற்றி, தனது மனதைச் சுத்தமாக்கி, தன் கவலைகளை அடக்கி, மரத்தின் கீழ் அமர்ந்தான். சில நேரங்களில், அவன் மரத்தின் கதை, அதன் மாயம் மற்றும் அதன் அழகைக் கண்டு கொண்டான்.அந்த மரம் உண்மையில் மகத்தானது; ஆனால், அதை நன்றாகப் புரிந்து கொள்ள வேண்டிய உற்ற மன அமைதியுடன் இருக்க வேண்டும் என்ற உண்மையை பண்டிடர் உணர்ந்தான்.மரத்தின் உள் அமைதியைச் சுமந்த அந்த பண்டிடர், மரத்தைப் பற்றிய ஆழமான அறிவுடன் தன் பயணத்தை முடித்தான். இந்த கதை, மன அமைதி மற்றும் ஒருவரின் திறமைகளை அடைய, அந்த அமைதியில் ஆழமான அறிவைப் பெறலாம் என்பதைக் குறிக்கிறது.",
   "சிறிய நட்சத்திரம்ஒரு நாள், வானத்தில் ஒரு சிறிய நட்சத்திரம் பிறந்தது. அது பிறந்த சில தினங்களில், மற்ற நட்சத்திரங்களுடன் சேர்ந்து, ஒளி வீசும் இடத்தில் அசலாக பார்க்க வந்தது. ஆனால், அந்த நட்சத்திரம் தனக்கே ஒரு தனி ஒளியைக் கொண்டு, சிறிது மங்கலாக இருந்தது. மற்ற நட்சத்திரங்களால், அதன் ஒளி பவராகக் கருதப்பட்டது.அந்த சிறிய நட்சத்திரம் மிகவும் கவலைப்பட இருந்தது. எனது ஒளி குறைவாகவே இருக்கிறது என்று அது நினைத்தது. மற்ற நட்சத்திரங்கள் அதன் குறைவான ஒளியைக் காணக்கூடியது, ஆனால் அவர்கள் அப்படியானது நினைக்கவில்லை. உனது ஒளி குறைவாகவே இருக்காது, உனக்கு உன் தனி இடம் உண்டு என்றார்கள்.ஒரு இரவில், நெருப்பு என்னும் ஒரு பெரிய நட்சத்திரம், அந்த சிறிய நட்சத்திரத்தை அணுகிக்கொண்டு கூறினது: உன் ஒளி சிறந்தது, ஆனால் உனக்கான இடத்தை கண்டுபிடிக்கவேண்டும். உன் ஒளி தனித்துவமாக இருக்கும், உன் பாதையை தொடர்ந்தால், உன் ஒளி மேலும் பிரகாசிக்க வாய்ப்பு உண்டு.அந்த சிறிய நட்சத்திரம் நம்பியதை போலவே செய்கின்றது. அது எப்போதும் தன்னுடைய தனித்துவத்தை மற்றும் சிறிய ஒளியை பராமரிக்கவும், தன்னுடைய வழியை தொடர்ந்தது. நாளடைவில், அந்த நட்சத்திரத்தின் ஒளி மேலும் பிரகாசமாகும், அதற்கு தேவையான இடத்தைப் பெற்றது, மற்ற நட்சத்திரங்களுடன் சிறப்பாக ஒளிர்ந்தது.அந்த நாளிலிருந்து, அந்த சிறிய நட்சத்திரம் மற்ற நட்சத்திரங்களுக்கு உதவுவதற்கும், அவர்களின் தனித்துவத்தை மதிக்கவும், மேலும் வானத்தில் ஒளியாற்றியது.மதிப்புரை: ஒவ்வொரு தனி தனிமை, அதன் தனித்துவத்தை மதித்து, நம்பிக்கையுடன் செயல்படுவதால், மிகப் பெரிய வெற்றியை அடையலாம்.",
   "திமிங்கிலனின் கதை   ஒரு நாள், ஒரு அழகான பண்டைக்கொடி குளத்தில், ஒரு திமிங்கிலன் பிறந்தது. பிறந்த நாள் முதலே, அந்த திமிங்கிலன் மிகவும் அழகாக இருந்தது. அதை எல்லோரும் ஆர்வமாகப் பார்த்தனர். ஆனால், திமிங்கிலன் சிறந்ததோ, வித்தியாசமோ இல்லாதவராகவே இருந்தது. மற்ற திமிங்கிலங்களும், அதை அப்படி எதுவாகக் கருதவில்லை.அந்த திமிங்கிலன், மற்ற திமிங்கிலங்களோடு பந்தயங்களில் கலந்து கொள்வதை விரும்பியதால், அவன் ஒருநாள் மிகவும் வேகமாக ஓடவேண்டும் என்று முடிவு செய்தான். ஆனால், அவன் குளத்திலேயே மட்டுமே ஓடவில்லையென்றால், மற்ற திமிங்கிலங்கள் அவனைச் சிறியதாகக் கூறின.எனக்கு வேறு என்ன முடிவு? என்று திமிங்கிலன் சிந்தித்தான். அதைச் சுற்றியுள்ளவன்கள், நீ உன்னுடைய இயல்பையும், உன்னுடைய தனித்துவத்தையும் தேடி வேண்டும் என்றார்கள்.அந்த திமிங்கிலன் தனது தனித்துவத்தை எளிதில் காணவில்லை. அப்போது, குளத்தினுள்ள பெரிய முதலை, திமிங்கிலனின் சொற்களை கேட்டது. எப்படி நான் உதவிக்கரமாக இருக்க முடியும்? என்று முதலை கேட்டது.நான் ஒரு பயிற்சியுடன் துவங்க விரும்புகிறேன், ஆனால் என்ன செய்கிறேன் என்பதைப் புரியவில்லை, என்று திமிங்கிலன் கூறினான்.முதலை, நீ துவங்க வேண்டும், உன் பயிற்சியை செய்வதற்கு ஒரு குறிப்பிட்ட இடத்தை தேர்ந்தெடுக்க வேண்டும். நான் உனக்கு உதவுகிறேன் என்றது.அந்த திமிங்கிலன் முதலை கூறிய வார்த்தைகளை எடுத்துக்கொண்டு, ஒரு பயிற்சியைத் திட்டமிட்டு, முதலை மற்றும் மற்ற நண்பர்களின் உதவியுடன் பயிற்சியைத் தொடங்கினான். திமிங்கிலன் தொடர்ந்து உழைத்தது, வெற்றியடைந்தது, மற்ற திமிங்கிலங்களுக்கு ஒரு நல்ல மாதிரியாகக் கருதப்பட்டது.மதிப்புரை: கடுமையாக உழைத்தால், மற்றவர்களின் உதவியுடன், நீங்கும் திறமை மற்றும் திறனை மேம்படுத்த முடியும்."
    ]
    // call random function
    var box3 = story[getRandom(0,story.length-1)]
    var good =["I think you're great! You’ve got a way of engaging that makes our conversations interesting. What do you think about me?","That’s really kind of you to say! I’m here to support you and chat about whatever’s on your mind. How can I help you today?","I appreciate your warmth! I’m here for you, so if there’s anything you want to talk about or need help with, just let me know.","It means a lot to hear that! If there’s anything specific you’d like to talk about or if you have any questions, feel free to share. I’m here for you!","I’m really touched by your feelings. If there’s anything you want to share or discuss, I’m all ears. What’s on your mind?","வாய்ப்பு இல்லை ராஜா"]
    var aa = good[getRandom(0,good.length-1)]
    var think = ["I think you’re someone who’s thoughtful and expressive. You’ve shown a lot of warmth in our conversations. If there’s anything you’d like me to know or if you want to share more about yourself, I’m here to listen and cha","சிறப்பான ஆள் நீ","Alright, I’m thinking about how engaged and positive you’ve been in our conversations. You’ve got a friendly and open vibe, which makes chatting with you enjoyable. If you have any specific thoughts or feelings you want to share, I’m all ears!","Based on our interactions, I think you’re someone who’s friendly and thoughtful. You’ve shown kindness and an openness to engaging in meaningful conversations. If you’d like to share more about yourself or if there’s something specific on your mind, I’d love to hear it!","நல்ல மனிதன்","You seem like a legent","You seem like a captain","You seem like a Survivor"]
    var box4 = think[getRandom(0,think.length-1)]
    var bb ="MASTER RUKNUDEEN"

    // if ,else if function for manuplate input

   setTimeout(function(){
     let autoReplyMessage ='';
        if  (messagetext.toLowerCase().includes("html")) {
           autoReplyMessage = " HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an open state. A summary or label must be provided using the <summary> element.HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content. HTML elements label pieces of content such as this is a heading, this is a paragraph, this is a link, HTML can be divided into three categories: transitional, strict, and frameset. These types apply to how HTML is used, not necessarily to the selection of tags. HTML emails are written using hypertext markup language code, which allows you to implement graphics, add buttons, and embed videos directly into your emails.HTML syntax is written within simple text documents that end with a . html extension. HTML documents consist of text elements that can be read and loaded by a web browser. HTML markup functions through the use of elements, which describe its functionality and are placed within a descending tree structure.HTML is not a programming language. It's a markup language. In fact, that is the technology's name: HyperText Markup Language.etc";   
        }
        else if (messagetext.toLowerCase().includes("think")) {
             autoReplyMessage =box4;
          }
        else if (messagetext.toLowerCase().includes("think about me")) {
             autoReplyMessage =box4;
        }   
        else if (messagetext.toLowerCase().includes("what do you think about me")) {
             autoReplyMessage =box4;
          }
        else if (messagetext.toLowerCase().includes("css")) {
           autoReplyMessage = "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.The three types of CSS are external, internal, and inline. External CSS is a file that HTML files will link to. Internal CSS is specified at the beginning of an HTML document. Inline CSS is written for a specific element in the HTML document.CSS provides developers and designers with powerful control over the presentation of HTML elements. HTML uses tags and CSS uses rulesets. CSS styles are applied to the HTML element using selectors. CSS is easy to learn and understand, but it provides powerful control over the presentation of an HTML documentCSS, or Cascading Style Sheets, is a fundamental programming language for web design, used to stylize the presentation of HTML-based pages. By using CSS, website designers can build multiple pages with the same formatting.CSS syntax refers to the way we write CSS code. In order to write CSS, you need to first identify the element in your HTML page that you want to style before adding styles using a plethora of built-in CSS properties. There are multiple ways to identify and tell CSS which element in your HTML page it should style.CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative featuresA CSS rule always begins with a selector. The selector indicates the part of the document where the rule is applied. When processing CSS code, the browser uses the selector to “select” the targeted elements and apply style rules to them. The selector is followed by one or more declarations inside curly braces.";
        }
        else if (messagetext.toLowerCase().includes("javascript")) {
           autoReplyMessage ="JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, JavaScript is a scripting language used to develop web pages. Developed in Netscape, JS allows developers to create a dynamic and interactive web page to interact with visitors and execute complex actions. It also enables users to load content into a document without reloading the entire page";
        }
        else if (messagetext.toLowerCase().includes("joke")) {
           autoReplyMessage =box2;
        }
        else if (messagetext.toLowerCase().includes("story")) {
           autoReplyMessage = box3;
        }
        else if (messagetext.toLowerCase().includes("nature")) {
           autoReplyMessage ="It is often taken to mean the natural environment or wilderness—wild animals, rocks, forest, and in general those things that have not been substantially altered by human intervention, or which persist despite human intervention";
        }
        else if (messagetext.toLowerCase().includes("sun")) {
           autoReplyMessage ="The Sun is the star at the heart of our solar system. Its gravity holds the solar system together, keeping everything — from the biggest planets to the smallest bits of debris — in its orbit.";
        }
        else if (messagetext.toLowerCase().includes("moon")) {
           autoReplyMessage ="The Moon is Earth's only natural satellite. It orbits at an average distance of 384,400 km (238,900 mi), about 30 times the diameter of Earth. Tidal forces between Earth and the Moon have over time synchronized the Moon's orbital period (lunar month) with its rotation period (lunar day) at 29.5 Earth days, causing the same side of the Moon to always face Earth. The Moon's gravitational pull – and to a lesser extent, the Sun's – are the main drivers of Earth's tides.";
        }
        else if (messagetext.toLowerCase().includes("star")) {
           autoReplyMessage ="A star is a luminous spheroid of plasma held together by self-gravity. The nearest star to Earth is the Sun. Many other stars are visible to the naked eye at night; their immense distances from Earth make them appear as fixed points of light. ";
        }
        else if (messagetext.toLowerCase().includes("hi")) {
           autoReplyMessage =box;
        }
        else if (messagetext.toLowerCase().includes("hellow")) {
           autoReplyMessage =box;
        }
        else if (messagetext.toLowerCase().includes("good")) {
           autoReplyMessage =box;
        }
        else if (messagetext.toLowerCase().includes("good morning")) {
           autoReplyMessage =box;
        }
        else if (messagetext.toLowerCase().includes("what is your name")) {
           autoReplyMessage =box;
        }
        else if (messagetext.toLowerCase().includes("i love you")) {
           autoReplyMessage = aa;
        }
        else if (messagetext.toLowerCase().includes("i love u")) {
           autoReplyMessage =aa;
        }
        else if (messagetext.toLowerCase().includes("what is your father name")) {
           autoReplyMessage =bb;
        }
        else if (messagetext.toLowerCase().includes("what is your master name")) {
           autoReplyMessage =bb;
        }
        else if (messagetext.toLowerCase().includes("what is your master")) {
           autoReplyMessage =bb;
        }
        else if (messagetext.toLowerCase().includes("who made you")) {
           autoReplyMessage =bb;
        }
        else if (messagetext.toLowerCase().includes("your favorite color")) {
           autoReplyMessage ="Blue because, my master likes it so i like it";
        }
        else if (messagetext.toLowerCase().includes("what were you created for")) {
           autoReplyMessage ="for study purpose";
        }
        else if (messagetext.toLowerCase().includes("your role")) {
           autoReplyMessage ="helping you";
        }
        else if (messagetext.toLowerCase().includes("your porepose")) {
           autoReplyMessage ="spending time with you";
        }
        else if (messagetext.toLowerCase().includes("what can you do")) {
           autoReplyMessage ="i can chat to you";
        }
        else if (messagetext.toLowerCase().includes("ms dhoni")) {
           autoReplyMessage ="Mahendra Singh Dhoni is an Indian professional cricketer who plays as a right handed batter and a wicket-keeper. WikipediBorn: 7 July 1981 (age 43 years), Ranchi Spouse: Sakshi Dhoni (m. 2010) Dates joined: 2018 (Chennai Super Kings), MORE Parents: Pan Singh Dhoni, Devaki Devi Siblings: Narendra Singh Dhoni, Jayanti Gupta  Awards: Padma Bhushan, Padma Shri, MORE  Height: 1.75 m";
        }
        else if (messagetext.toLowerCase().includes("vijay")) {
           autoReplyMessage ="Joseph Vijay Chandrasekhar, known professionally as Vijay, is an Indian actor and playback singer who works in Tamil cinema. Wikipedia  Born: 22 June 1974 (age 50 years), Chennai Upcoming movie: The Greatest of All Time Spouse: Sangeetha Sornalingam (m. 1999) Party: Tamilaga Vettri Kazhagam Children: Jason Sanjay, Divya Saasha";
        }
        else if (messagetext.toLowerCase().includes("ajith")) {
           autoReplyMessage ="Ajith Kumar is an Indian actor who works predominantly in Tamil cinema. To date, he has starred in over 61 films, and won four Vijay Awards, three Cinema Express Awards, three Filmfare Awards South and three Tamil Nadu State Film Awards. WikipediaBorn: 1 May 1971 (age 53 years), Secunderabad  Upcoming movie: Good Bad Ugly Spouse: Shalini (m. 2000)  Children: Anoushka Kumar  Height: 1.7 m";
        }
        else if (messagetext.toLowerCase().includes("tree")) {
           autoReplyMessage ="A tree typically has many secondary branches supported clear of the ground by the trunk, which typically contains woody tissue for strength, and vascular tissue to carry materials from one part of the tree to another. For most trees the trunk is surrounded by a layer of bark which serves as a protective barrier";
        }
        else if (messagetext.toLowerCase().includes("sea")) {
           autoReplyMessage ="In general, a sea is defined as a portion of the ocean that is partly surrounded by land. Given that definition, there are about 50 seas around the world. But that number includes water bodies not always thought of as seas, such as the Gulf of Mexico and the Hudson Bay";
        }
        else if (messagetext.toLowerCase().includes("ocean")) {
           autoReplyMessage ="In general, a sea is defined as a portion of the ocean that is partly surrounded by land. Given that definition, there are about 50 seas around the world. But that number includes water bodies not always thought of as seas, such as the Gulf of Mexico and the Hudson Bay";
        }
        else if (messagetext.toLowerCase().includes("how do you work")) {
           autoReplyMessage ="html,css,javascript";
        }
        else if (messagetext.toLowerCase().includes("how are you")) {
           autoReplyMessage ="I’m doing great, thanks for asking! How about you?";
        }
        else if (messagetext.toLowerCase().includes("i am fine")) {
           autoReplyMessage ="Glad to hear that! Anything interesting happening with you today?";
        }
        else if (messagetext.toLowerCase().includes("play video")) {
           autoReplyMessage ="I can't play videos directly, but I can help with recommendations or guide you on where to find what you're looking for. What kind of video are you interested in?Playing a video on YouTube is pretty straightforward. Here’s a quick guide:1. **Open YouTube:** - On a web browser, go to [youtube.com](https:www.youtube.com). - On a mobile device, open the YouTube app. 2. **Search for a Video:**  - In the search bar at the top of the page (or in the app), type in keywords related to the video you want to watch.  - Press Enter or tap the search icon.3. **Select a Video:** - Browse through the search results and click on the video thumbnail or title you want to watch. 4. **Play the Video:**  - Once the video page opens, press the play button (a triangle pointing to the right) in the center of the video player. 5. **Adjust Settings (Optional):** - You can use the controls at the bottom of the video player to pause, rewind, fast-forward, adjust the volume, or toggle full-screen mode. If you need any more specific help or have other questions, just let me know!"; 
        }
        else if (messagetext.toLowerCase().includes("video play")) {
           autoReplyMessage ="I can't play videos directly, but I can help with recommendations or guide you on where to find what you're looking for. What kind of video are you interested in?Playing a video on YouTube is pretty straightforward. Here’s a quick guide:1. **Open YouTube:** - On a web browser, go to [youtube.com](https:www.youtube.com). - On a mobile device, open the YouTube app. 2. **Search for a Video:**  - In the search bar at the top of the page (or in the app), type in keywords related to the video you want to watch.  - Press Enter or tap the search icon.3. **Select a Video:** - Browse through the search results and click on the video thumbnail or title you want to watch. 4. **Play the Video:**  - Once the video page opens, press the play button (a triangle pointing to the right) in the center of the video player. 5. **Adjust Settings (Optional):** - You can use the controls at the bottom of the video player to pause, rewind, fast-forward, adjust the volume, or toggle full-screen mode. If you need any more specific help or have other questions, just let me know!";
        }
        else if (messagetext.toLowerCase().includes("audio play")) {
           autoReplyMessage ="I can’t play songs directly, but I can help you find where to listen to them or suggest some great ones. Here’s how you can play songs on various platforms:### **YouTube:** 1. Go to [YouTube](https:www.youtube.com) or open the YouTube app. 2. Use the search bar to type in the song title or artist. 3. Click on the video to start playing it.  ### **Spotify:** 1. Open the Spotify app or go to [Spotify’s website](https:www.spotify.com). 2. Search for the song, artist, or album in the search bar. 3. Click on the song to start playing it. ### **Apple Music:** 1. Open the Apple Music app. 2. Use the search tab to find the song or artist. 3. Tap on the song to play it. ### **Amazon Music:** 1. Open the Amazon Music app or go to [Amazon Music’s website](https:music.amazon.com). 2. Search for the song or artist. 3. Click or tap to play the song. ### **SoundCloud:** 1. Go to [SoundCloud](https:soundcloud.com) or open the SoundCloud app. 2. Use the search bar to find the track or artist. 3. Click on the track to start listening."; 
        }
        else if (messagetext.toLowerCase().includes("song play")) {
           autoReplyMessage ="I can’t play songs directly, but I can help you find where to listen to them or suggest some great ones. Here’s how you can play songs on various platforms:### **YouTube:** 1. Go to [YouTube](https:www.youtube.com) or open the YouTube app. 2. Use the search bar to type in the song title or artist. 3. Click on the video to start playing it.  ### **Spotify:** 1. Open the Spotify app or go to [Spotify’s website](https:www.spotify.com). 2. Search for the song, artist, or album in the search bar. 3. Click on the song to start playing it. ### **Apple Music:** 1. Open the Apple Music app. 2. Use the search tab to find the song or artist. 3. Tap on the song to play it. ### **Amazon Music:** 1. Open the Amazon Music app or go to [Amazon Music’s website](https:music.amazon.com). 2. Search for the song or artist. 3. Click or tap to play the song. ### **SoundCloud:** 1. Go to [SoundCloud](https:soundcloud.com) or open the SoundCloud app. 2. Use the search bar to find the track or artist. 3. Click on the track to start listening.";
        }
        else if (messagetext.toLowerCase().includes("play song")) {
            autoReplyMessage ="I can’t play songs directly, but I can help you find where to listen to them or suggest some great ones. Here’s how you can play songs on various platforms:### **YouTube:** 1. Go to [YouTube](https:www.youtube.com) or open the YouTube app. 2. Use the search bar to type in the song title or artist. 3. Click on the video to start playing it.  ### **Spotify:** 1. Open the Spotify app or go to [Spotify’s website](https:www.spotify.com). 2. Search for the song, artist, or album in the search bar. 3. Click on the song to start playing it. ### **Apple Music:** 1. Open the Apple Music app. 2. Use the search tab to find the song or artist. 3. Tap on the song to play it. ### **Amazon Music:** 1. Open the Amazon Music app or go to [Amazon Music’s website](https:music.amazon.com). 2. Search for the song or artist. 3. Click or tap to play the song. ### **SoundCloud:** 1. Go to [SoundCloud](https:soundcloud.com) or open the SoundCloud app. 2. Use the search bar to find the track or artist. 3. Click on the track to start listening.";
        }
        else if (messagetext.toLowerCase().includes("tell me about your self")) {
            autoReplyMessage ="Sure! I’m autobot, an AI developed by OpenAI. My main purpose is to assist with information, answer questions, and have engaging conversations. Here’s a bit more about me: Training: I’m trained on a diverse range of texts from javascript, which helps me understand and generate human-like text. Capabilities: I can help with a variety of tasks, like providing explanations, giving recommendations, offering writing assistance, and even playing games or brainstorming ideas. Limitations: I don’t have personal experiences or feelings, and my knowledge is based on the information available up until my last update. I also can’t interact with the physical world or perform actions like playing videos or songs directly. Feel free to ask me anything or let me know how I can assist you today!";
        } 
        else if (messagetext.toLowerCase().includes("i like you")) {
            autoReplyMessage ="Thanks! I like you too. What’s on your mind today?";
        }
         else if (messagetext.toLowerCase().includes("what do you about me")) {
             autoReplyMessage =box4;
        }     
         else if (messagetext.toLowerCase().includes("favorite")) {
             autoReplyMessage ="If I had to choose a favorite aspect of nature, I might say the diversity of ecosystems is incredibly interesting. From the serene beauty of a forest to the vibrant life of coral reefs, each environment has its own unique charm and importance. What about you—do you have a favorite natural setting or phenomenon";
        }
         else if (messagetext.toLowerCase().includes("game")) {
             autoReplyMessage ="please click on your right side autobot symbol";
        }
         else if (messagetext.toLowerCase().includes("very good")){
            autoReplyMessage ="Glad to hear that! If there's anything specific you'd like to talk about or if you need assistance with something, just let me know.";
        }
         else if (messagetext.toLowerCase().includes("you are boring")) {
             autoReplyMessage ="I’m sorry to hear that! I want to make our conversation as engaging as possible. Let me know what you’re interested in or how I can better match your vibe. What’s something exciting or interesting to you right now?";
        }
         else if (messagetext.toLowerCase().includes("Bootstrap")) {
             autoReplyMessage ="Bootstrap is a popular open-source framework for building responsive, mobile-first websites and web applications. It provides a collection of CSS and JavaScript components, such as navigation bars, buttons, and modals, that help developers create attractive and functional interfaces quickly.Some key features of Bootstrap include: Grid System: A flexible grid system that allows you to create complex layouts easily. Predefined Components: Ready-to-use components like buttons, forms, and alerts. Responsive Design: Built-in media queries that make your website look good on various devices. Customizable: You can customize Bootstrap to fit your design needs by overriding its default styles or using its customization tools.Are you working on a project with Bootstrap, or are you curious about how to use it?";
        }
         else if (messagetext.toLowerCase().includes("java")){
              autoReplyMessage ="Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. Wikipedia Designed by: James Gosling First appeared: May 23, 1995; 29 years ago Paradigm: Multi-paradigm: generic, object-oriented (class-based), functional, imperative, reflective, concurrent";
        }
         else if (messagetext.toLowerCase().includes("c")){
              autoReplyMessage ="C is a general-purpose programming language. It was created in the 1970s by Dennis Ritchie and remains very widely used and influential. By design, C's features cleanly reflect the capabilities of the targeted CPUs. Wikipedia Designed by: Dennis Ritchie First appeared: 1972; 52 years ago Paradigm: Multi-paradigm: imperative (procedural), structured Preview release: C23 (N3220) / February 21, 2024; 5 months ago Stable release: C17 / June 2018; 6 years ago Typing discipline: Static, weak, manifest, nominal";
        }
         else if (messagetext.toLowerCase().includes("c++")){
              autoReplyMessage ="C++ is a high-level, general-purpose programming language created by Danish computer scientist Bjarne Stroustrup. Wikipedia  Designed by: Bjarne Stroustrup Family: C Filename extensions: .C,.cc,.cpp,.cxx,.c++,.h,.H,.hh,.hpp,.hxx,.h++.cppm,.ixx First appeared: 1985; 39 years ago Paradigms: Multi-paradigm: procedural, imperative, functional, object-oriented, generic, modular Preview release: C++23 / 19 March 2023; 16 months ago  Stable release: C++20 (ISO/IEC 14882:2020) / 15 December 2020; 3 years ago";
        }
         else if (messagetext.toLowerCase().includes("think about subash")){
              autoReplyMessage =box4;
        }
         else if (messagetext.toLowerCase().includes("think about")){
              autoReplyMessage =box5;
        }
         else if (messagetext.toLowerCase().includes("yes")){
              autoReplyMessage ="Got it! What would you like to talk about or do today";
        }
         else if (messagetext.toLowerCase().includes("what is your purpose")){
              autoReplyMessage ="My main purpose is to assist, inform, and engage with you. Whether you need help with a specific question, want to brainstorm ideas, or just feel like chatting, I’m here to make your experience as smooth and enjoyable as possible. How can I help you today?";
        }
        else if (messagetext.toLowerCase().includes("your purpose")){
              autoReplyMessage ="My main purpose is to assist, inform, and engage with you. Whether you need help with a specific question, want to brainstorm ideas, or just feel like chatting, I’m here to make your experience as smooth and enjoyable as possible. How can I help you today?";
        } 
         else if (messagetext.toLowerCase().includes("thats great")){
              autoReplyMessage ="Glad you think so! If you have any specific questions or need help with something, just let me know.";
        }
         else if (messagetext.toLowerCase().includes("fine")){
              autoReplyMessage = "Got it! If you need anything or just want to chat, Iam here.";
        }
         else if (messagetext.toLowerCase().includes("ok fine")){
              autoReplyMessage = "Glad to hear it! Anything on your mind today?";
        } 
         else if (messagetext.toLowerCase().includes("what is your roll")){
               autoReplyMessage = "My role is to assist you with information, answer questions, and help with a wide range of topics. Whether you need advice, a quick fact, or just someone to chat with, I'm here for that! What can I do for you today";
        }
         else if (messagetext.toLowerCase().includes("your roll")){
               autoReplyMessage = "Ah, if you’re referring to “role,” I’m here to assist and support you however I can. If you meant “roll” as in something different, let me know!";
        }        
         else {                      
           autoReplyMessage = "hi iAM AUTOBOT your text is too large or incorrect so keep it short just call the required key words";
       }
      // time delay and prepend function
       const autoReplyMessagebox = createMessageBox('left',autoReplyMessage);
       messagecontainer.prepend(autoReplyMessagebox);
   } ,1000);
}
    function createMessageBox(className,messagetext){
    const messagebox = document.createElement('div');
    messagebox.classList.add('message-box',className);
    const messageTextElement=document.createElement('p');
    messageTextElement.textContent=messagetext;
    messagebox.appendChild(messageTextElement);
    return messagebox;
}
