$(document).ready(function() {

    // Add item to the To Do list when #addButton is clicked
    $('#addButton').click(function(){

        var listItem = $('#listItem');
        $('#shoppingList').append('<label class="container toDoItem">' + listItem.val() + '&nbsp;&nbsp;<input type="checkbox"><span class="checkmark"></span><input type="button" class="material-icons editMe" value="mode_edit">&nbsp;<input type="button" class="material-icons deleteMe" value="delete">&nbsp;</label>');
        $("#addButton").val("ADD").focus();
        listItem.val('').focus();

    });

    // Add item to the To Do list when Enter key is pressed on #listItem
    $( "#listItem" ).on( "keypress", function(event) {

        var keycode = event.keyCode || event.which;
        if(keycode == '13') {
            var listItem = $('#listItem');
            $('#shoppingList').append('<label class="container toDoItem">' + listItem.val() + '&nbsp;&nbsp;<input type="checkbox"><span class="checkmark"></span><input type="button" class="material-icons editMe" value="mode_edit">&nbsp;<input type="button" class="material-icons deleteMe" value="delete">&nbsp;</label>');
            event.preventDefault();
            $("#addButton").val("ADD").focus();
            listItem.val('').focus();

        }

    });

    // Delete item from To Do list when .deleteMe button is clicked
    $('#shoppingList').on("click", ".deleteMe", function () {

        $(this).closest("label").remove();

    });

    // Edit item in To Do list when .editMe button is clicked
    $('#shoppingList').on("click", ".editMe", function () {
        
        var listItem = $('#listItem');
        //var itemToEdit = $('.toDoItem');
        var itemToEdit = $(this).closest(".toDoItem");
        var editItem = $(this).closest(".toDoItem").remove();
        listItem.val(itemToEdit.text()).focus();
        $("#addButton").val("SAVE").focus();

    });

    // Delete all items from To Do list when #deleteAll button is clicked.
    // A warning message will appear first before deleting.
    $('#deleteAll').click(function() {

        var confirmDelete = confirm("Are you sure you want to delete ALL items in your list?");
        if (confirmDelete == true) {
            $(".toDoItem").remove();
        } else {
            // do nothing
        }

    });

});