
// College Admission form ,create a basic admission form using html forms to capture the admission information  from the user?

function displayData(){
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value; 
    var phone = document.getElementById('phone').value; 
    var gender = document.getElementById('gender').value; 
    var program = document.getElementById('program').value; 

    if(name== "" || email == "" || phone== "" || gender == "" || program == ""){
        alert('Filled must not empty!!');
    }
    else{
        var display = document.getElementById('displayArea');
        display.innerHTML= `
                            <tr>
                            <th>Name</th>
                            <td>${name}</td>
                            </tr>

                            <tr>
                            <th>Email</th>
                            <td>${email}</td>
                            </tr>

                            <tr>
                            <th>phone</th>
                            <td>${phone}</td>
                            </tr>

                            <tr>
                            <th>gender</th>
                            <td>${gender}</td>
                            </tr>

                            <tr>
                            <th>program</th>
                            <td>${program}</td>
                            </tr>
        `
    }
}