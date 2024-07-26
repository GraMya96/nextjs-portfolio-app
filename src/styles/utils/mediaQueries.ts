const breakpoints = {
	mobile: '480',
	big_mobile: '576',
	tablet: '768',
	laptop: '991',
	desktop: '1600',
};

type Mq = keyof typeof breakpoints;

const mq = Object.keys(breakpoints)
	.map((key) => [key, breakpoints[key as Mq]])
	.reduce((prev, [key, breakpoint]) => {
		prev[key as Mq] = `@media (min-width: ${breakpoint}px)`;
		return prev;
	}, {} as Record<Mq, string>);

export default mq;
