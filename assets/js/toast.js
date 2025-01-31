// script.js 

let icon = { 
	success: 
	'<i class="bx bxs-badge-check"></i>', 
	danger: 
	'<i class="bx bxs-lock"></i>', 
	info:
	'<i class="bx bx-info-circle" ></i>' ,
}; 

const showToast = ( message, toastType ,duration = 5000) => { 
	
	let box = document.createElement("div"); 
	box.classList.add( "toast", `toast-${toastType}`); 
	box.innerHTML = ` <div class="toast-content-wrapper"> 
					<div class="toast-icon"> 
					${icon[toastType]} 
					</div> 
					<div class="toast-message">${message}</div> 
					<div class="toast-progress"></div> 
					</div>`; 
	duration = duration || 5000; 
	box.querySelector(".toast-progress").style.animationDuration = 
			`${duration / 1000}s`; 

	let toastAlready = 
		document.body.querySelector(".toast"); 
	if (toastAlready) { 
		toastAlready.remove(); 
	} 

	document.body.appendChild(box)}; 

