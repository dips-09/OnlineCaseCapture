function UpdateProductName() {
            var prodObj = document.getElementById('Product');
            var prodNameObj = document.getElementById('ProductName');
            prodNameObj.value = prodObj.options[prodObj.selectedIndex].text;
        }
        
        function IsValidForm() {
            var errMessage = '';
            if (document.getElementById('LName').value == '') {
                errMessage = 'Enter Last Name.\n';
            }
            if (document.getElementById('Company').value == '') {
                errMessage += 'Enter Company.\n';
            }
            
            // Email validation
            if (document.getElementById('Email') && document.getElementById('Email').value !== '') {
                var email = document.getElementById('Email').value;
                var emailPattern = /^(\w+(?:\.\w+)*)@((?:\w+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                if (!emailPattern.test(email)) {
                    errMessage += 'Not a valid Email Address.\n';
                }
            }
            
            if (errMessage != '') {
                alert(errMessage);
                return false;
            }
            return true;
        }