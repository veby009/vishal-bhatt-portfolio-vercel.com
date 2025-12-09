// Smooth scroll
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    const id=a.getAttribute('href');
    document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
  });
});

// Reveal animations on scroll
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('reveal-in'); }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal,.card').forEach(el=>observer.observe(el));

// Gallery setup — update filenames if needed
const gallery=document.getElementById('gallery');
const certs=[
  'assets/certificates/cissp-certificate.jpg',
  'assets/certificates/architecting-google-kubernetes.jpg',
  'assets/certificates/ethical-hacking.jpg',
  'assets/certificates/intro-ai.jpg',
  'assets/certificates/intro-cybercrime.jpg',
  'assets/certificates/cyber-hygiene.jpg',
  'assets/certificates/core-infra.jpg',
  'assets/certificates/networking.jpg'
];

certs.forEach(src=>{
  const img=document.createElement('img');
  img.src=src;
  img.alt='Certificate';
  img.loading='lazy';
  gallery.appendChild(img);
  img.addEventListener('click',()=>openLightbox(src));
});

// Lightbox
const lightbox=document.getElementById('lightbox');
const lightboxImg=document.getElementById('lightboxImg');
const closeBtn=document.querySelector('.lightbox__close');

function openLightbox(src){
  lightboxImg.src=src;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
}
closeBtn.addEventListener('click',()=>{
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden','true');
});
lightbox.addEventListener('click',e=>{
  if(e.target===lightbox){ closeBtn.click(); }
});

// Contact form status (Formspree)
const form=document.getElementById('contactForm');
if(form){
  form.addEventListener('submit',async(e)=>{
    const btn=form.querySelector('button[type="submit"]');
    btn.disabled=true; btn.textContent='Sending...';
    try{
      // Let browser submit normally to Formspree
      // Optional: AJAX post then show success
      setTimeout(()=>{ btn.textContent='Sent!'; },900);
    }catch(err){
      btn.disabled=false; btn.textContent='Send';
      alert('Something went wrong. Please try again.');
    }
  });
}
