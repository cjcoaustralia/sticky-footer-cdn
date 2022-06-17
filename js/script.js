// Infos
var company_name = "The Demo Company";
var call = "(07) 4012 4526";
var email = "info@demomail.com";
var whatsapp = "(07) 4012 4533";

// colors
var primary_btn_color = '#FFC521';
var primary_color = '#000000';

// First icon
var iconPath = 'https://cdn.jsdelivr.net/gh/cjcoaustralia/sticky-footer-cdn/images/icons';
var whatsappIconImg = `${iconPath}/whatsapp-light.png`;
var callIconImg = `${iconPath}/call.png`;
var emailIconImg = `${iconPath}/email-light.png`;
var cancelIconImg = `${iconPath}/cancel.png`;

// Maximum window size (px)
var window_size = 768; 

//Buttons format
var contactFormat = ["whatsapp", "call", "email"];

// ------------------------------------------------------- Options -------------------------------------------------------------- //

// Window size
let mql = window.matchMedia(`(max-width: ${window_size}px)`);

var animeScript = document.createElement('script');  
animeScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js');
document.head.appendChild(animeScript);

whatsapp = whatsapp.replace(/[- )(]/g,'');

var contactSize, contactIconUrl, contactUrl, contactType;

function addStickyFooter(){

	const parent = document.body;
	const stickyContainer = document.createElement('div');
	stickyContainer.classList = 'sticky__footer_container';
	parent.append(stickyContainer);
	// btn
	const callBtn = document.createElement('button');
	callBtn.setAttribute('aria-label', 'Call us');
	callBtn.classList = 'sticky__footer_btn';
	const callIcon = document.createElement('img');
	callIcon.setAttribute('src', callIconImg);
	const callText = document.createElement('p');
	callText.innerHTML = `Call Us ${call}`;

	const ripple1 = document.createElement('span');
	ripple1.classList = "sticky__footer_btn_ripple sticky__footer_btn_ripple_1";
	const ripple2 = document.createElement('span');
	ripple2.classList = "sticky__footer_btn_ripple sticky__footer_btn_ripple_2";

	callBtn.append(callIcon);
	callBtn.append(callText);
	callBtn.append(ripple1);
	callBtn.append(ripple2);
	stickyContainer.append(callBtn);

	// popup
	const SFPopUp = document.createElement('div');
	SFPopUp.classList = "sticky__footer_popup";
	const popUpHeader = document.createElement('h4');
	popUpHeader.innerHTML = company_name;
	const popUpText = document.createElement('p');
	popUpText.innerHTML = "Contact us";
	const SFLinkList = document.createElement('ul');
	SFLinkList.classList = "sticky__footer_popup_ul";
	SFPopUp.append(popUpHeader);
	SFPopUp.append(popUpText);
	SFPopUp.append(SFLinkList);
	
	if (whatsapp.length) {
		contactSize = 3;
	}else{
		contactSize = 2;
		contactFormat = contactFormat.filter(e => e !== 'whatsapp');
	}

	//console.log(contactFormat);

	for (var i = 1; i <= contactSize; i++) {
		let SFLinkListItem = document.createElement('li');
		let SFLinkListItemLink = document.createElement('a');
		let SFLinkListItemIcon = document.createElement('img');

		contactType = contactFormat[i-1];
		contactIconUrl = eval(`${contactType}IconImg`);

		if (contactType == "whatsapp") {
			contactUrl = `https://api.whatsapp.com/send?phone=${whatsapp}`;
			SFLinkListItemLink.setAttribute('target', '_blank');
		}else if(contactType == "call") {
			contactUrl = `tel:${call}`;
		}else if(contactType == "email") {
			contactUrl = `mailto:${email}`;
			SFLinkListItemLink.setAttribute('target', '_blank');
		}

		SFLinkListItemLink.setAttribute('href', contactUrl);
		SFLinkListItemIcon.setAttribute('src', contactIconUrl);
		SFLinkListItem.classList = `sticky__footer_popup_list sticky__footer_list_${i} sticky__footer_list_${contactType}`;
		SFLinkListItem.append(SFLinkListItemLink);
		SFLinkListItemLink.append(SFLinkListItemIcon);
		SFLinkList.append(SFLinkListItem);
	}

	stickyContainer.append(SFPopUp);

	// Styles
	const styles = [{
		// container styles
	    width: '96%',
	    height: 'auto',
	    position: 'fixed',
	    bottom: '1.4rem',
	    right: '1.4rem',
	    zIndex: '9999',
	    display: 'flex',
	    justifyContent: 'flex-end',
	    transform: 'translateX(120px)',
	    opacity: '0'
	}, {
		// btn styles
	    maxWidth: '100%',
	    padding: '0.8rem 1.8rem',
	    backgroundColor: primary_btn_color,
	    color: primary_color,
	    borderRadius: '999px',
	    boxShadow: '0px 3px 8px rgba(0,0,0,0.16)',
	    display: 'flex',
	    alignItems: 'center',
	    gap: '12px',
	    border: 'none',
	    outline: 'none',
	    transition: '0.5s',
	    position: 'relative',
	    zIndex: '5',
	    overflow: 'hidden'
	}, {
		// btn icon styles
	    width: '18px',
	    height: 'auto',
	    // filter: 'invert(1)',
	    position: 'relative',
	    zIndex: '2'
	}, {
		// btn text styles
	    fontWeight: '700',
	    fontSize: '18px',
	    position: 'relative',
	    transition: '0.1s',
	    zIndex: '2'
	}, {
		// popup styles
	    width: '75%',
	    maxWidth: '330px',
	    padding: '32px 30px',
	    position: 'absolute',
	    bottom: 'calc(100% + 1rem)',
	    right: '0rem',
	    zIndex: '9999',
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    flexDirection: 'column',
	    backgroundColor: '#ffffff',
	    borderRadius: '0.8rem',
	    boxShadow: '0px 3px 8px rgba(0,0,0,0.16)',
	    transform: 'translateY(250px)',
	    opacity: '0',
	    zIndex: '4'
	}, {
		// popup header styles
	    fontSize: '17px',
	    fontWeight: '700',
	    marginBottom: '0.8rem',
	    color: '#000000',
	    textAlign: 'center'
	}, {
		// popup txt styles
	    fontSize: '16px',
	    marginBottom: '36px',
	    color: '#000000',
	    textAlign: 'center'
	}, {
		// popup ul styles
		width: '100%',
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    gap: '22px',
	}, {
		// popup li styles
	    display: 'block',
	    transform: 'translateY(120px)',
	    opacity: '0'
	}, {
		// popup link styles
	    display: 'block',
	    padding: '1rem',
	    borderRadius: '50%',
	    backgroundColor: '#efefef',
	    boxShadow: '0px 3px 8px rgba(0,0,0,0.16)',
	}, {
		// popup link icon styles
	    width: '1rem',
	    height: '1rem',
	    objectFit: 'cover'
	}, {
		// popup link styles - whatsapp
	    backgroundColor: '#46C756',
	}, {
		// popup link icon styles - whatsapp
	    // filter: 'invert(1)'
	}, {
		// popup link styles - call
	    backgroundColor: primary_btn_color,
	}, {
		// popup link icon styles - call
	    // filter: 'invert(1)'
	}, {
		// popup link styles - mail
	    backgroundColor: '#000000',
	}, {
		// popup link icon styles - mail
	    // filter: 'invert(1)'
	}, {
		// ripple 1
		width: '80%',
		height: '80%',
		borderRadius: '999px',
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    transform: 'translate(-50%, -50%)',
	    border: '2px solid #fff',
	    zIndex: '1',
	    opacity: '0.2'
	}, {
		// ripple 2
		width: '50%',
		height: '50%',
		borderRadius: '999px',
	    position: 'absolute',
	    top: '50%',
	    left: '50%',
	    transform: 'translate(-50%, -50%)',
	    border: '2px solid #fff',
	    zIndex: '1',
	    opacity: '0.1'
	}];

	Object.assign(stickyContainer.style, styles[0]);
	Object.assign(callBtn.style, styles[1]);
	Object.assign(callIcon.style, styles[2]);
	Object.assign(callText.style, styles[3]);
	Object.assign(SFPopUp.style, styles[4]);
	Object.assign(popUpHeader.style, styles[5]);
	Object.assign(popUpText.style, styles[6]);
	Object.assign(SFLinkList.style, styles[7]);
	var iconList = document.querySelectorAll('.sticky__footer_popup_list');
	iconList.forEach(function(el){
		Object.assign(el.style, styles[8]);
		Object.assign(el.querySelector('a').style, styles[9]);
		Object.assign(el.querySelector('a img').style, styles[10]);
	})
	if (contactSize == 3) {
		Object.assign(document.querySelector('.sticky__footer_list_whatsapp a').style, styles[11]);
		Object.assign(document.querySelector('.sticky__footer_list_whatsapp a img').style, styles[12]);
	}
	Object.assign(document.querySelector('.sticky__footer_list_call a').style, styles[13]);
	Object.assign(document.querySelector('.sticky__footer_list_call a img').style, styles[14]);
	Object.assign(document.querySelector('.sticky__footer_list_email a').style, styles[15]);
	Object.assign(document.querySelector('.sticky__footer_list_email a img').style, styles[16]);

	Object.assign(ripple1.style, styles[17]);
	Object.assign(ripple2.style, styles[18]);

	setTimeout(()=>{
		anime({
		  targets: stickyContainer,
		  translateX: 0,
		  opacity: 1,
		  duration: 1000
		});
	}, 1000);
}

