const openGroupModal = document.querySelector('#open-modal')
const closeModal = document.querySelector('.modal-close')
openGroupModal.addEventListener('click', e => {
    document.querySelector('.group-modal').style.transform = 'scale(1)'
})

closeModal.addEventListener('click', e => {
    document.querySelector('.group-modal').style.transform = 'scale(0)'
})