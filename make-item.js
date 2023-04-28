function makeItem(_arraYColors = ["#F60000", "#F87000"], _position = 0, _type = 'linear') {
    var gr_deg = '180deg, ';

    var mid = makeid(10);

    var result_colors = '';

    for (i2 = 0; i2 < _arraYColors.length; i2++) {
        result_colors += _arraYColors[i2];
        if ((i2 + 1) < _arraYColors.length) {
            result_colors += ', ';
        }
    }

    var colorRes = 'linear-gradient(' + gr_deg + result_colors + ')';
    var colorResCSS = 'background-image: linear-gradient(' + gr_deg + result_colors + ');';

    var main_container = document.createElement('li');
        main_container.classList.add('item__css_gradient');
        main_container.setAttribute('id', 'item__css_gradient_' + mid);
        main_container.setAttribute('title', colorResCSS);

    var container_gradient = document.createElement('div');
        container_gradient.classList.add('gradinet_container');
        container_gradient.style.backgroundImage = colorRes;

    var container_used_colors = document.createElement('ul');
        container_used_colors.classList.add('used__colors');
        container_used_colors.setAttribute('id', 'used__color_' + mid);

    var container__action_menu = document.createElement('ol');
        container__action_menu.classList.add('item__action_menu');

    var item_action_copy = document.createElement('li');
        item_action_copy.classList.add('item');
        item_action_copy.classList.add('copy_code');
        item_action_copy.setAttribute('title', 'Copy CSS code');
        item_action_copy.setAttribute('onclick', 'goClipboard("' + colorResCSS + '")');

    var item_action_palette = document.createElement('li');
        item_action_palette.classList.add('item');
        item_action_palette.classList.add('palette');
        item_action_palette.setAttribute('id', 'item_palette_' + mid);
        item_action_palette.setAttribute('title', 'Open in palette');

    var item_action_download = document.createElement('li');
        item_action_download.classList.add('item');
        item_action_download.classList.add('download');
        item_action_download.setAttribute('onclick', 'downloadImage("' + colorRes + '")');
        item_action_download.setAttribute('title', 'Download image');

    container__action_menu.appendChild(item_action_download);
    container__action_menu.appendChild(item_action_palette);
    container__action_menu.appendChild(item_action_copy);

    container_gradient.appendChild(container__action_menu);

    main_container.appendChild(container_gradient);
    main_container.appendChild(container_used_colors);

    document.getElementById('container__palettes').appendChild(main_container);

    appendItemUsedColors(_arraYColors, mid);
}

function appendItemUsedColors(_array = ["#F60000", "#F87000"], _id) {
    setTimeout(() => {
        var colorGen = '';
        for (i = 0; i < _array.length; i++) {
            if (_array[i].startsWith('#')) {
                var item__used_color = document.createElement('li');
                    item__used_color.innerText = _array[i].toUpperCase();
                    item__used_color.style.color = _array[i].toUpperCase();
    
                    colorGen += _array[i].toUpperCase().replace('#', '_') + ' ';

                    document.getElementById('used__color_' + _id).appendChild(item__used_color);
            }
        }

        document.getElementById('item_palette_' + _id).setAttribute('onclick', 'window.location.href = "palette.html?cl=' + colorGen + '"');
    }, 100);
}