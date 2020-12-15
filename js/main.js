document.addEventListener('DOMContentLoaded', () => {
  // CALL ACTION MODAL WINDOW
  const closeBtn = document.querySelector('.call-action__closeBtn');
  const callForm = document.querySelector('.call-action__form');
  const showForm = document.getElementById('do_show');
  const formBg = document.querySelector('.call-action__bg');
  const callModal = document.querySelector('.call-action');

  //open
  showForm.addEventListener('click', (e) => {
    openCallModall(e);
  });
  //close
  closeBtn.addEventListener('click', (e) => {
    closeCallModall(e);
  });

  function openCallModall(e) {
    e.preventDefault();
    showForm.style.display = 'none';
    closeBtn.style.display = 'flex';
    formBg.classList.add('move');
    callForm.classList.add('show');
    callModal.classList.add('show');
  }
  function closeCallModall(e) {
    e.preventDefault();
    formBg.classList.remove('move');
    callForm.classList.remove('show');
    showForm.style.display = 'flex';
    closeBtn.style.display = 'none';
    setTimeout(() => {
      callModal.classList.remove('show');
    }, 400);
  }
});
