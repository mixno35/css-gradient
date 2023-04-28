(function () {
    $(document).ready(function () {
        var is_dragging;
        is_dragging = false;
        $(document).on('mousedown touchstart', '.circle', function (e) {
            return is_dragging = true;
        });
        $(document).on('mouseup touchend', function (e) {
            return is_dragging = false;
        });
        return $(window).on('mousemove touchmove', function (e) {
            var angle, center_x, center_y, circle, delta_x, delta_y, pos_x, pos_y, touch;
            if (is_dragging) {
                circle = $('.circle');
                touch = void 0;
                if (e.originalEvent.touches) {
                    touch = e.originalEvent.touches[0];
                }
                center_x = ($(circle).outerWidth() / 2) + $(circle).offset().left;
                center_y = ($(circle).outerHeight() / 2) + $(circle).offset().top;
                pos_x = e.pageX || touch.pageX;
                pos_y = e.pageY || touch.pageY;
                delta_y = center_y - pos_y;
                delta_x = center_x - pos_x;
                angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI); // Calculate Angle between circle center and mouse pos
                angle -= 90;
                if (angle < 0) {
                    angle = 360 + angle; // Always show angle positive
                }
                angle = Math.round(angle);
                $('.dot').css('transform', 'rotate(' + angle + 'deg)');
                //   $('#number_deg_gradient').value(angle + '');
                document.getElementById('number_deg_gradient').value = angle;
                deg_def = angle;
                setGradient(type_def, deg_def);
                console.log(angle);
            }
        });
    });

}).call(this);