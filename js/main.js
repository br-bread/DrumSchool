gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

tl.fromTo('.main-heading',{
	y: 100,
	opacity: 0
},
{
	y: 0,
	opacity: 1,
	duration: 0.6
}).fromTo('.subheading',{
	x: -100,
	opacity: 0
},
{
	x: 0,
	opacity: 1,
	duration: 0.6
}).fromTo('.hdr li',{
	y: -30,
	opacity: 0
},
{
	y: 0,
	opacity: 1,
	duration: 0.5,
	stagger: 0.15
})

gsap.to('.floating-title', {
	scrollTrigger: {
		trigger: '.features',
		start: 'center bottom'
	},
	y: 0,
	opacity: 1,
	duration: 1,
	stagger: 0.25
})


gsap.to('.sliding-block', {
	scrollTrigger: {
		trigger: '.actions',
		start: 'center bottom'
	},
	x: 0,
	opacity: 1,
	duration: 1.7,
	stagger: 0.35
})