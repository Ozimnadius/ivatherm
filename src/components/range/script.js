//range
window.addEventListener('load', function () {

    let ranges = document.querySelectorAll('.range');

    ranges.forEach(function (i) {
        let from = Number(i.dataset.from),
            to = Number(i.dataset.to),
            range = i.querySelector('.range__slider');

        noUiSlider.create(range, {
            start: [from, to],
            connect: true,
            step: 1,
            range: {
                'min': from,
                'max': to
            }
        });

        let inputs = i.querySelectorAll('.range__input');

        range.noUiSlider.on('update', function (values, handle) {
            inputs[handle].value = Math.round(values[handle]);
        });

        range.noUiSlider.on('end', function (values, handle) {
            $(inputs[handle]).trigger('change');
        });

        inputs.forEach((i, x) => {
            i.addEventListener('change', function () {
                range.noUiSlider.set(getValues(x, this.value));
            });
        });

        function getValues(i, value) {
            let arr = [null, null];
            arr[i] = value;

            return arr;
        }

    });
});
