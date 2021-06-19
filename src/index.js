import './sass/main.scss';
// import eventFinder from './js/eventFinder';
// import modal from './js/modal';
// import searchForm from './js/search-forms';
// import modalTpl from './temlates/modal.hbs';
import eventTpl from './temlates/event.hbs';

const input = document.querySelector('.input');
const listCountries = document.querySelector('.list-allExecutor');
input.addEventListener('input', funck);
function funck(event) {
  const nameCountry = event.target.value;
  console.log(nameCountry);
  fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${nameCountry}&source=universe&countryCode=US&apikey=GRPbY9DCa4eo82JvpPxXBkSp102AnOHv`,
  )
    .then(res => {
      return res.json();
    })
    .then(({ _embedded }) => {
      console.log(_embedded);
      const infoGroup = groupList(_embedded);
      listCountries.insertAdjacentHTML('afterbegin', infoGroup);
      function groupList(_embedded) {
        return eventTpl(_embedded);
      }
    });
}
