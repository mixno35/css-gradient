function makeItem(_gradient = 'background-image: linear-gradient(135deg, #FDEB71 10%, #F8D800 100%);', _position = 0, _type = 'linear') {
    var gr_deg = '180deg, ';

    if (_type == 'linear') {
        _gradient = _gradient.replace('linear-gradient(', _type + '-gradient(' + gr_deg);
    } else if (_type == 'radial') {
        _gradient = _gradient.replace('linear-gradient(', _type + '-gradient(');
    }
    
    var mid = makeid(10);

    var main_container = document.createElement('li');
        main_container.classList.add('item__css_gradient');
        main_container.setAttribute('id', 'item__css_gradient_' + mid);
        main_container.setAttribute('title', _gradient);

    var container_gradient = document.createElement('div');
        container_gradient.classList.add('gradinet_container');
        container_gradient.setAttribute('style', _gradient);

    var container_used_colors = document.createElement('ul');
        container_used_colors.classList.add('used__colors');
        container_used_colors.setAttribute('id', 'used__color_' + mid);

    var container__action_menu = document.createElement('ol');
        container__action_menu.classList.add('item__action_menu');

    var item_action_copy = document.createElement('li');
        item_action_copy.classList.add('item');
        if (_gradient.length > 20) {
            item_action_copy.classList.add('copy_code');
        } else {
            item_action_copy.classList.add('copy');
        }
        item_action_copy.setAttribute('title', 'Copy');
        item_action_copy.setAttribute('onclick', 'goClipboard("' + _gradient + '")');

    container__action_menu.appendChild(item_action_copy);

    container_gradient.appendChild(container__action_menu);

    main_container.appendChild(container_gradient);
    main_container.appendChild(container_used_colors);

    document.getElementById('container__palettes').appendChild(main_container);

    appendItemUsedColors(_gradient.split(' '), 'used__color_' + mid);
}

function appendItemUsedColors(_array = '["#FFFFFF"]', _id) {
    setTimeout(() => {
        for (i = 0; i < _array.length; i++) {
            if (_array[i].startsWith('#')) {
                var strRes = _array[i].replaceAll(',', '').replaceAll(':', '').replaceAll('.', '').replaceAll(';', '').replaceAll(')', '').replaceAll('(', '');
                var item__used_color = document.createElement('li');
                    item__used_color.innerText = strRes.toUpperCase();
                    item__used_color.style.color = strRes.toUpperCase();
    
                    document.getElementById(_id).appendChild(item__used_color);
            }
        }
    }, 100);
}