export { onScroll, onToTopBtn, showLoading }
import { onLoadMoreBtn } from '../index'

const toBtnTop = document.querySelector('.btn-to-top');
const loading = document.querySelector('.loading');

window.addEventListener('scroll', onScroll);
toBtnTop.addEventListener('click', onToTopBtn);


function onScroll() {
  const scrolled = window.pageYOffset
  const coords = document.documentElement.clientHeight

  if (scrolled > coords) {
    toBtnTop.classList.add('btn-to-top--visible')
  }
  if (scrolled < coords) {
    toBtnTop.classList.remove('btn-to-top--visible')
  }
}


function onToTopBtn() {
  if (window.pageYOffset > 0) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
    console.log({ scrollTop, scrollHeight, clientHeight });

    if (clientHeight + scrollTop >= scrollHeight - 5) {
        showLoading();
    }
});

function showLoading() {
    loading.classList.add('show');
	setTimeout (onLoadMoreBtn, 3000)
}