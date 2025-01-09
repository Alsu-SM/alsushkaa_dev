export function isScrolledIntoView(elementId: string) {
	const section = document.getElementById(elementId);
	if (section) {
		const docViewTop = window.visualViewport?.pageTop || 0;
		const docViewBottom = docViewTop + (window.visualViewport?.height || 0);
		const elemTop = section?.offsetTop;
		const elemBottom = elemTop + section.offsetHeight;
		return elemBottom <= docViewBottom && elemTop >= docViewTop;
	}
	return false;
}
