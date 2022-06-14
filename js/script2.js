// Infos
var company_name = "The Demo Company";
var call = "(07) 4012 4526";
var email = "info@demomail.com";
var whatsapp = "(07) 4012 4526";

// colors
var primary_btn_color = '#FFC521';
var primary_color = '#000000';

// First icon
var whatsappIcon = 'images/icons/whatsapp.png';
var callIconImg = 'images/icons/call.png';
var emailIcon = 'images/icons/email.png';

// Window size
let mql = window.matchMedia('(max-width: 768px)');

var whatsapp = whatsapp.replace(/[- )(]/g,'');

var animeScript = document.createElement('script');  
animeScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.js');
document.head.appendChild(animeScript);

function addStickyFooter(){

	const footer = document.querySelectorAll('footer')[0];
	const stickyContainer = document.createElement('div');
	stickyContainer.classList = 'sticky__footer_container';

	const stickyContainerList = document.createElement('ul');
	stickyContainerList.classList = 'sticky__footer_list';

	for (var i = 1; i <= 3; i++) {
		let SFLinkListItem = document.createElement('li');
		let SFLinkListItemLink = document.createElement('a');
		let SFLinkListItemIcon = document.createElement('img');
		let SFLinkListItemText = document.createElement('p');
		if (i == 1) {
			SFLinkListItemLink.setAttribute('href', `https://api.whatsapp.com/send?phone=${whatsapp}`);
			SFLinkListItemLink.setAttribute('target', '_blank');
			SFLinkListItemIcon.setAttribute('src', whatsappIcon);
			SFLinkListItemText.innerHTML = "Whatsapp";
		}
		if (i == 2) {
			SFLinkListItemLink.setAttribute('href', `tel:${call}`);
			SFLinkListItemIcon.setAttribute('src', callIconImg);
			SFLinkListItemText.innerHTML = `Call Us`;
			// SFLinkListItemText.innerHTML = `Call Us ${call}`;
		}
		if (i == 3) {
			SFLinkListItemLink.setAttribute('href', `mailto:${email}`);
			SFLinkListItemLink.setAttribute('target', '_blank');
			SFLinkListItemIcon.setAttribute('src', emailIcon);
			SFLinkListItemText.innerHTML = "Email Us";
		}
		SFLinkListItem.classList = `sticky__footer_list_item sticky__footer_list_item_${i}`;
		SFLinkListItem.append(SFLinkListItemLink);
		SFLinkListItemLink.append(SFLinkListItemIcon);
		SFLinkListItemLink.append(SFLinkListItemText);
		stickyContainerList.append(SFLinkListItem);
	}

	footer.append(stickyContainer);
	stickyContainer.append(stickyContainerList);

	// Styles
	const styles = [{
		// container styles
	    width: '100%',
	    height: 'auto',
	    padding: '0.6rem',
	    position: 'fixed',
	    bottom: '0rem',
	    right: '0rem',
	    zIndex: '9999',
	    display: 'flex',
	    justifyContent: 'center',
	    transform: 'translateY(120px)',
	    opacity: '0'
	}, {
		// List styles
	    width: '100%',
	    height: 'auto',
	    backgroundColor: '#ffffff',
	    borderRadius: '999px',
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    gap: '6px',
	    boxShadow: '0px 3px 8px rgba(0,0,0,0.18)',
	    padding: '0.4rem 0.5rem',
	}, {
		// List Item styles
	    width: '100%',
	    transform: 'translateY(120px)',
	    opacity: '0'
	}, {
		// List btn styles
	    width: '100%',
	    padding: '0.4rem 0.3rem',
	    backgroundColor: '#d0d0d0',
	    borderRadius: '999px',
	    boxShadow: '0px 3px 8px rgba(0,0,0,0.06)',
	    display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	    gap: '5px'
	}, {
		// List icon styles
	    width: '13px',
	    height: '13px',
	    objectFit: 'cover'
	}, {
		// List text styles
	    fontSize: '14px',
	    fontWeight: '500',
	    color: '#000000'
	}, {
		// popup link styles - whatsapp
	    backgroundColor: '#46C756',
	}, {
		// popup link icon styles - whatsapp
	    filter: 'invert(1)'
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
	    filter: 'invert(1)'
	}];

	Object.assign(stickyContainer.style, styles[0]);
	Object.assign(stickyContainerList.style, styles[1]);

	var btnList = document.querySelectorAll('.sticky__footer_list_item');
	btnList.forEach(function(el){
		Object.assign(el.style, styles[2]);
		Object.assign(el.querySelector('a').style, styles[3]);
		Object.assign(el.querySelector('a img').style, styles[4]);
		Object.assign(el.querySelector('a p').style, styles[5]);
	})

	Object.assign(document.querySelector('.sticky__footer_list_item_1 a').style, styles[6]);
	Object.assign(document.querySelector('.sticky__footer_list_item_1 a img').style, styles[7]);
	document.querySelector('.sticky__footer_list_item_1 a p').style.color = '#ffffff';

	Object.assign(document.querySelector('.sticky__footer_list_item_2 a').style, styles[8]);
	Object.assign(document.querySelector('.sticky__footer_list_item_2 a img').style, styles[9]);
	Object.assign(document.querySelector('.sticky__footer_list_item_2 a p').style, styles[5]);

	Object.assign(document.querySelector('.sticky__footer_list_item_3 a').style, styles[10]);
	Object.assign(document.querySelector('.sticky__footer_list_item_3 a img').style, styles[11]);
	document.querySelector('.sticky__footer_list_item_3 a p').style.color = '#ffffff';

	setTimeout(()=>{
		anime({
		  targets: stickyContainer,
		  translateY: 0,
		  opacity: 1,
		  duration: 3000
		});
		anime({
		  targets: '.sticky__footer_list_item',
		  translateY: 0,
		  opacity: 1,
		  duration: 2500,
		  delay: anime.stagger(100)
		});
	}, 1000);

}


if (mql.matches) {
	var footerContainerCheck = document.querySelector('.sticky__footer_container');
	if (!footerContainerCheck) {
		addStickyFooter();
	}
}

window.addEventListener("resize", function(event) {
	if (mql.matches) {
		var footerContainerCheck = document.querySelector('.sticky__footer_container');
		if (!footerContainerCheck) {
			addStickyFooter();
		}
	}else{
		var footerContainerCheck = document.querySelector('.sticky__footer_container');
		if (footerContainerCheck) {
			document.querySelector('.sticky__footer_container').remove();
		}
	}
})