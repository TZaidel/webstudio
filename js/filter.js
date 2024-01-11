const filterContainer = document.querySelector('.portfolio-filter')
const container = document.querySelector('.portfolio-container')

filterContainer.addEventListener('click', onFilterClick)

function onFilterClick(event) {
    console.log(event.target.textContent)
    if (event.target.classList.contains('btn-portfolio')) {
        const filterBtn = document.querySelectorAll('btn-portfolio')
        filterBtn.forEach(btn=> btn.classList.remove('active'))
    }
    event.target.classList.add('active')

    const filterValue= event.target.textContent.toLowerCase()
    const portfolioItems = document.querySelectorAll('.portfolio-item')
    portfolioItems.forEach(el => {
        const itemCategory = el.querySelector('.portfolio-p').textContent.toLowerCase()

        if (filterValue === 'all' || itemCategory === filterValue) {
            el.style.display ='block'
        } else {
            el.style.display = 'none'
        }
    })
}