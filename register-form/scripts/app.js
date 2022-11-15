$(document).ready(function () {
    const $inputs = $('input');
    const $error = $('li.error');
    const INVALID_CLASS_NAME = 'invalid'
    const regExps = {
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        phone: /^[0-9]{11}$/,
        national_code: /^([0-9]){10}$/
    };
    let errFound = false;


    $('form').submit(function (e) {
        e.preventDefault();

        errFound = false;
        for (let i = 0; i < $inputs.length; ++i) {
            let $current = $inputs.eq(i);
            let regExp = regExps[$current.attr('name')];
            if (!$current.val() || (regExp && !regExp.test($current.val()))) {
                $current.addClass(INVALID_CLASS_NAME);
                $error.show();
                errFound = true;
            }
            else
                $current.removeClass(INVALID_CLASS_NAME);
        }
        if (!errFound) {
            alert("اطلاعات با موفقیت ثبت شد.")
            $error.hide();
        }
    });

    $('input[validation=true]').on('input', function (e) {
        let $this = $(this);
        let reg = regExps[$this.attr('name')];

        if (!reg.test($this.val()))
            $this.addClass(INVALID_CLASS_NAME);
        else
            $this.removeClass(INVALID_CLASS_NAME);
    });
})