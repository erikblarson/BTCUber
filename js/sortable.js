$(function () {
    $("#sortable").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'list-group-item',
        forceHelperSize: true
    });
});