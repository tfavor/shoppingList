$(function updateList() {
    $("#js-shopping-list-form").on('submit', function(e) {
 
        const text = $("#shopping-list-entry").val();       
 
        $(".shopping-list").append(
            '<li>' +
                '<span class="shopping-item">' + text + '</span>' +
                '<div class="shopping-item-controls">' +
                    '<button class="shopping-item-toggle">' +
                        '<span class="button-label">check</span>' +
                    '</button>' +
                    '<button class="shopping-item-delete">' +
                        '<span class="button-label">delete</span>' +
                    '</button>' +
                '</div>' +
            '</li>'
            );
 
        $("#shopping-list-entry").val();
        $("#shopping-list-entry").val('');
 
        e.preventDefault();
    });
 })
 
 
 $(function checkItems() {
   
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        console.log('click');
    });
 })
 
 $(function removeItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    })
 })
 
 
 