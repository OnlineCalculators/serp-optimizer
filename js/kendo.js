    // Initialize KendoUI widgets
    $(document).ready(function() {

        $("#mofo_title_limit").kendoNumericTextBox({
            value: 70,
            min: 1,
            step: 1,
            format: "n0",
            decimals: 0,
            // The 'spin' configuration defines a callback to execute when the 
            // up and down arrows are clicked. Knockout.js only updates the UI 
            // when the input element changes--and that change event doesn't 
            // register until the input element loses focus or a keyboard key 
            // has been pressed. Clicking one of the arrow buttons generated by 
            // KendoUI doesn't generate a change event, so I force it here by 
            // manually causing the input element to lose focus every time an 
            // arrow button is clicked.
            spin: function(e) {
                $(document.activeElement).blur();
            }
         });
        $("#mofo_snippet_limit").kendoNumericTextBox({
            value: 156,
            min: 1,
            step: 1,
            format: "n0",
            decimals: 0,
            spin: function(e) {
                $(document.activeElement).blur();
            }
         });

        $('#mofo_splitter').kendoSplitter({
            panes: [
                {   // Header
                    collapsible: true,
                    resizable: true,
                    size: '300px'
                },
                {   // Body (Google SERP content)
                    collapsible: false,
                    resizable: true,
                },
                {   // Footer
                    collapsible: true,
                    resizable: true,
                    size: '160px'
                }
            ],
            orientation: 'vertical'
        });
    
        $('.mofo_date_picker').kendoDatePicker({
            value: '',
            format: 'MMM d, yyyy'
        });
    });
