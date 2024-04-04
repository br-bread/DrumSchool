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


gsap.to('.sliding-pic-1', {
	scrollTrigger: {
		trigger: '.description-1',
		start: 'center bottom'
	},
    y: 0,
    opacity: 1,
    duration: 1.5
})

gsap.to('.sliding-pic-2', {
	scrollTrigger: {
		trigger: '.description-2',
		start: 'center bottom'
	},
    y: 0,
    opacity: 1,
    duration: 1.5
})

gsap.to('.sliding-text-1', {
	scrollTrigger: {
		trigger: '.description-1',
		start: 'center bottom'
	},
    x: 0,
	opacity: 1,
	duration: 2,
	stagger: 0.25
})

gsap.to('.sliding-text-2', {
	scrollTrigger: {
		trigger: '.description-2',
		start: 'center bottom'
	},
    x: 0,
	opacity: 1,
	duration: 2.2,
	stagger: 0.3
})