Vue.component('search-item', {
    props: ['items'],
    template: '<a class="result-link" :href="items.href"><li class="autocomplete-result">{{ items.text }}</li></a>'
})
var input = new Vue({
    el: '#search',
    data: {
        req: '',
        list: [
            { id: 0, text: 'Первый поиск', href: '#' },
            { id: 1, text: 'Второй пример поиска', href: '#' },
            { id: 2, text: 'Не похожий пример', href: '#' },
            { id: 3, text: 'Второй пример копия', href: '#' },
            { id: 4, text: 'Игрушки', href: '#' },
            { id: 5, text: 'Рассада', href: '#' },
            { id: 6, text: 'Компьютеры', href: '#' },
            { id: 7, text: 'Википедия', href: 'https://ru.wikipedia.org/' },
            { id: 8, text: 'Гугл', href: 'https://www.google.com/' },
            { id: 9, text: 'Google', href: 'https://www.google.com/' },
            { id: 10, text: 'Текст', href: '#' },
            { id: 11, text: 'Vue.js', href: 'https://vuejs.org/' },
            { id: 12, text: 'Vim', href: 'https://www.vim.org/' },
            { id: 13, text: 'Virtual', href: '#' },
            { id: 14, text: 'Облако', href: '#' }
          ],
          outSearch: []
    },
})
input.$watch('req', (newValue) => {
    if(newValue.trim == '' || newValue == ' ' || !newValue)
    {
        this.input.outSearch = [];
        return
    }
    this.input.outSearch = [];
    this.input.list.forEach(el => {
        if(el.text.toUpperCase().match(newValue.toUpperCase())){
            this.input.outSearch.push(el)
        }
    });
    
})
