const ShowListEvent = (e) => {
  const { target } = e;

  target.style.display = 'none';
  document.querySelector('.list').style.display = 'flex';
};

export default ShowListEvent;
