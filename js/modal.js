(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModalClose);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
      //refs.modal.classList.toggle('visually-hidden');
    }

    function toggleModalClose() {
      refs.modal.classList.toggle('is-hidden');
      //refs.modal.classList.toggle('visually-hidden');
    }
  })();