if (mql.matches) {
	var footerContainerCheck = document.querySelector('.sticky__footer_container');
	if (!footerContainerCheck) {
		addStickyFooter();

		var footerBtn = document.querySelector('.sticky__footer_btn');
		var footerPopUp = document.querySelector('.sticky__footer_popup');
		var btnWidth = footerBtn.clientWidth;
		var btnHeight = footerBtn.clientHeight;
	}
}

window.addEventListener("resize", function(event) {
	if (mql.matches) {
		var footerContainerCheck = document.querySelector('.sticky__footer_container');
		if (!footerContainerCheck) {
			addStickyFooter();

			var footerBtn = document.querySelector('.sticky__footer_btn');
			var footerPopUp = document.querySelector('.sticky__footer_popup');
			var btnWidth = footerBtn.clientWidth;
			var btnHeight = footerBtn.clientHeight;

			addEffects();
		}
	}else{
		var footerContainerCheck = document.querySelector('.sticky__footer_container');
		if (footerContainerCheck) {
			document.querySelector('.sticky__footer_container').remove();
		}
	}
})

function addEffects() {
	var footerBtn = document.querySelector('.sticky__footer_btn');
	var footerPopUp = document.querySelector('.sticky__footer_popup');
	btnWidth = footerBtn.clientWidth;
	btnHeight = footerBtn.clientHeight;
	footerBtn.style.width = btnWidth+10+'px';
	footerBtn.style.height = btnHeight+'px';

	setTimeout(()=>{
		anime({
		  targets: '.sticky__footer_btn_ripple_1',
		  opacity: 0,
		  scale: 1.2,
		  direction: 'alternate',
		  loop: true,
		  duration: 3000,
		  easing: 'easeInOutSine'
		});
		anime({
		  targets: '.sticky__footer_btn_ripple_2',
		  opacity: 0,
		  scale: 1.2,
		  direction: 'alternate',
		  loop: true,
		  duration: 3000,
		  easing: 'easeInOutSine'
		});
	}, 1000);

	footerBtn.addEventListener('click', function(){
		footerPopUp.classList.toggle('active');
		if (footerPopUp.classList.contains('active')) {
			anime({
			  targets: '.sticky__footer_popup',
			  translateY: 0,
			  opacity: 1,
			  duration: 1800
			});
			anime({
			  targets: '.sticky__footer_popup li',
			  translateY: 0,
			  opacity: 1,
			  delay: anime.stagger(100),
			  duration: 2000
			});
			anime({
			  targets: '.sticky__footer_btn',
			  width: btnHeight,
			  padding: '1.2rem',
			  gap: '0',
			  duration: 100
			});
			document.querySelector('.sticky__footer_btn p').style.position = 'absolute';
			document.querySelector('.sticky__footer_btn p').style.top = '30%';
			anime({
			  targets: '.sticky__footer_btn p',
			  width: btnWidth+'px',
			  top: '50%',
			  // translateY: '50%',
			  translateX: '50rem',
			  left: '10rem',
			  opacity: 0,
			  duration: 1000,
			});
			setTimeout(()=>{
				anime({
				  targets: '.sticky__footer_btn p',
				  opacity: 0,
				  duration: 1400
				});
			}, 300)
			document.querySelector('.sticky__footer_btn img').setAttribute('src', cancelIconImg);
		}else{
			anime({
			  targets: '.sticky__footer_popup',
			  translateY: 250,
			  opacity: 0,
			  duration: 3000
			});
			anime({
			  targets: '.sticky__footer_popup li',
			  translateY: 120,
			  opacity: 10,
			  delay: anime.stagger(100),
			  duration: 2000
			});
			anime({
			  targets: '.sticky__footer_btn',
			  width: btnWidth+10,
			  padding: '0.8rem 1.8rem',
			  gap: '12px',
			  duration: 100
			});
			setTimeout(()=>{
				document.querySelector('.sticky__footer_btn p').style.position = 'relative';
				anime({
				  targets: '.sticky__footer_btn p',
				  top: '0',
				  opacity: 1,
				  left: '0',
				  duration: 1300
				});
			}, 300)
			anime({
			  targets: '.sticky__footer_btn p',
			  width: '100%',
			  top: '50%',
			  // translateY: '0',
			  translateX: '0',
			  left: '30rem',
			  duration: 100
			});
			document.querySelector('.sticky__footer_btn img').setAttribute('src', callIconImg);
		}
	})
}

document.addEventListener("DOMContentLoaded", function(event) {
	if (mql.matches) {
		var footerContainerCheck = document.querySelector('.sticky__footer_container');
		if (footerContainerCheck) {
			addEffects();
		}
	}
})