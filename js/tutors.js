gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

tl.fromTo('.floating-title',{
	y: 100,
	opacity: 0
},
{
	y: 0,
	opacity: 1,
	duration: 0.6
})


gsap.to('.sliding-list-1', {
	scrollTrigger: {
		trigger: '.tutor-1',
		start: 'top center',
	},
    x: 0,
	opacity: 1,
	duration: 1.7,
	stagger: 0.25,
})

gsap.to('.sliding-list-2', {
	scrollTrigger: {
		trigger: '.tutor-2',
		start: 'top center',
	},
    x: 0,
	opacity: 1,
	duration: 1.7,
	stagger: 0.25,
})