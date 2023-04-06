import { JobsApi } from './modules/jobsAPI';

const refs = {
  btnPrev: document.querySelector('.js-btn-prev'),
  btnNext: document.querySelector('.js-btn-next'),
  jobsListElem: document.querySelector('.js-jobs-list'),
};

const jobsApi = new JobsApi();
let prevLink = null;
let nextLink = null;

jobsApi.getJobs().then(data => {
  prevLink = data.links.prev;
  nextLink = data.links.next;

  if (prevLink) refs.btnPrev.disabled = false;
  if (nextLink) refs.btnNext.disabled = false;
  renderList(data.data);
});

function renderList(jobs) {
  refs.jobsListElem.innerHTML = createMurkup(jobs);
}

function createMurkup(jobs) {
  return jobs
    .map(({ company_name, title, description }) => {
      return `
            <li class="card news-card">
            <h3>${title}</h3>
            <hr>
            ${description}
            <hr>
            <span>${company_name}</span>
            </li>
        `;
    })
    .join('');
}

refs.btnNext.addEventListener('click', () => {
  jobsApi.getJobs(nextLink).then(data => {
    prevLink = data.links.prev;
    nextLink = data.links.next;

    if (prevLink) refs.btnPrev.disabled = false;
    else refs.btnPrev.disabled = true;

    if (nextLink) refs.btnNext.disabled = false;
    else refs.btnNext.disabled = true;

    renderList(data.data);
  });
});

refs.btnPrev.addEventListener('click', () => {
  jobsApi.getJobs(prevLink).then(data => {
    prevLink = data.links.prev;
    nextLink = data.links.next;

    refs.btnPrev.disabled = !prevLink;
    refs.btnNext.disabled = !nextLink;

    renderList(data.data);
  });
});
