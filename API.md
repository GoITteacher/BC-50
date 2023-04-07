# APIS

## LIST api:

- [Pokemon](https://pokeapi.co/)
- [Pokemon Example](https://pokeapi.co/api/v2/pokemon?offset=30&limit=10)
- [Radio](https://rapidapi.com/herihermwn/api/50k-radio-stations/)
- [News API 1](https://newsapi.org/docs/endpoints/everything)
- [News API 2](https://rapidapi.com/newscatcher-api-newscatcher-api-default/api/free-news/)
- [News API 2-1](https://free-docs.newscatcherapi.com/#request-parameters)
- [Work API 3](https://rapidapi.com/arbeitnow/api/arbeitnow-free-job-board/)
- [Pixaby](https://pixabay.com/api/docs/)
- [WORK API 4](https://documenter.getpostman.com/view/18545278/UVJbJdKh)

---

```HTML
<li class="card news-card">
    <img src="${media}" alt="" loading="lazy">
    <h3>${title}</h3>
    <p>${summary}</p>
    <hr>
    <span>${author}</span>
</li>
```

---

```HTML
<li class="card news-card">
    <h3>${title}</h3>
    <hr>
    ${description}
    <hr>
    <span>${company_name}</span>
</li>
```

---

```HTML
<li class="card news-card">
    <img src="${media}" alt="" loading="lazy">
    <h3>${title}</h3>
    <p>${summary}</p>
    <hr>
    <span>${author}</span>
</li>
```

---

```hbs
<div class='card'>
  <div class='card-img-top'>
    <img src='' alt='' style='width:200px;height:200px' />
  </div>
  <div class='card-body'>
    <h2 class='card-title'>Имя: </h2>
    <p class='card-text'>Вес: </p>
    <p class='card-text'>Рост: </p>
  </div>
</div>
```
